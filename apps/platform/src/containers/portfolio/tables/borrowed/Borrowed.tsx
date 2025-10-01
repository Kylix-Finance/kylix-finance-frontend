import { UseGetAssetWiseBorrowsCollaterals } from "@repo/onchain";
import { BorrowedTable } from "./table/BorrowedTable";
import { BREAKPOINTS } from "~/constants";
import { useViewportSize } from "@mantine/hooks";
import { useState } from "react";
import RepayModal from "~/components/modal/transactions/repay-modal/RepayModal";
import BorrowModal from "~/components/modal/transactions/borrow-modal/BorrowModal";
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
  const [selectedRepayAssetId, setSelectedRepayAssetId] = useState<
    null | number
  >(null);
  const [selectedBorrowAssetId, setSelectedBorrowAssetId] = useState<
    null | number
  >(null);
  return (
    <div>
      {isDesktop ? (
        <BorrowedTable
          data={data}
          isPending={isPending}
          onBorrowClick={(assetId) => setSelectedBorrowAssetId(assetId)}
          onRepayClick={(assetId) => setSelectedRepayAssetId(assetId)}
        />
      ) : (
        <div></div>
      )}
      {selectedRepayAssetId && (
        <RepayModal
          assetId={selectedRepayAssetId}
          onClose={() => setSelectedRepayAssetId(null)}
        />
      )}
      {selectedBorrowAssetId && (
        <BorrowModal
          assetId={selectedBorrowAssetId}
          onClose={() => setSelectedBorrowAssetId(null)}
        />
      )}
    </div>
  );
};

export default Borrowed;
