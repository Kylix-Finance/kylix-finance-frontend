import { create } from "zustand"
import { persist } from "zustand/middleware"
import { VoidFunction, WalletModalStage } from "~/types"
import { trimWalletAddress } from "~/utils/trimWalletAddress"

type Modal = {
    stage: WalletModalStage,
    isOpen: boolean
}

type Account = {
    selected: string | undefined;
    trimmedSelected: string | undefined;
    list: string[] | undefined;
}

type WalletModalStore = {
    modal: Modal,
    account: Account,
    setAccount: (account: string) => void;
    setAccountList: (accounts: string[]) => void;
    setStage: (stage: WalletModalStage) => void;
    setIsOpen: (isOpen: boolean) => void;
    toggleModal: VoidFunction;
    disconnect: VoidFunction
}

export const useWalletModal = create<WalletModalStore>()(
    persist(
        (set) => ({
            modal: {
                isOpen: false,
                stage: "walletsList"
            },
            account: {
                selected: undefined,
                list: undefined,
                trimmedSelected: undefined
            },
            setAccount: (account: string) => set((state) => ({
                account: { ...state.account, selected: account, trimmedSelected: trimWalletAddress(account) }
            })),
            setAccountList: (accounts: string[]) => set((state) => ({
                account: { ...state.account, list: accounts }
            })),
            setIsOpen: (isOpen: boolean) => set((state) => ({
                modal: { ...state.modal, isOpen }
            })),
            setStage: (stage: WalletModalStage) => set((state) => ({
                modal: { ...state.modal, stage }
            })),
            toggleModal: () => set((state) => ({
                modal: { ...state.modal, isOpen: !state.modal.isOpen }
            })),
            disconnect: () => set({
                modal: {
                    isOpen: false,
                    stage: "walletsList"
                },
                account: {
                    list: undefined,
                    selected: undefined,
                    trimmedSelected: undefined
                }
            })
        }),
        {
            name: "wallet-storage",
            partialize: (state) => ({
                account: {
                    selected: state.account.selected,
                    list: state.account.list,
                    trimmedSelected: state.account.trimmedSelected
                }
            }),
        }
    )
)