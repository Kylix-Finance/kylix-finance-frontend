import { useEffect, useState } from "react";
import { useProvider } from "./useProvider";
import { useSuspenseQuery } from "@tanstack/react-query";

interface UseBalanceResult {
  balance: string | null;
  isLoading: boolean;
  error: string | null;
}

const useBalance = (address: string | undefined): UseBalanceResult => {
  const { data, isLoading } = useProvider();
  const [balance, setBalance] = useState<string | null>(null);
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
        const data = (result.toJSON() as any).data;
        const freeBalance = data.free.toString();
        setBalance(freeBalance);
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
    error: error,
  };
};

export { useBalance };
