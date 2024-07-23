import { useEffect, useState, useCallback } from "react";
import { ApiPromise, HttpProvider } from "@polkadot/api";
import { useProviderStore } from "../store";
import { ConnectionStatus, Provider } from "../types";

export const types = {
  LendingPool: {
    id: "u32",
    asset: "String",
    collateral_q: "f64",
    utilization: "f64",
    borrow_apy: "f64",
    supply_apy: "f64",
    collateral: "bool",
    balance: "u64",
  },
  LendingPoolsResponse: {
    lendingPools: "Vec<LendingPool>",
    totalSupply: "u64",
    totalBorrow: "u64",
  },
};

export const rpc = {
  lending: {
    getLendingPools: {
      description: "Get lending pools",
      params: [],
      type: "LendingPoolsResponse",
    },
  },
};

type UseProviderResult = {
  api: ApiPromise | null;
  isConnected: boolean;
  status: ConnectionStatus;
};

const useProvider = (params: Provider): UseProviderResult => {
  const { setStatus, status } = useProviderStore();
  const [api, setApi] = useState<ApiPromise | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const connect = useCallback(
    async (url: string) => {
      let provider: HttpProvider | null = null;
      let apiInstance: ApiPromise | null = null;

      try {
        provider = new HttpProvider(url);
        apiInstance = await ApiPromise.create({
          provider,
          types,
          rpc,
        });

        apiInstance.on("connected", () => {
          setStatus(
            "connected",
            `Successfully connected to the ${params.name} network.`
          );
          setIsConnected(true);
        });
        apiInstance.on("disconnected", () => {
          setStatus(
            "disconnected",
            `Disconnected from the ${params.name} network.`
          );
          setIsConnected(false);
        });
        apiInstance.on("error", (err) => {
          setStatus("error", `Error: ${err.message}`);
          setIsConnected(false);
        });
        apiInstance.on("ready", () => {
          setStatus("ready", "API is ready.");
        });

        setApi(apiInstance);
      } catch (err: any) {
        setStatus(
          "error",
          `Error connecting to the ${params.name} network: ${err.message}`
        );
        setIsConnected(false);
      }
    },
    [params.name, setStatus]
  );

  useEffect(() => {
    connect(params.url);
  }, [params.url, connect, setStatus, api]);

  return {
    api,
    isConnected,
    status,
  };
};

export { useProvider };
