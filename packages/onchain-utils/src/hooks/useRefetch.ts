"use client";
import { useEffect, useRef } from "react";
import { QueryKey, useQueryClient } from "@tanstack/react-query";
import { useBlockNumber } from "./useBlockNumber";

type Query = {
  queryKey: QueryKey;
  enabled?: boolean;
};

interface UseRefetchParams {
  queries: Query[];
  enabled?: boolean;
}

export const useRefetch = ({ queries, enabled = true }: UseRefetchParams) => {
  const queryClient = useQueryClient();
  const prevBlock = useRef<number | null>(null);
  const { blockNumber } = useBlockNumber();

  queries;
  useEffect(() => {
    if (!enabled || !blockNumber || blockNumber === prevBlock.current) return;

    const refetchQueries = () => {
      queries.forEach(({ queryKey, enabled = true }) => {
        if (enabled) {
          queryClient.refetchQueries({ queryKey });
        }
      });
    };

    refetchQueries();

    prevBlock.current = blockNumber;
  }, [blockNumber, enabled, queryClient, queries]);

  const refetch = () => {
    queries.forEach(({ queryKey, enabled = true }) => {
      if (enabled) {
        queryClient.refetchQueries({ queryKey });
      }
    });
  };

  return { refetch };
};
