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
          description="We couldn't find any supplies in your portfolio."
          title="No Supplies Found"
          icon={Ghost}
          hasBorder={hasBorder}
        />
      )}
    </>
  );
};

export default Empty;
