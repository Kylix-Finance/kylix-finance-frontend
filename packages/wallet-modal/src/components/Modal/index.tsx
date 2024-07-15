"use client"
import { Modal as ModalBase, ModalProps } from "react-responsive-modal"
import { useModalStore } from "../../stores/modal";
import WalletsList from "./WalletsList";
import { useState } from "react";
import { useAccountsStore } from "../../stores/accounts";
import AccountList from "./AccountList";
import { useStatusStore } from "../../stores";
import { STATUS } from "../../constants";

const Modal = ({ ...rest }: Omit<ModalProps, "onClose" | "close" | "open">) => {
    const modalState = useModalStore()
    const [stage, setStage] = useState<"wallets" | "accounts">("wallets")
    const { accounts,
        setAccounts,
        setActiveAccount
    } = useAccountsStore()
    const { setStatus } = useStatusStore()
    const modalCloseHandler = () => {
        modalState.setStatus(false)
        setAccounts(undefined)
        setActiveAccount(undefined)
        setStatus(STATUS.CANCELED)
    }
    return (
        <ModalBase
            {...rest}
            open={modalState.status}
            onClose={modalCloseHandler}
            classNames={{
                root: "!z-[999999999]",
                closeButton: "bg-red-500",
                closeIcon: "stroke-none fill-[#9FAAA8] w-4 h-4",
                modal: "rounded-lg bg-red-500 p-4 lg:min-w-[40%]"
            }}
        >
            <h2 className="font-bold text-sm leading-5 text-center text-[#383E42]">
                Connect Your Wallet
            </h2>
            {
                accounts && accounts.length > 0 ? <AccountList /> : <WalletsList />
            }
        </ModalBase>
    )
}

export default Modal
