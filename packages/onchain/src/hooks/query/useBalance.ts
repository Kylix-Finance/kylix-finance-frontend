"use client";

import { useMetadata } from "./useMetadata";
import { skipToken, useQuery } from "@tanstack/react-query";
import { DEFAULT_TOKEN_DECIMALS, queryKeys } from "@repo/shared";
import { useProvider } from "../useProvider";
import { useActiveAccount } from "../useActiveAccount";
import { formatUnit } from "../../utils/formatUnit";
interface Props {
  accountAddress?: string;
  assetId?: number | string;
  customDecimals?: number;
  enabled?: boolean;
}

const useBalance = ({
  accountAddress,
  assetId,
  customDecimals,
  enabled = true,
}: Props = {}) => {
  const { data } = useProvider();
  const { activeAccount } = useActiveAccount();
  const address = accountAddress ?? activeAccount?.address;
  const { data: assetMetaData } = useMetadata(assetId);
  const finalEnabled = !!data?.api && !!address && enabled;

  return useQuery({
    queryKey: queryKeys.balance({ address, assetId }),
    queryFn: finalEnabled
      ? async () => {
          const { api } = data;
          if (!api || !address) {
            throw new Error("API provider or account address is missing.");
          }

          if (!api.query?.system?.account) {
            throw new Error(
              "API provider is not initialized properly or does not support account querying."
            );
          }

          let decimals = DEFAULT_TOKEN_DECIMALS;
          let freeBalance: string;

          if (assetId) {
            const assetDecimals = customDecimals ?? assetMetaData?.decimals;

            if (!assetDecimals) {
              throw new Error("Asset metadata is missing.");
            }
            decimals = assetDecimals;

            const balanceReq = await api?.query?.assets?.account?.(
              assetId,
              address
            );
            const result = balanceReq?.toJSON() as unknown as {
              balance: number | null;
            };

            freeBalance = BigInt(result?.balance || 0).toString();
          } else {
            const result = await api.query.system.account(address);
            const data = result.toJSON() as any;
            freeBalance = data.data.free;
          }

          const freeBalanceBigInt = BigInt(freeBalance);
          return {
            formattedBalance: formatUnit(
              freeBalanceBigInt.toString(),
              decimals
            ),
            realBalance: freeBalanceBigInt,
          };
        }
      : skipToken,
  });
};

export { useBalance };
