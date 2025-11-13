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
          description="No markets were found. This could be due to no available markets or your search criteria didn't match any results."
          title="No Markets Found"
          icon={Ghost}
          hasBorder={hasBorder}
        />
      )}
    </>
  );
};

export default Empty;
