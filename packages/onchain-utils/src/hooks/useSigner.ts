import { useEffect, useState } from "react";
import { useAccountStore } from "@repo/shared";
import { getWalletExtension } from "@repo/shared";
import { Signer } from "@polkadot/api/types";

interface UseSignerResult {
  signer: Signer | null;
  activeAccount: string | null;
}

export const useSigner = (): UseSignerResult => {
  const { connectorId, account: activeAccount } = useAccountStore();
  const [signer, setSigner] = useState<Signer | null>(null);

  useEffect(() => {
    const fetchSigner = async () => {
      if (!connectorId || !activeAccount) return;

      const walletExtension = getWalletExtension(connectorId);
      if (!walletExtension)
        throw new Error(`No extension found for ${connectorId}`);
      if (!walletExtension.enable)
        throw new Error(`Extension does not support enable`);

      const { web3Enable, web3FromAddress } = await import(
        "@polkadot/extension-dapp"
      );

      // const injector = await walletExtension.enable(activeAccount);
      await web3Enable("kylix");
      const injector = await web3FromAddress(activeAccount);
      setSigner(injector.signer);
    };

    fetchSigner().catch(console.error);
  }, [connectorId, activeAccount]);

  return { signer, activeAccount };
};
