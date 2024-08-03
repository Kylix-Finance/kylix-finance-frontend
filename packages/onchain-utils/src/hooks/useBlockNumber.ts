"use client";

import { useEffect, useState } from "react";
import { useProvider } from "./useProvider";

interface UseBlockNumberResult {
  blockNumber: number | null;
  isLoading: boolean;
  error: string | null;
}

const useBlockNumber = (): UseBlockNumberResult => {
  const { api, isLoading } = useProvider();
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
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
