import { Wallet, WalletMetadata } from "~/types/wallets"

export const WALLETS: Record<Wallet, WalletMetadata> = {
    talisman: {
        image: "/assets/images/wallets/talisman.png",
        name: "Talisman",
        website: "https://talisman.xyz/"
    },
    "polkadot-js": {
        image: "/assets/images/wallets/polkadot-js.png",
        name: "Polkadot",
        website: "https://polkadot.js.org/extension/"
    },
    "subwallet-js": {
        image: "/assets/images/wallets/subwallet-js.png",
        name: "Subwallet",
        website: "https://www.subwallet.app/download.html"
    }
}