"use client";
import { WsProvider } from "@polkadot/api";
import { IOCollection, SubscriptionHandler } from "../types";
import { useProvider } from "./useProvider";
import { useEffect, useRef, useState } from "react";
import { skipToken, useQuery } from "@tanstack/react-query";

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

// export function useRead<T extends keyof IOCollection>(
//   method: T,
//   params: IOCollection[T]["params"],
//   isCacheable: boolean = true,
//   subscription?: SubscriptionHandler
// ) {
//   const [result, setResult] = useState<IOCollection[T]["output"] | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const isInitialized = useRef(false);
//   const [error, setError] = useState<Error | null>(null);
//   const { provider } = useProvider();

//   useEffect(() => {
//     if (!provider) return;

//     const fetchData = async () => {
//       // TODO: Implement isUpdating
//       if (isInitialized.current === false) {
//         isInitialized.current = true;
//         setIsLoading(true);
//       }
//       try {
//         const result = await read(
//           method,
//           params,
//           provider,
//           isCacheable,
//           subscription
//         );
//         setResult(result);
//       } catch (err: any) {
//         setError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [method, params, isCacheable, subscription, provider]);

//   return { data: result, isLoading, error };
// }

export function useRead<T extends keyof IOCollection>(
  method: T,
  params: IOCollection[T]["params"],
  isCacheable: boolean = true,
  subscription?: SubscriptionHandler
) {
  const { provider } = useProvider();

  return useQuery({
    queryKey: ["test"],
    queryFn: provider
      ? () => read(method, params, provider, isCacheable, subscription)
      : skipToken,
  });
}
