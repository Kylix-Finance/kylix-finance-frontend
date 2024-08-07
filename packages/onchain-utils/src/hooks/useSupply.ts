import { useCallback, useState } from "react";
import { useProvider } from "./useProvider";
import { SubmittableResultValue } from "@polkadot/api/types";
import { useActiveAccount } from "./useActiveAccount";
import { useSigner } from "./useSigner";

interface Phase {
  type: "error" | "success" | "information" | "warning" | "message";
  title: string;
  message: string;
}

interface UseSupplyExtrinsicResult {
  submitSupply: (asset: number, balance: bigint) => Promise<void>;
  isSubmitting: boolean;
  phase: Phase | null;
}

export const useSupply = (): UseSupplyExtrinsicResult => {
  const { api } = useProvider();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phase, setPhase] = useState<Phase | null>(null);
  const { activeAccount } = useActiveAccount();
  const { signer } = useSigner();

  const submitSupply = useCallback(
    async (asset: number, balance: bigint) => {
      if (!api) {
        setPhase({
          type: "error",
          title: "Error",
          message: "API is not initialized",
        });
        return;
      }
      if (!activeAccount) {
        setPhase({
          type: "error",
          title: "Error",
          message: "Wallet address is not available.",
        });
        return;
      }
      if (!signer) {
        setPhase({
          type: "error",
          title: "Error",
          message: "Signer is not available.",
        });
        return;
      }
      setIsSubmitting(true);
      setPhase({
        type: "information",
        title: "Starting",
        message: "Starting transaction...",
      });
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
                const errorMsg = `${section}.${method}: ${docs.join(" ")}`;
                setPhase({
                  type: "error",
                  title: "Transaction failed",
                  message: docs.join(" "),
                });
              } else {
                setPhase({
                  type: "error",
                  title: "Transaction failed",
                  message: dispatchError.toString(),
                });
              }
            } else {
              // Update phase message based on transaction status
              if (status.isInBlock) {
                setPhase({
                  type: "information",
                  title: "In Block",
                  message: "Transaction included in block.",
                });
              } else if (status.isBroadcast) {
                setPhase({
                  type: "information",
                  title: "Broadcast",
                  message: "Transaction broadcasted.",
                });
              } else if (status.isFinalized) {
                setPhase({
                  type: "success",
                  title: "Finalized",
                  message: "Transaction finalized.",
                });
                console.log("Transaction finalized");
                unsubscribe();
              } else {
                setPhase({
                  type: "information",
                  title: "Status",
                  message: `Transaction status: ${status.type}`,
                });
              }
            }
          }
        );
      } catch (err) {
        const errorMsg = (err as Error).message;
        setPhase({
          type: "error",
          title: "An error occurred during the transaction.",
          message: errorMsg,
        });
        console.log(err);
      } finally {
        setIsSubmitting(false);
      }
    },
    [api, signer, activeAccount]
  );

  return {
    submitSupply,
    isSubmitting,
    phase,
  };
};
