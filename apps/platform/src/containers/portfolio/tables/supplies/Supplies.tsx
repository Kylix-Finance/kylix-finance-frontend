import { useViewportSize } from "@mantine/hooks";
import { UseGetAssetWiseSupplies } from "@repo/onchain";
import { useState } from "react";
import { BREAKPOINTS } from "~/constants";
import SuppliesTable from "./table";
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
  const [selectedRepayAssetId, setSelectedRepayAssetId] = useState<
    null | number
  >(null);
  const [selectedBorrowAssetId, setSelectedBorrowAssetId] = useState<
    null | number
  >(null);
  return (
    <div>
      {isDesktop ? (
        <SuppliesTable
          data={data}
          isPending={isPending}
          onSupplyClick={() => {}}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Supplies;
