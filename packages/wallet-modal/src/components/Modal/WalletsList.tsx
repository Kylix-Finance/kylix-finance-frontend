import { useMemo, useState } from "react";
import { useAvailableWallets } from "../../hooks/useAvailableWallets";
import { wallets } from "../../constants";
import { useModalStore } from "../../stores";
import Button from "./Button";
import { useConnect } from "../../hooks";

const WalletsList: React.FC = () => {
  const availableWallets = useAvailableWallets();
  const [selectedWalletId, setSelectedWalletId] = useState<string | null>(null);
  const { setStatus } = useModalStore();
  const { connectAsync } = useConnect();
  const { setStage } = useModalStore();

  const updatedWallets = useMemo(() => {
    return wallets.map((wallet) => {
      if (availableWallets && availableWallets[wallet.id]) {
        return { ...wallet, is_installed: true };
      }
      return { ...wallet, is_installed: false };
    });
  }, [availableWallets]);

  const handleSelectWallet = (walletId: string) => {
    const wallet = updatedWallets.find((item) => item.id === walletId);
    if (wallet?.is_installed) setSelectedWalletId(walletId);
  };

  const handleConnect = async () => {
    const wallet = updatedWallets.find((item) => item.id === selectedWalletId);
    if (wallet) {
      await connectAsync({ wallet });
      setStage("accountsList");
    }
  };

  const handleCancel = () => {
    setSelectedWalletId(null);
    setStatus(false);
  };

  return (
    <div className="flex flex-col justify-between  h-[90%] ">
      <div className="flex flex-col gap-1.5 overflow-y-scroll">
        {updatedWallets.map((item) => (
          <button
            key={item.id}
            disabled={!item.is_installed}
            className={`bg-[#F7F7F7] rounded-lg p-4 border-2 transition-colors duration-75 ${
              item.id === selectedWalletId
                ? "border-primary-500"
                : "border-[#F7F7F7]"
            }`}
            onClick={() => handleSelectWallet(item.id)}
          >
            <label
              htmlFor={item.id}
              className="text-gray-700 flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="inline-block h-8 w-8 bg-white p-2 rounded"
                />
                <p className="text-[#383E42] font-bold text-sm leading-5">
                  {item.name}
                </p>
              </div>
              {item.is_installed ? (
                <input
                  id={item.id}
                  type="radio"
                  className="h-4 w-4 wallet-modal-radio"
                  checked={item.id === selectedWalletId}
                  readOnly
                />
              ) : (
                <a href={item.installation_url}>DOWNLOAD</a>
              )}
            </label>
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 w-full">
        <Button
          onClick={handleCancel}
          className="text-[#4C5452] bg-white hover:bg-gray-50/90 border border-[#767F7D26]"
        >
          Cancel
        </Button>
        <Button
          onClick={handleConnect}
          disabled={!selectedWalletId}
          className="text-white bg-primary-500 hover:bg-primary-500/90 border-[#767F7D26] disabled:bg-primary-500/80 disabled:cursor-not-allowed"
        >
          Connect
        </Button>
      </div>
    </div>
  );
};

export default WalletsList;
