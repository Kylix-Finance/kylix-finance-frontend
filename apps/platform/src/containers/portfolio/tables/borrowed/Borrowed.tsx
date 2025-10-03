import { UseGetAssetWiseBorrowsCollaterals } from "@repo/onchain";
import { BorrowedTable } from "./table/BorrowedTable";
import { useState } from "react";
import RepayModal from "~/components/modal/transactions/repay-modal/RepayModal";
import BorrowModal from "~/components/modal/transactions/borrow-modal/BorrowModal";
import BorrowMore from "./borrow-more/BorrowMore";
import Cards from "./cards/Cards";
import { useIsDesktop } from "~/hooks/useIsDesktop";
export type BorrowedResponse = NonNullable<
  UseGetAssetWiseBorrowsCollaterals["data"]
>["borrowedAssets"];
interface Props {
  data: BorrowedResponse;
  isEmpty: boolean;
  isPending: boolean;
}

const Borrowed = ({ data, isEmpty, isPending }: Props) => {
  const isDesktop = useIsDesktop();
  const [selectedRepayAssetId, setSelectedRepayAssetId] = useState<
    null | number
  >(null);
  const [selectedBorrowAssetId, setSelectedBorrowAssetId] = useState<
    null | number
  >(null);
  return (
    <div>
      {isDesktop ? (
        <div>
          <BorrowedTable
            data={data}
            isPending={isPending}
            onBorrowClick={(assetId) => setSelectedBorrowAssetId(assetId)}
            onRepayClick={(assetId) => setSelectedRepayAssetId(assetId)}
          />
          {!isPending && <BorrowMore hasBorrowed={!isEmpty} hasPadding />}
        </div>
      ) : (
        <Cards
          data={data}
          isPending={isPending}
          isEmpty={isEmpty}
          onBorrowClick={(assetId) => setSelectedBorrowAssetId(assetId)}
          onRepayClick={(assetId) => setSelectedRepayAssetId(assetId)}
        />
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
