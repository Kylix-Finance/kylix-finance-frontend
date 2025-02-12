import { Button } from "@mui/material";
import css from "./CancelBidButton.module.scss";

interface Props {
  assetId: string;
}

const CancelBidButton = ({ assetId }: Props) => {
  return (
    <Button variant="contained" color="error">
      Cancel
    </Button>
  );
};

export default CancelBidButton;
