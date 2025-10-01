import { UseGetAssetWiseBorrowsCollaterals } from "@repo/onchain";
import { BorrowedTable } from "./table/BorrowedTable";
import { BREAKPOINTS } from "~/constants";
import { useViewportSize } from "@mantine/hooks";
export type BorrowedResponse = NonNullable<
  UseGetAssetWiseBorrowsCollaterals["data"]
>["borrowedAssets"];
interface Props {
  data: BorrowedResponse;
  isEmpty: boolean;
  isPending: boolean;
}

const Borrowed = ({ data, isEmpty, isPending }: Props) => {
  const { width } = useViewportSize();
  const isDesktop = width >= BREAKPOINTS.DESKTOP;
  return (
    <div>
      {isDesktop ? (
        <BorrowedTable
          data={data}
          isPending={isPending}
          onBorrowClick={() => {}}
          onRepayClick={() => {}}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Borrowed;
