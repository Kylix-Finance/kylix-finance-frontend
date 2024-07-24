import { useState, useEffect } from "react";
import { ApiPromise } from "@polkadot/api";
const getBalance = async (
  address: string,
  api: ApiPromise
): Promise<string> => {
  if (!address) {
    throw new Error("Address is required");
  }

  if (!api?.query?.system?.account) {
    throw new Error(
      "API is not properly initialized or does not support account querying"
    );
  }

  try {
    const result = ((await api.query.system.account(address)).toJSON() as any)
      .data;
    return result.free.toString();
  } catch (err: any) {
    throw new Error(`Failed to fetch balance: ${err.message}`);
  }
};
interface UseBalanceResult {
  balance: string | null;
  error: string | null;
}

const useBalance = (
  address: string,
  api: ApiPromise | null
): UseBalanceResult => {
  const [balance, setBalance] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!address || !api) {
      return;
    }

    const fetchBalance = async () => {
      try {
        const balance = await getBalance(address, api);
        setBalance(balance);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchBalance();
  }, [address, api]);

  return { balance, error };
};

export { useBalance };
