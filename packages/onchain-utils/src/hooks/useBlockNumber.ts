import { useEffect, useState } from "react";
import { useProvider } from "./useProvider";

interface UseBlockNumberResult {
  blockNumber: number | null;
  isLoading: boolean;
  error: string | null;
}

const useBlockNumber = (): UseBlockNumberResult => {
  const { data, isLoading } = useProvider();
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const api = data?.api;
  useEffect(() => {
    if (!api) {
      return;
    }

    const fetchBlockNumber = async () => {
      try {
        const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {
          setBlockNumber(header.number.toNumber());
          setLoading(false);
        });

        return () => {
          unsubscribe();
        };
      } catch (err: any) {
        setError(`Error fetching block number: ${err.message}`);
        setLoading(false);
      }
    };

    fetchBlockNumber();
  }, [api]);

  return {
    blockNumber,
    isLoading: isLoading || loading,
    error: error,
  };
};

export { useBlockNumber };
