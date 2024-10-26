import { WsProvider } from "@polkadot/api";
import { useProvider } from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

interface EstimateCollateral {
  borrowAsset: string | undefined;
  borrowAssetAmount: string | undefined;
  collateralAsset: string | undefined;
}

export const useGetEstimateCollateralAmount = ({
  borrowAsset,
  borrowAssetAmount,
  collateralAsset,
}: EstimateCollateral) => {
  const { provider } = useProvider();
  return useQuery({
    queryKey: queryKeys.estimateCollateral({
      borrowAsset,
      borrowAssetAmount,
      collateralAsset,
    }),
    queryFn:
      provider && !!borrowAsset && !!borrowAssetAmount && !!collateralAsset
        ? () =>
            getEstimateCollateralAmount({
              provider,
              borrowAsset,
              borrowAssetAmount,
              collateralAsset,
            })
        : skipToken,
  });
};

export const getEstimateCollateralAmount = async ({
  provider,
  borrowAsset,
  borrowAssetAmount,
  collateralAsset,
}: {
  provider: WsProvider;
} & EstimateCollateral): Promise<number | undefined> => {
  const response = await provider.send<number>("getEstimateCollateralAmount", [
    Number(borrowAsset),
    Number(borrowAssetAmount),
    Number(collateralAsset),
  ]);

  return Number(response);
};
