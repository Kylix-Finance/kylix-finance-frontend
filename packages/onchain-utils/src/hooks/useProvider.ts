"use client";

import { skipToken, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Options, queryKeys } from "@repo/shared";
import { useEffect, useState } from "react";
import { useConfig } from "./useConfig";

const useProvider = () => {
  const { config } = useConfig();
  const rpc = config?.rpc;
  const { data, ...rest } = useQuery({
    queryKey: queryKeys.provider,
    queryFn: rpc
      ? async () => {
          const provider = new WsProvider(rpc.url);
          const apiInstance = await ApiPromise.create({ provider });
          return {
            api: apiInstance,
            provider,
          };
        }
      : skipToken,
    meta: {
      excludeFromGlobalInvalidation: true,
    },
  });

  return { provider: data?.provider, api: data?.api, ...rest };
};

export { useProvider };
