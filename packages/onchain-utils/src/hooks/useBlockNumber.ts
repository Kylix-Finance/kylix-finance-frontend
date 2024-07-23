import { useEffect, useState } from "react";
import { useProvider } from "./useProvider";

const useBlockNumber = () => {
  const { api, isConnected, status } = useProvider({
    url: "https://51.20.192.52:443",
    name: "Westend",
  });
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  api?.rpc;
  useEffect(() => {
    const fetchBlockNumber = async () => {
      if (api) {
        try {
          const blockHash = await api.rpc.chain.getBlockHash();
          const signedBlock = await api.rpc.chain.getBlock(blockHash);
          const blockNumber = signedBlock.block.header.number.toNumber();
          setBlockNumber(blockNumber);
        } catch (err: any) {
          console.error("Error fetching block number:", err.message);
          setError(`Error fetching block number: ${err.message}`);
        }
      }
    };

    fetchBlockNumber();
  }, [api, isConnected, status]);

  return { blockNumber, error, status };
};

export { useBlockNumber };
