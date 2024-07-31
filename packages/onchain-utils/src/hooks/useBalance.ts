"use client";

import { useEffect, useState } from "react";
import { useProvider } from "./useProvider";
import { hexToBigInt, formatBalance } from "../utils";
import { useBalanceStore } from "../store";
interface UseBalanceResult {
  balance: string | null;
  isLoading: boolean;
  error: string | null;
}

const useBalance = (address: string | undefined): UseBalanceResult => {
  const { data, isLoading } = useProvider();
  const { balance, setBalance } = useBalanceStore();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const api = data?.api;

  useEffect(() => {
    if (!api || !address) {
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

        const result = await api.query.system.account(address);
        const data = result.toJSON() as any;
        const freeBalanceHex = data.data.free;
        const freeBalanceBigInt = hexToBigInt(freeBalanceHex);
        const freeBalanceFormatted = formatBalance(freeBalanceBigInt);

        setBalance(freeBalanceFormatted);
        setLoading(false);
      } catch (err: any) {
        setError(`Error fetching balance: ${err.message}`);
        setLoading(false);
      }
    };

    fetchBalance();
  }, [api, address]);

  return {
    balance,
    isLoading: isLoading || loading,
    error,
  };
};

export { useBalance };
