import { InjectedWindowProvider } from "@polkadot/extension-inject/types";

declare global {
  interface Window {
    injectedWeb3: {
      [key: string]: InjectedWindowProvider;
    };
  }
}