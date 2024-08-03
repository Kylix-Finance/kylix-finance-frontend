"use client";

import { useEffect, useState } from "react";
import { useProvider } from "./useProvider";
import { useMetadata } from "./useMetadata";
import { formatUnit } from "../utils";
interface UseBalanceResult {
  balance: string | null;
  isLoading: boolean;
  error: string | null;
}

const useBalance = (
  accountAddress: string | undefined,
  assetId?: number
): UseBalanceResult => {
  const { data, isLoading } = useProvider();
  const [balance, setBalance] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const api = data?.api;

  const { data: assetMetaData } = useMetadata(assetId);

  useEffect(() => {
    if (!api || !accountAddress) {
      setLoading(false);
      return;
    }

    const fetchBalance = async () => {
      try {
        if (!api.query?.system?.account) {
          throw new Error(
            "API provider is not initialized properly or does not support account querying."
          );
        }

        let decimals = 12;

        let freeBalance: string;
        if (assetId) {
          if (!assetMetaData?.decimals) return;
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

        const freeBalanceFormatted = formatUnit(
          freeBalanceBigInt.toString(),
          decimals
        );

        setBalance(freeBalanceFormatted);
        setLoading(false);
      } catch (err: any) {
        setError(`Error fetching balance: ${err.message}`);
        setLoading(false);
      }
    };

    fetchBalance();
  }, [api, accountAddress, assetMetaData]);

  return {
    balance,
    isLoading: isLoading || loading,
    error,
  };
};

export { useBalance };
