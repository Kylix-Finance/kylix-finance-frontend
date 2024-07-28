import { useModalStore } from "../../../stores";
import { useAccounts, useActiveAccount } from "@repo/onchain-utils";
import { InjectedAccount } from "@polkadot/extension-inject/types";
import { useAccountStore } from "@repo/shared";

const SwitchAccount = () => {
  const { accounts } = useAccounts();
  const { setAccount } = useAccountStore();
  const { activeAccount } = useActiveAccount();
  const { setIsOpen: setStatus, setStage } = useModalStore();
  const handleSelectAccount = (account: InjectedAccount) => {
    setAccount(account.address);
    setStatus(false);
    setTimeout(() => {
      setStage("walletsList");
    }, 200);
  };

  return (
    <div className="flex flex-col justify-between gap-4  h-[90%] ">
      <div className="flex flex-col gap-1.5">
        {accounts?.map((item) => (
          <button
            key={item.address}
            disabled={item.address === activeAccount?.address}
            className={`flex justify-between gap-4 bg-primary-100/50 hover:bg-primary-500/30 rounded-lg p-4 border-2 transition-colors duration-75 disabled:bg-primary-300/70 disabled:cursor-not-allowed ${
              item.address === activeAccount?.address
                ? "border-primary-300/70"
                : "border-[#F7F7F7]"
            }`}
            onClick={() => handleSelectAccount(item)}
          >
            <p className="text-[#383E42] font-bold text-sm leading-5 line-clamp-1 w-24">
              {item.name}
            </p>
            <p className="text-[#383E42] font-bold text-sm leading-5 line-clamp-1">
              {item.address.slice(0, 5)}...{item.address.slice(-5)}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SwitchAccount;
