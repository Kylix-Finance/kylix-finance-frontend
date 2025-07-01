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

  const [activeTab, setActiveTab] = useQueryState<Tab>("tab", {
    defaultValue: "supplied",
    parse: (value: string): Tab =>
      value === "supplied" ? "supplied" : "borrowed",
  });
  const [selectedSort, setSelectedSort] = useQueryState("sort", {
    defaultValue: sortOptionKeys[0],
  });

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
  }, [activeTab]);

  const networkKeys = Array.from(networks.keys());
  const [selectedNetwork, setSelectedNetwork] = useQueryState("network", {
    defaultValue: networkKeys[0],
  });
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
    ></TableLayout>
  );
};

export default Tables;
