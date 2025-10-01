import { useViewportSize } from "@mantine/hooks";
import { UseGetAssetWiseSupplies } from "@repo/onchain";
import { useState } from "react";
import { BREAKPOINTS } from "~/constants";
import SuppliesTable from "./table";
import SupplyModal from "~/components/modal/transactions/supply-modal/SupplyModal";
import Empty from "./Empty";
import Cards from "./cards/Cards";
export type SuppliesResponse = NonNullable<
  UseGetAssetWiseSupplies["data"]
>["suppliedAssets"];
interface Props {
  data: SuppliesResponse;
  isEmpty: boolean;
  isPending: boolean;
}
const Supplies = ({ data, isEmpty, isPending }: Props) => {
  const { width } = useViewportSize();
  const isDesktop = width >= BREAKPOINTS.DESKTOP;

  const [selectedSupplyAssetId, setSelectedSupplyAssetId] = useState<
    null | number
  >(null);
  return (
    <div>
      {isDesktop ? (
        <SuppliesTable
          data={data}
          isPending={isPending}
          onSupplyClick={(assetId) => setSelectedSupplyAssetId(assetId)}
        />
      ) : (
        <Cards
          data={data}
          isPending={isPending}
          onSupplyClick={(assetId) => setSelectedSupplyAssetId(assetId)}
        />
      )}
      <Empty isEmpty={isEmpty} hasBorder={!isDesktop} />
      {selectedSupplyAssetId && (
        <SupplyModal
          assetId={selectedSupplyAssetId}
          onClose={() => setSelectedSupplyAssetId(null)}
        />
      )}
    </div>
  );
};

export default Supplies;
