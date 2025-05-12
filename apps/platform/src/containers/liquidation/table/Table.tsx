"use client";
import { ButtonGroup } from "~/components/ui/button-group";
import styles from "./Table.module.scss";
import { useQueryState } from "nuqs";
import { ButtonGroupTab } from "~/types";
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
    return recentLiquidationData.slice(0, parseInt(limit) || 10);
  }, [recentLiquidationData, limit]);
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
              setActiveTab={(value) => {
                setActiveTab(value as LiquidationTabType);
              }}
            />
          </div>
          <p className={styles.description}>
            Recent liquidations of BTC tokens with USDC payments and price
            fluctuations.
          </p>
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
              data={userBidsData || []}
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
