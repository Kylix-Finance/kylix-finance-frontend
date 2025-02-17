import { Button } from "@mui/material";
import { useCancelBid } from "~/hooks/chain/useCancelBid";

interface Props {
  assetId: string | number;
  txBlockNumber: number;
  txIndex: number;
  discount: number;
}

const CancelBidButton = ({
  assetId,
  txBlockNumber,
  discount,
  txIndex,
}: Props) => {
  const { mutate, isPending } = useCancelBid();

  const cancelHandler = () => {
    mutate({
      assetId,
      discount,
      txBlockNumber,
      txIndex,
    });
  };
  return (
    <Button
      variant="contained"
      color="error"
      onClick={cancelHandler}
      disabled={isPending}
    >
      Cancel
    </Button>
  );
};

export default CancelBidButton;
