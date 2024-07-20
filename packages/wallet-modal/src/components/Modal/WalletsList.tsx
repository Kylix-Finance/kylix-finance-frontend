import { useMemo } from "react";
import { useAvailableWallets } from "../../hooks/useAvailableWallets";
import { wallets } from "../../constants";
import { useModalStore } from "../../stores";
import { useConnect } from "../../hooks";
import { Wallet } from "../../types";

const WalletsList: React.FC = () => {
  const availableWallets = useAvailableWallets();
  const { connectAsync, data: connectData } = useConnect();
  const { setStage } = useModalStore();

  const updatedWallets = useMemo(() => {
    return wallets.map((wallet) => {
      if (availableWallets && availableWallets[wallet.id]) {
        return { ...wallet, isInstalled: true };
      }
      return { ...wallet, isInstalled: false };
    });
  }, [availableWallets]);

  const handleConnect = async (wallet: Wallet) => {
    await connectAsync({ wallet });
    setStage("accountsList");
  };

  return (
    <div className="flex flex-col justify-between  h-[90%] ">
      <div className="flex flex-col gap-1.5 overflow-y-scroll">
        {updatedWallets.map((item) => (
          <button
            key={item.id}
            disabled={!item.isInstalled}
            className={`bg-primary-100/50 hover:bg-primary-500/30 disabled:grayscale-[50] rounded-lg p-4 border-2 transition-colors duration-75 ${
              item.id === connectData?.connector.id
                ? "border-primary-500"
                : "border-[#F7F7F7]"
            }`}
            onClick={() => handleConnect(item)}
          >
            <div className="text-gray-700 flex items-center justify-between gap-2">
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
              {!item.isInstalled && (
                <a href={item.installation_url} target="_blank">
                  DOWNLOAD
                </a>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WalletsList;
