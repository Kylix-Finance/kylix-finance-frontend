import { InjectedWindowProvider } from "@polkadot/extension-inject/types";

export type Wallet = "polkadot-js" | "subwallet-js" | "talisman"

export type WalletMetadata = {
    image: string;
    name: string;
    website: string
}
export type WalletProviderDetails = WalletMetadata & {
    id: string;
    extension: InjectedWindowProvider | undefined;
    isInstalled: boolean
}