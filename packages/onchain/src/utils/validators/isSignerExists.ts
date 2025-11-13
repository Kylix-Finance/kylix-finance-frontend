import { Signer } from "@polkadot/types/types";

export const isSignerExists = (signer?: Signer): signer is Signer => {
  if (!signer) {
    throw new Error(
      "Signer could not be found. Please refresh the page and try again."
    );
  }
  return true;
};
