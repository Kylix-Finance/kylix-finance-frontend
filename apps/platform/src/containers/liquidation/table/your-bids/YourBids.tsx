import { UserBid } from "@repo/onchain";
import Empty from "./Empty";
import { useViewportSize } from "@mantine/hooks";
import { BREAKPOINTS } from "~/constants";
import YourBidsTable from "./table/YourBidsTable";
import Cards from "./cards/Cards";

interface Props {
  data: UserBid[];
  isPending: boolean;
  assetId: string;
  isEmpty: boolean;
}

const YourBids = ({ data, isPending, assetId, isEmpty }: Props) => {
  const { width } = useViewportSize();
  const isDesktop = width >= BREAKPOINTS.DESKTOP;
  return (
    <div>
      {isDesktop ? (
        <YourBidsTable assetId={assetId} data={data} isPending={isPending} />
      ) : (
        <Cards assetId={assetId} data={data} isPending={true} />
      )}
      <Empty isEmpty={isEmpty} hasBorder />
    </div>
  );
};

export default YourBids;
