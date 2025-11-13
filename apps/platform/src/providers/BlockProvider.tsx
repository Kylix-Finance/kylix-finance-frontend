"use client";
import { useProvider } from "@repo/onchain";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const BlockProvider = () => {
  const queryClient = useQueryClient();

  const { data } = useProvider();

  useEffect(() => {
    if (!data?.api) return;
    let unsubscribe: () => void;
    const subscribeToNewBlocks = async () => {
      unsubscribe = await data.api.rpc.chain.subscribeNewHeads((lastHeader) => {
        console.log(`New Block Generated: ${lastHeader.number}`);
        queryClient.invalidateQueries({
          predicate: (query) => {
            // Only invalidate queries that don't have the exclusion flag
            return !query.meta?.excludeFromGlobalInvalidation;
          },
        });
      });
    };

    subscribeToNewBlocks();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [data, queryClient]);

  return null;
};

export default BlockProvider;
