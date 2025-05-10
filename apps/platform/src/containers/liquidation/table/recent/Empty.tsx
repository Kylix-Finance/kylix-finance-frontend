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
          description="There are currently no liquidations to display."
          title="No Recent Liquidations"
          icon={Ghost}
          hasBorder={hasBorder}
        />
      )}
    </>
  );
};

export default Empty;
