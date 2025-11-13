import { Button } from "~/components/ui/button";
import { useCancelBid, CancelBidMutationFnParams } from "@repo/onchain";
import { notify } from "~/components/ui/alert";

interface Props extends Omit<CancelBidMutationFnParams, "options"> {
  assetId: string;
}

export function CancelBidButton({
  assetId,
  discount,
  txBlockNumber,
  txIndex,
}: Props) {
  const { mutate, isPending } = useCancelBid({ assetId });

  const onClick = () => {
    mutate(
      {
        discount,
        txBlockNumber,
        txIndex,
      },
      {
        onSuccess: () =>
          notify({
            mode: "success",
            title: "Bid Cancelled Successfully",
            message: "Your bid has been cancelled successfully.",
          }),
        onError: (error) =>
          notify({
            mode: "error",
            title: (error.cause as string) || "Failed to Cancel Bid",
            message: error.message || "There was an error cancelling your bid.",
          }),
      }
    );
  };

  return (
    <Button
      fullWidth
      variant="secondary"
      onClick={onClick}
      isLoading={isPending}
    >
      Cancel
    </Button>
  );
}
