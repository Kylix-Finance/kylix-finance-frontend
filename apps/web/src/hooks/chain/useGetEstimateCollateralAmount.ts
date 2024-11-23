import { WsProvider } from "@polkadot/api";
import { formatUnit, useProvider } from "@repo/onchain-utils";
import { useRefetch } from "@repo/onchain-utils/src/hooks/useRefetch";
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

interface EstimateCollateral {
  borrowAsset: string | undefined;
  borrowAssetAmount: string | undefined;
  collateralAsset: string | undefined;
  collateralDecimals: number | undefined;
}

export const useGetEstimateCollateralAmount = ({
  borrowAsset,
  borrowAssetAmount,
  collateralAsset,
  collateralDecimals,
}: EstimateCollateral) => {
  const { provider } = useProvider();
  const enabled =
    provider &&
    !!borrowAsset &&
    !!borrowAssetAmount &&
    !!collateralAsset &&
    !!collateralDecimals;
  useRefetch({
    queries: [
      {
        queryKey: queryKeys.estimateCollateral({
          borrowAsset,
          borrowAssetAmount,
          collateralAsset,
        }),
        enabled,
      },
    ],
  });
  const { data, ...rest } = useQuery({
    queryKey: queryKeys.estimateCollateral({
      borrowAsset,
      borrowAssetAmount,
      collateralAsset,
    }),
    queryFn:
      provider &&
      !!borrowAsset &&
      !!borrowAssetAmount &&
      !!collateralAsset &&
      !!collateralDecimals
        ? () =>
            getEstimateCollateralAmount({
              provider,
              borrowAsset,
              borrowAssetAmount,
              collateralAsset,
              collateralDecimals,
            })
        : skipToken,
  });

  return {
    formattedEstimateCollateral: formatUnit(data || 0, collateralDecimals),
    estimateCollateral: data?.toString(),
    ...rest,
  };
};

export const getEstimateCollateralAmount = async ({
  provider,
  borrowAsset,
  borrowAssetAmount,
  collateralAsset,
}: {
  provider: WsProvider;
} & EstimateCollateral): Promise<number | undefined> => {
  const response = await provider.send<number>(
    "lending_getEstimateCollateralAmount",
    [Number(borrowAsset), Number(borrowAssetAmount), Number(collateralAsset)]
  );

  return response;
};
