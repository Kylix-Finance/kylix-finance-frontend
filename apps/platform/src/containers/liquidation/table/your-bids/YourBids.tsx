import { UserBid } from "@repo/onchain";
import Empty from "./Empty";
import YourBidsTable from "./table/YourBidsTable";
import Cards from "./cards/Cards";
import { useIsDesktop } from "~/hooks/useIsDesktop";

interface Props {
  data: UserBid[];
  isPending: boolean;
  assetId: string;
  isEmpty: boolean;
}

const YourBids = ({ data, isPending, assetId, isEmpty }: Props) => {
  const isDesktop = useIsDesktop();
  return (
    <div>
      {isDesktop ? (
        <YourBidsTable assetId={assetId} data={data} isPending={isPending} />
      ) : (
        <Cards assetId={assetId} data={data} isPending={isPending} />
      )}
      <Empty isEmpty={isEmpty} />
    </div>
  );
};

export default YourBids;
