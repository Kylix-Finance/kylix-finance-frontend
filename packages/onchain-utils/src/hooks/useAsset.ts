// import { skipToken, useQuery } from "@tanstack/react-query";
// import { useProvider } from "./useProvider";
// import { queryKeys } from "@repo/shared";
// export const useAsset = (assetId: number) => {
//   const { api } = useProvider();
//   const enabled = !!api;

//   return useQuery({
//     queryKey: queryKeys.asset(assetId),
//     queryFn: enabled
//       ? async () => {
//           const assetsInfo = await api?.query?.assets?.asset?.(assetId);
//           return assetsInfo?.toJSON() || {};
//         }
//       : skipToken,
//   });
// };

import { skipToken, useQuery } from "@tanstack/react-query";
import { useProvider } from "./useProvider";
import { queryKeys } from "@repo/shared";
import { getAsset } from "../api/getAsset";
export const useAsset = (assetId: number) => {
  const { api } = useProvider();
  const enabled = !!api && !!assetId;

  return useQuery({
    queryKey: queryKeys.asset(assetId),
    queryFn: enabled ? () => getAsset({ api, id: assetId }) : skipToken,
    refetchIntervalInBackground: true,
    refetchInterval: 30,
    refetchOnWindowFocus: "always",
    refetchOnMount: "always",
  });
};
