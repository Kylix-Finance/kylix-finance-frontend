import { useEffect, useState } from "react";
import { useAccountStore } from "@repo/shared";
import { getWalletExtension } from "@repo/shared";
import { Signer } from "@polkadot/api/types";
import { useActiveConnector } from "./useActiveConnector";

interface UseSignerResult {
  signer: Signer | undefined;
  activeAccount: string | null;
}

export const useSigner = (): UseSignerResult => {
  const { connectorId, account: activeAccount } = useAccountStore();
  const [signer, setSigner] = useState<Signer | undefined>(undefined);

  useEffect(() => {
    const fetchSigner = async () => {
      if (!connectorId || !activeAccount) return;

      const walletExtension = getWalletExtension(connectorId);
      if (!walletExtension)
        throw new Error(`No extension found for ${connectorId}`);
      if (!walletExtension.enable)
        throw new Error(`Extension does not support enable`);

      const injector = await walletExtension.enable("Kylix");
      setSigner(injector.signer);
    };

    fetchSigner().catch(console.error);
  }, [connectorId, activeAccount]);

  return { signer, activeAccount };
};
