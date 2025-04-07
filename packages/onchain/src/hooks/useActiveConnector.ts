import { queryKeys, useAccountStore, wallets } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

export const useActiveConnector = () => {
  const { connectorId } = useAccountStore();
  return useQuery({
    queryKey: queryKeys.connector,
    queryFn: connectorId
      ? () => wallets.find((wallet) => wallet.id === connectorId)
      : skipToken,
  });
};
