import { useEffect, useState } from "react";
import { ApiPromise } from "@polkadot/api";

const useBlockNumber = (api: ApiPromise | null) => {
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlockNumber = async () => {
      try {
        if (!api) {
          throw new Error(
            "API provider is not initialized. Make sure the provider is correctly set up."
          );
        }
        api.rpc.chain.subscribeNewHeads((header) => {
          setBlockNumber(header.number.toNumber());
          setLoading(false);
        });
      } catch (err: any) {
        console.error("Error useBlockNumber:", err.message);
        setError(err);
        setLoading(false);
      }
    };

    fetchBlockNumber();
  }, [api]);

  return { blockNumber, error, loading };
};

export { useBlockNumber };
