"use client";
import { WsProvider } from "@polkadot/api";
import { IOCollection, SubscriptionHandler } from "../types";
import { useProvider } from "./useProvider";
import { useEffect, useState } from "react";

async function read<T extends keyof IOCollection>(
  method: T,
  params: IOCollection[T]["params"],
  provider: WsProvider,
  isCacheable: boolean = false,
  subscription?: SubscriptionHandler
): Promise<IOCollection[T]["output"]> {
  return await provider.send<IOCollection[T]["output"]>(
    method,
    params,
    isCacheable,
    subscription
  );
}

export function useRead<T extends keyof IOCollection>(
  method: T,
  params: IOCollection[T]["params"],
  isCacheable: boolean = true,
  subscription?: SubscriptionHandler
) {
  const [result, setResult] = useState<IOCollection[T]["output"] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { data } = useProvider();

  const provider = data?.provider;

  useEffect(() => {
    if (!provider) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await read(
          method,
          params,
          provider,
          isCacheable,
          subscription
        );
        setResult(result);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [method, params, isCacheable, subscription, provider]);

  return { data: result, isLoading, error };
}
