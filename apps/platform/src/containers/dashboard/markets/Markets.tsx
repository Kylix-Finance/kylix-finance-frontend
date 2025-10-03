import MarketsTable from "./table";
import { LandingPool } from "@repo/onchain";
import { useState } from "react";
import Cards from "./cards/Cards";
import SupplyModal from "~/components/modal/transactions/supply-modal/SupplyModal";
import BorrowModal from "~/components/modal/transactions/borrow-modal/BorrowModal";
import { useIsDesktop } from "~/hooks/useIsDesktop";
interface Props {
  data: LandingPool[];
  isPending: boolean;
  isEmpty: boolean;
}

const Markets = ({ isEmpty, isPending, data }: Props) => {
  const isDesktop = useIsDesktop();
  const [selectedSupplyAssetId, setSelectedSupplyAssetId] = useState<
    null | number
  >(null);
  const [selectedSupplyBorrowId, setSelectedBorrowAssetId] = useState<
    null | number
  >(null);
  return (
    <>
      {isDesktop ? (
        <MarketsTable
          data={data}
          isPending={isPending}
          isEmpty={isEmpty}
          onSupplyClick={(id) => setSelectedSupplyAssetId(id)}
          onBorrowClick={(id) => setSelectedBorrowAssetId(id)}
        />
      ) : (
        <Cards
          isPending={isPending}
          data={data}
          isEmpty={isEmpty}
          onBorrowClick={(id) => setSelectedBorrowAssetId(id)}
          onSupplyClick={(id) => setSelectedSupplyAssetId(id)}
        />
      )}
      {selectedSupplyAssetId && (
        <SupplyModal
          assetId={selectedSupplyAssetId}
          onClose={() => setSelectedSupplyAssetId(null)}
        />
      )}
      {selectedSupplyBorrowId && (
        <BorrowModal
          assetId={selectedSupplyBorrowId}
          onClose={() => setSelectedBorrowAssetId(null)}
        />
      )}
    </>
  );
};

export default Markets;
