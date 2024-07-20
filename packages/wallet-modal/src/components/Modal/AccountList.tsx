import { useModalStore } from "../../stores";
import { useAccounts } from "@repo/onchain-utils";
import { useActivateAccount } from "../../hooks/useActiveAccount";
import { InjectedAccount } from "@polkadot/extension-inject/types";

const AccountList = () => {
  const { accounts } = useAccounts();
  const { activateAccount, activeAccount } = useActivateAccount();

  const { setStage, setStatus } = useModalStore();

  const handleSelectAccount = (account: InjectedAccount) => {
    activateAccount({ account });
    setStatus(false);
    setTimeout(() => {
      setStage("walletsList");
    }, 300);
  };

  return (
    <div className="flex flex-col justify-between gap-4  h-[90%] ">
      <div className="flex flex-col gap-1.5">
        {accounts?.map((item) => (
          <button
            key={item.address}
            className={`flex justify-between gap-4 bg-primary-100/50 hover:bg-primary-500/30 rounded-lg p-4 border-2 transition-colors duration-75 ${
              item.address === activeAccount?.address
                ? "border-primary-500"
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

export default AccountList;
