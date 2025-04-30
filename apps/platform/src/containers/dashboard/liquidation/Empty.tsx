import { EmptyState } from "~/components/empty-state";
import Ghost from "~/assets/icons/ghost.svg";

interface Props {
  isEmpty: boolean;
  hasBorder?: boolean;
}

const Empty = ({ isEmpty, hasBorder }: Props) => {
  return (
    <>
      {isEmpty && (
        <EmptyState
          description="No liquidation markets available. This could be due to unavailable data or no matching search results."
          title="No Liquidation Markets Found"
          icon={Ghost}
          hasBorder={hasBorder}
        />
      )}
    </>
  );
};

export default Empty;
