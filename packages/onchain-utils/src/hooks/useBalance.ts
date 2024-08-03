"use client";

import { useProvider } from "./useProvider";
import { useMetadata } from "./useMetadata";
import { formatUnit } from "../utils";
import { skipToken, useQuery } from "@tanstack/react-query";

const useBalance = (accountAddress: string | undefined, assetId?: number) => {
  const { data: providerData } = useProvider();
  const api = providerData?.api;

  const { data: assetMetaData } = useMetadata(assetId);

  const enabled = !!api && !!accountAddress;

  const { data, ...rest } = useQuery({
    queryKey: ["balance", accountAddress, assetId],
    queryFn: enabled
      ? async () => {
          if (!api || !accountAddress) {
            throw new Error("API provider or account address is missing.");
          }

          if (!api.query?.system?.account) {
            throw new Error(
              "API provider is not initialized properly or does not support account querying."
            );
          }

          let decimals = 12;
          let freeBalance: string;

          if (assetId) {
            if (!assetMetaData?.decimals) {
              throw new Error("Asset metadata is missing.");
            }
            decimals = Number(assetMetaData?.decimals);

            const assetBalance = await api?.query?.assets?.account?.(
              assetId,
              accountAddress
            );
            freeBalance = BigInt(
              (assetBalance?.toJSON() as any)?.balance
            ).toString();
          } else {
            const result = await api.query.system.account(accountAddress);
            const data = result.toJSON() as any;
            freeBalance = data.data.free;
          }

          const freeBalanceBigInt = BigInt(freeBalance);
          return formatUnit(freeBalanceBigInt.toString(), decimals);
        }
      : skipToken,
  });

  return {
    balance: data,
    ...rest,
  };
};

export { useBalance };
