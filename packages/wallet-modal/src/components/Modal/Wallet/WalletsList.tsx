import { useAvailableWallets } from "../../../hooks/useAvailableWallets";
import { wallets } from "../../../constants";
import { useConnect } from "../../../hooks";
import { Wallet } from "@repo/shared";

const WalletsList = () => {
  const availableWallets = useAvailableWallets();
  const { connect, data: connectData } = useConnect();

  const updatedWallets = wallets.map((wallet) => {
    const isInstalled = availableWallets && availableWallets[wallet.id];
    return { ...wallet, isInstalled };
  });

  const handleConnect = (wallet: Wallet) => {
    connect({ wallet });
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-1.5">
        {updatedWallets.map((wallet) => (
          <button
            key={wallet.id}
            disabled={!wallet.isInstalled}
            className={`bg-primary-100/50 hover:bg-primary-500/30 disabled:grayscale-[50] rounded-lg p-4 border-2 transition-colors duration-75 ${
              wallet.id === connectData?.connector.id
                ? "border-primary-500 bg-primary-200"
                : "border-[#F7F7F7]"
            } ${!wallet.isInstalled && "bg-gray-300/75"}`}
            onClick={() => handleConnect(wallet)}
          >
            <div className="text-gray-700 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <img
                  src={wallet.image}
                  alt={wallet.name}
                  className="inline-block h-8 w-8 bg-white p-2 rounded"
                />
                <p className="text-[#383E42] font-bold text-sm leading-5">
                  {wallet.name}
                </p>
              </div>
              {!wallet.isInstalled && (
                <a href={wallet.installation_url} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#222222"
                    width="20px"
                    height="20px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
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
