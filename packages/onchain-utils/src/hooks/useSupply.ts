import { useCallback, useState } from "react";
import { useProvider } from "./useProvider";
import { SubmittableResultValue } from "@polkadot/api/types";
import { useActiveAccount } from "./useActiveAccount";
import { useSigner } from "./useSigner";

interface UseSupplyExtrinsicResult {
  submitSupply: (asset: number, balance: bigint) => Promise<void>;
  isSubmitting: boolean;
  error: string | null;
}

export const useSupply = (): UseSupplyExtrinsicResult => {
  const { data } = useProvider();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { activeAccount } = useActiveAccount();
  const { signer } = useSigner();
  const api = data?.api;

  const submitSupply = useCallback(
    async (asset: number, balance: bigint) => {
      if (!api) {
        setError("API is not initialized");
        return;
      }
      if (!activeAccount) {
        setError("Wallet address is not available.");
        return;
      }
      if (!signer) {
        return;
      }
      setIsSubmitting(true);
      setError(null);
      try {
        api.setSigner(signer);
        //@ts-expect-error type
        const extrinsic = api?.tx?.lending?.supply(asset, balance);
        //@ts-expect-error type
        const unsubscribe = await extrinsic.signAndSend(
          activeAccount.address,
          ({ status, events, dispatchError }: SubmittableResultValue) => {
            if (dispatchError) {
              if (dispatchError.isModule) {
                // Extract the error
                const decoded = api.registry.findMetaError(
                  dispatchError.asModule
                );
                const { method, section, docs } = decoded;
                setError(`${section}.${method}: ${docs.join(" ")}`);
              } else {
                setError(dispatchError.toString());
              }
            } else if (status.isFinalized) {
              console.log("Transaction finalized");
              unsubscribe();
            }
          }
        );
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsSubmitting(false);
      }
    },
    [api]
  );

  return {
    submitSupply,
    isSubmitting,
    error,
  };
};
