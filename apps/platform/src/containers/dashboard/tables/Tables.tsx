import styles from "./Tables.module.scss";
import { ButtonGroup } from "~/components/ui/button-group";
import { useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";
import TableLayout from "~/components/table-layout";
import { Input } from "~/components/ui/input";
import Search from "~/assets/icons/search.svg";
import { useQueryState } from "nuqs";
import { SelectBox } from "~/components/inputs/select-box";
import Glob from "~/assets/icons/glob.svg";
import capitalize from "lodash/capitalize";
import Markets from "../markets/Markets";
import Liquidation from "../liquidation/Liquidation";
import { useGetLendingPools } from "@repo/onchain";
import { useAccountsStore } from "@repo/shared";
import TokenIcon from "~/components/token-icon";
type Tab = "markets" | "liquidations";
interface Network {
  name: string;
  symbol: string;
}
interface Sort {
  name: string;
  value: string;
}
const sortOptions = new Map<string, Sort>([
  [
    "total_value_locked",
    {
      name: "Total Value Locked",
      value: "total_value_locked",
    },
  ],
  [
    "none",
    {
      name: "None",
      value: "none",
    },
  ],
  [
    "most_used_assets",
    {
      name: "Most Used Assets",
      value: "most_used_assets",
    },
  ],
]);
const sortOptionKeys = Array.from(sortOptions.keys());
export const Tables = () => {
  const [activeTab, setActiveTab] = useQueryState<Tab>("tab", {
    defaultValue: "markets",
    parse: (value: string): Tab =>
      value === "liquidations" ? "liquidations" : "markets",
  });
  const { account } = useAccountsStore();
  const {
    data: pool,
    isLoading,
    isFetched,
  } = useGetLendingPools({
    enabled: activeTab === "markets",
    account: account?.address,
  });
  const isMarketsPending = !pool && (isLoading || !isFetched);

  const networks = useMemo(() => {
    const map = new Map<string, Network>([
      [
        "none",
        {
          name: "All Networks",
          symbol: "none",
        },
      ],
    ]);
    pool?.assets?.forEach((item) => {
      map.set(item.asset_symbol, {
        name: item.asset,
        symbol: item.asset_symbol,
      });
    });
    return map;
  }, [pool?.assets]);
  const networkKeys = Array.from(networks.keys());

  const [q, setQ] = useQueryState("q");
  const [selectedNetwork, setSelectedNetwork] = useQueryState("network", {
    defaultValue: networkKeys[0],
  });
  const [selectedSort, setSelectedSort] = useQueryState("sort", {
    defaultValue: sortOptionKeys[0],
  });

  const renderNetwork = (key: string) => {
    const network = networks.get(key);
    return (
      <div className={styles.selected_network}>
        {key === "none" || isMarketsPending ? (
          <Glob className={styles.glob} />
        ) : (
          <TokenIcon height={20} width={20} symbol={key} />
        )}
        {capitalize(network?.name || "All networks")}
      </div>
    );
  };
  const renderSort = (key: string) => {
    const option = sortOptions.get(key);
    if (!option) return null;
    return (
      <div className={styles.selected_network}>{capitalize(option.name)}</div>
    );
  };
  const finalPoolData = useMemo(() => {
    if (!pool?.assets || activeTab !== "markets") return [];
    const query = q?.trim().toLowerCase() || "";
    let filtered = pool.assets.filter((item) => {
      const name = item.asset.toLowerCase();
      const symbol = item.asset_symbol.toLowerCase();
      return !query || name.includes(query) || symbol.includes(query);
    });
    if (selectedNetwork !== "none") {
      filtered = filtered.filter(
        (item) => item.asset_symbol === selectedNetwork
      );
    }

    return filtered;
  }, [activeTab, pool?.assets, q, selectedNetwork]);

  const isMarketsEmpty =
    (!finalPoolData || finalPoolData.length === 0) && !isLoading && isFetched;

  return (
    <TableLayout
      header={
        <div className={styles.header}>
          <div className={styles.switcher}>
            <ButtonGroup
              tabs={[
                {
                  value: "markets" as const,
                  content: "Markets",
                },
                {
                  value: "liquidations" as const,
                  content: "Liquidations",
                },
              ]}
              activeTab={activeTab}
              setActiveTab={(value) => {
                setActiveTab(value);
                setQ(null);
              }}
              fullWidth
            />
          </div>
          <div className={styles.options}>
            <div className={styles.left}>
              <div className={styles.option}>
                <p className={styles.label}>Filter by:</p>
                <SelectBox
                  options={networkKeys}
                  onChange={(value: string) => {
                    setSelectedNetwork(value);
                  }}
                  renderOption={renderNetwork}
                  value={selectedNetwork}
                  renderValue={renderNetwork}
                  className={styles.select}
                />
              </div>
              <div className={styles.option}>
                <p className={styles.label}>Sort by:</p>
                <SelectBox
                  options={sortOptionKeys}
                  onChange={(value: string) => {
                    setSelectedSort(value);
                  }}
                  renderOption={renderSort}
                  value={selectedSort}
                  renderValue={renderSort}
                  className={styles.select}
                />
              </div>
            </div>
            <div className={styles.search}>
              <Input
                icon={Search}
                placeholder="Search by name"
                onChange={(e) => setQ(e.target.value)}
                value={q || ""}
              />
            </div>
          </div>
        </div>
      }
    >
      <AnimatePresence mode="wait">
        {activeTab === "markets" && (
          <motion.div
            key="markets"
            {...framerProps}
            variants={fadeInOutAnimation}
          >
            <Markets
              data={finalPoolData}
              isEmpty={isMarketsEmpty}
              isPending={isMarketsPending}
            />
          </motion.div>
        )}

        {activeTab === "liquidations" && (
          <motion.div
            key="liquidations"
            {...framerProps}
            variants={fadeInOutAnimation}
          >
            <Liquidation query={q} />
          </motion.div>
        )}
      </AnimatePresence>
    </TableLayout>
  );
};
