"use client";
import { ButtonGroup } from "~/components/ui/button-group";
import styles from "./Table.module.scss";
import { useQueryState } from "nuqs";
import { ButtonGroupTab, Sort as SortItem } from "~/types";
import TableLayout from "~/components/table-layout";
import { AnimatePresence, motion } from "motion/react";
import Recent from "./recent/Recent";
import YourBids from "./your-bids/YourBids";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";
import { useParams } from "next/navigation";
import { useRecentLiquidation } from "~/hooks/api/useRecentLiquidation";
import { useMemo } from "react";
import { useGetUserBids } from "@repo/onchain";
import { useAccountsStore } from "@repo/shared";
import Sort from "~/components/sort";

type LiquidationTabType = "recent" | "bids";
const tabs: ButtonGroupTab[] = [
  {
    content: "Recent",
    value: "recent",
  },
  {
    content: "Your Bids",
    value: "bids",
  },
];

const sortRecentOptions: SortItem[] = [
  {
    title: "Average Price",
    value: "averagePrice",
  },
  {
    title: "Time",
    value: "time",
  },
];
const sortYourBidsOptions: SortItem[] = [
  {
    title: "Filled Amount",
    value: "filledAmount",
  },
  { title: "Discount", value: "discount" },
];
const Table = () => {
  const { id: assetId } = useParams<{ id: string }>();
  const { account } = useAccountsStore();
  const [activeTab, setActiveTab] = useQueryState<LiquidationTabType>("tab", {
    clearOnDefault: true,
    defaultValue: "recent" as LiquidationTabType,
    parse: (value) => {
      return value === "recent" || value === "bids"
        ? (value as LiquidationTabType)
        : ("recent" as LiquidationTabType);
    },
  });
  const [limit, setLimit] = useQueryState("limit", {
    clearOnDefault: true,
    defaultValue: "10",
  });

  const sortOptions = useMemo(() => {
    const map = new Map<string, SortItem>([
      [
        "none",
        {
          title: "All",
          value: "all",
        },
      ],
    ]);
    if (activeTab === "bids") {
      sortYourBidsOptions.forEach((item) => {
        map.set(item.value, item);
      });
    } else if (activeTab === "recent") {
      sortRecentOptions.forEach((item) => {
        map.set(item.value, item);
      });
    }
    return map;
  }, [activeTab]);
  const sortOptionKeys = Array.from(sortOptions.keys());

  const [sortBy, setSortBy] = useQueryState("sort_by", {
    clearOnDefault: true,
    defaultValue: sortOptionKeys[0],
    parse: (value) =>
      sortOptionKeys.includes(value) ? value : sortOptionKeys[0],
  });

  const {
    data: recentLiquidationData,
    isFetched: isRecentLiquidationFetched,
    isLoading: isRecentLiquidationLoading,
  } = useRecentLiquidation(assetId);
  const {
    data: userBidsData,
    isFetched: isUserBidsFetched,
    isLoading: isUserBidsLoading,
  } = useGetUserBids({
    account: account?.address,
    assetId,
  });
  const isRecentLiquidationPending =
    !recentLiquidationData &&
    (isRecentLiquidationFetched || isRecentLiquidationLoading);
  const isUserBidsPending =
    !userBidsData && (isUserBidsFetched || isUserBidsLoading);

  const isRecentLiquidationEmpty =
    (!recentLiquidationData || recentLiquidationData.length === 0) &&
    !isRecentLiquidationLoading &&
    isRecentLiquidationFetched;
  const isUserBidsEmpty =
    (!userBidsData || userBidsData.length === 0) &&
    !isUserBidsLoading &&
    isUserBidsFetched;

  const finalRecentData = useMemo(() => {
    if (!recentLiquidationData) return [];

    const data = [...recentLiquidationData];

    if (sortBy === "time") {
      data.sort((a, b) => b.time - a.time);
    } else if (sortBy === "averagePrice") {
      data.sort((a, b) => b.averagePrice - a.averagePrice);
    }
    return data.slice(0, parseInt(limit, 10) || 10);
  }, [recentLiquidationData, limit, sortBy]);
  const finalUserBidsData = useMemo(() => {
    if (!userBidsData) return [];

    const data = [...userBidsData];

    if (sortBy === "discount") {
      data.sort((a, b) => b.discount - a.discount);
    } else if (sortBy === "filledAmount") {
      data.sort((a, b) => b.filled_amount - a.filled_amount);
    }
    return data.slice(0, parseInt(limit, 10) || 10);
  }, [userBidsData, sortBy]);
  const hasMore = finalRecentData.length < (recentLiquidationData?.length ?? 0);
  const handleLoadMoreClick = () => {
    if (!hasMore) return;
    setLimit((value) => ((parseInt(value) || 10) + 10).toString());
  };

  return (
    <TableLayout
      header={
        <div className={styles.header}>
          <div className={styles.tabs}>
            <ButtonGroup
              tabs={tabs}
              activeTab={activeTab}
              fullWidth
              setActiveTab={(value) => {
                setActiveTab(value as LiquidationTabType);
                setSortBy(null);
              }}
            />
          </div>
          <p className={styles.description}>
            Recent liquidations of BTC tokens with USDC payments and price
            fluctuations.
          </p>
          <div className={styles.filter}>
            <div className={styles.option}>
              <p className={styles.label}>Sort by:</p>
              <Sort
                keys={sortOptionKeys}
                items={sortOptions}
                onChange={(value) => setSortBy(value)}
                value={sortBy}
              />
            </div>
          </div>
        </div>
      }
    >
      <AnimatePresence mode="wait">
        {activeTab === "recent" && (
          <motion.div
            key="recent"
            {...framerProps}
            variants={fadeInOutAnimation}
          >
            <Recent
              isPending={isRecentLiquidationPending}
              data={finalRecentData}
              isEmpty={isRecentLiquidationEmpty}
              hasMore={hasMore}
              onLoadMoreClick={handleLoadMoreClick}
            />
          </motion.div>
        )}
        {activeTab === "bids" && (
          <motion.div key="bids" {...framerProps} variants={fadeInOutAnimation}>
            <YourBids
              data={finalUserBidsData}
              isPending={isUserBidsPending}
              isEmpty={isUserBidsEmpty}
              assetId={assetId}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </TableLayout>
  );
};

export default Table;
