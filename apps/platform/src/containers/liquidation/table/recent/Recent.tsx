"use client";
import { RecentLiquidation } from "~/hooks/api/useRecentLiquidation";
import Empty from "./Empty";
import { Button } from "~/components/ui/button";
import { VoidFunction } from "~/types";
import RecentTable from "./table/RecentTable";
import styles from "./Recent.module.scss";
import { BREAKPOINTS } from "~/constants";
import { useViewportSize } from "@mantine/hooks";
import Cards from "./cards/Cards";
interface Props {
  isPending: boolean;
  isEmpty: boolean;
  data: RecentLiquidation[];
  onLoadMoreClick: VoidFunction;
  hasMore: boolean;
}
const Recent = ({
  isPending,
  data,
  isEmpty,
  hasMore,
  onLoadMoreClick,
}: Props) => {
  const { width } = useViewportSize();
  const isDesktop = width >= BREAKPOINTS.DESKTOP;
  return (
    <div>
      {isDesktop ? (
        <RecentTable data={data} isPending={isPending} />
      ) : (
        <Cards data={data} isPending={isPending} />
      )}
      {!isEmpty && (
        <div className={styles.footer}>
          <Button
            onClick={onLoadMoreClick}
            variant="secondary"
            disabled={isPending || !hasMore}
          >
            Load More Assets
          </Button>
        </div>
      )}
      <Empty isEmpty={isEmpty} />
    </div>
  );
};

export default Recent;
