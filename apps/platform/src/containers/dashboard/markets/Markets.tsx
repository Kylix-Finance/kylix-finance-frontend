import { useViewportSize } from "@mantine/hooks";
import { BREAKPOINTS } from "~/constants";
import MarketsTable from "./table";
import { LandingPool } from "@repo/onchain";
import { useState } from "react";
import Cards from "./cards/Cards";
import SupplyModal from "~/components/modal/supply-modal/SupplyModal";
interface Props {
  data: LandingPool[];
  isPending: boolean;
  isEmpty: boolean;
}

const Markets = ({ isEmpty, isPending, data }: Props) => {
  const { width } = useViewportSize();
  const isDesktop = width >= BREAKPOINTS.DESKTOP;
  const [selectedAssetId, setSelectedAssetId] = useState<null | number>(null);

  return (
    <>
      {isDesktop ? (
        <MarketsTable
          data={data}
          isPending={isPending}
          isEmpty={isEmpty}
          onSupplyClick={(id) => setSelectedAssetId(id)}
        />
      ) : (
        <Cards isPending={isPending} data={data} isEmpty={isEmpty} />
      )}
      {selectedAssetId && (
        <SupplyModal
          assetId={selectedAssetId}
          onClose={() => setSelectedAssetId(null)}
        />
      )}
    </>
  );
};

export default Markets;
