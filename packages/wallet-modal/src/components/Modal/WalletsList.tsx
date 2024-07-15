import { useMemo } from "react";
import { useConnect } from "../../hooks";
import { useAvailableWallets } from "../../hooks/useAvailableWallets";
import { wallets } from "../../constants";



const WalletsList = () => {
    const availableWallets = useAvailableWallets()
    const { connect } = useConnect("__0__");

    const updatedWallets = useMemo(() => {
        return wallets.map(wallet => {
            if (availableWallets && availableWallets[wallet.id]) {
                return { ...wallet, is_installed: true };
            }
            return wallet;
        });
    }, [availableWallets]);

    const handleSelectWallet = async (walletId: string) => {
        const wallet = wallets.find((item) => item.id === walletId)!
        await connect(wallet)
    }
    return (
        <div>
            {
                updatedWallets.map((item, index) => (
                    <button
                        key={index}
                        className="wallet-button m-2 p-2 bg-green-500 text-white rounded flex flex-col gap-1"
                        onClick={() => handleSelectWallet(item.id)}
                    >
                        <span>{item.id}</span>
                        {/* <span>{item.image}</span> */}
                        <span>{item.installation_url}</span>
                        <span>is_installed: {item.is_installed ? "TRUE" : "FALSE"}</span>
                        <span>{item.name}</span>
                    </button>
                ))
            }
        </div>
    )
}

export default WalletsList