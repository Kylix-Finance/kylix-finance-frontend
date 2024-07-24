import { useEffect, useState, useCallback } from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { useProviderStore } from "../store";
import { ConnectionStatus, Provider } from "../types";

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
      let provider: WsProvider | null = null;
      let apiInstance: ApiPromise | null = null;

      try {
        provider = new WsProvider(url);
        apiInstance = await ApiPromise.create({
          provider,
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
