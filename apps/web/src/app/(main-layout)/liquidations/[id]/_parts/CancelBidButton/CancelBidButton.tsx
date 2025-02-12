import { Button } from "@mui/material";
import css from "./CancelBidButton.module.scss";
import { useCancelBid } from "~/hooks/chain/useCancelBid";

interface Props {
  assetId: string;
}

const CancelBidButton = ({ assetId }: Props) => {
  const { mutate, isPending } = useCancelBid();

  const cancelHandler = () => {
    mutate({
      assetId,
      discount: 20,
      txBlockNumber: 4450,
      txIndex: 0,
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
