"use client";
import TableLayout from "~/components/table-layout";
import styles from "./Tables.module.scss";
import { ButtonGroup } from "~/components/ui/button-group";
import { useQueryState } from "nuqs";
import Sort from "~/components/sort";
import Network from "~/components/filters/network/Network";
import { useMemo } from "react";
import { Sort as SortItemType } from "~/types";
import { Input } from "~/components/ui/input";
import Search from "~/assets/icons/search.svg";
import {
  useGetAssetWiseBorrowsCollaterals,
  useGetAssetWiseSupplies,
} from "@repo/onchain";
import { AnimatePresence, motion } from "motion/react";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";
import { useViewportSize } from "@mantine/hooks";
import Borrowed from "./borrowed/Borrowed";
import Supplies from "./supplies/Supplies";

type Tab = "supplied" | "borrowed";

const sortOptions = new Map<string, SortItemType>([
  [
    "total_value_locked",
    {
      title: "Total Value Locked",
      value: "total_value_locked",
    },
  ],
  [
    "none",
    {
      title: "None",
      value: "none",
    },
  ],
  [
    "most_used_assets",
    {
      title: "Most Used Assets",
      value: "most_used_assets",
    },
  ],
]);
const sortOptionKeys = Array.from(sortOptions.keys());

const Tables = () => {
  const [q, setQ] = useQueryState("q");
  const { width } = useViewportSize();

  const [activeTab, setActiveTab] = useQueryState<Tab>("tab", {
    defaultValue: "supplied",
    parse: (value: string): Tab =>
      value === "supplied" ? "supplied" : "borrowed",
  });
  const [selectedSort, setSelectedSort] = useQueryState("sort", {
    defaultValue: sortOptionKeys[0],
  });
  const {
    data: assetWiseBorrowsCollaterals,
    isLoading: isGetAssetWiseBorrowsCollateralLoading,
    isPending: isGetAssetWiseBorrowsCollateralsPending,
    isFetched: isGetAssetWiseBorrowsCollateralFetched,
  } = useGetAssetWiseBorrowsCollaterals({
    enabled: activeTab === "borrowed",
  });
  const {
    data: assetWiseSupplies,
    isLoading: isGetAssetWiseSuppliesLoading,
    isPending: isGetAssetWiseSuppliesPending,
    isFetched: isGetAssetWiseSuppliesFetched,
  } = useGetAssetWiseSupplies({
    enabled: activeTab == "supplied",
  });
  //networks should be fetched from backend
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
    return map;
  }, []);

  const networkKeys = Array.from(networks.keys());
  const [selectedNetwork, setSelectedNetwork] = useQueryState("network", {
    defaultValue: networkKeys[0],
  });

  const finalBorrowedData = useMemo(() => {
    if (!assetWiseBorrowsCollaterals || activeTab !== "borrowed") return [];
    const query = q?.trim().toLowerCase() || "";
    let filtered = assetWiseBorrowsCollaterals.borrowedAssets.filter((item) => {
      const name = item.assetName.toLowerCase();
      const symbol = item.assetSymbol.toLowerCase();
      return !query || name.includes(query) || symbol.includes(query);
    });
    if (selectedNetwork !== "none") {
      filtered = filtered.filter(
        (item) => item.assetSymbol === selectedNetwork
      );
    }

    return filtered;
  }, [activeTab, assetWiseBorrowsCollaterals, q, selectedNetwork]);
  const finalSuppliesData = useMemo(() => {
    if (!assetWiseSupplies || activeTab !== "supplied") return [];
    const query = q?.trim().toLowerCase() || "";
    let filtered = assetWiseSupplies.suppliedAssets.filter((item) => {
      const name = item.assetName.toLowerCase();
      const symbol = item.assetSymbol.toLowerCase();
      return !query || name.includes(query) || symbol.includes(query);
    });
    if (selectedNetwork !== "none") {
      filtered = filtered.filter(
        (item) => item.assetSymbol === selectedNetwork
      );
    }

    return filtered;
  }, [activeTab, assetWiseSupplies, q, selectedNetwork]);
  const isBorrowedEmpty =
    (!finalBorrowedData || finalBorrowedData.length === 0) &&
    !isGetAssetWiseBorrowsCollateralLoading &&
    isGetAssetWiseBorrowsCollateralFetched;
  return (
    <TableLayout
      header={
        <div className={styles.header}>
          <div className={styles.switcher}>
            <ButtonGroup
              tabs={[
                {
                  value: "supplied" as const,
                  content: "Your Supplies",
                },
                {
                  value: "borrowed" as const,
                  content: "Your Borrows",
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
                <Network
                  networks={networks}
                  networkKeys={networkKeys}
                  selectedNetwork={selectedNetwork}
                  setSelectedNetwork={setSelectedNetwork}
                  isPending={false}
                />
              </div>
              <div className={styles.option}>
                <p className={styles.label}>Sort by:</p>
                <Sort
                  keys={sortOptionKeys}
                  items={sortOptions}
                  onChange={(value: string) => {
                    setSelectedSort(value);
                  }}
                  value={selectedSort}
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
        {activeTab === "borrowed" && (
          <motion.div
            key="borrowed"
            {...framerProps}
            variants={fadeInOutAnimation}
            style={{
              maxHeight: width !== 0 ? "max-content" : "400px",
              minHeight: 432,
            }}
          >
            <Borrowed
              data={finalBorrowedData}
              isEmpty={isBorrowedEmpty}
              isPending={isGetAssetWiseBorrowsCollateralsPending}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {activeTab === "supplied" && (
          <motion.div
            key="supplied"
            {...framerProps}
            variants={fadeInOutAnimation}
            style={{
              maxHeight: width !== 0 ? "max-content" : "400px",
              minHeight: 432,
            }}
          >
            <Supplies
              data={finalSuppliesData}
              isEmpty={isBorrowedEmpty}
              isPending={isGetAssetWiseBorrowsCollateralsPending}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </TableLayout>
  );
};

export default Tables;
