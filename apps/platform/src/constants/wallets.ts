import { Wallet, WalletMetadata } from "~/types/wallets"

export const WALLETS: Record<Wallet, WalletMetadata> = {
    talisman: {
        image: "/assets/images/wallets/talisman.png",
        name: "Talisman",
    },
    "polkadot-js": {
        image: "/assets/images/wallets/polkadot-js.png",
        name: "Polkadot"
    },
    "subwallet-js": {
        image: "/assets/images/wallets/subwallet-js.png",
        name: "Subwallet"
    }
}