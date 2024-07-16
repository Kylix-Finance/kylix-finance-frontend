import { useState } from "react";
import { useModalStore } from "../../stores";
import { useAccountsStore } from "../../stores/accounts";
import Button from "./Button";

const AccountList = () => {
  const { accounts, setActiveAccount } = useAccountsStore();
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(
    null
  );
  const { setStage, setStatus } = useModalStore();

  const accountHandler = (account: string) => setSelectedAccountId(account);
  const handlePreviousStep = () => {
    setStage("walletsList");
  };
  const handleSelectAccount = () => {
    if (selectedAccountId) {
      setActiveAccount(selectedAccountId);
      setStatus(false);
      setSelectedAccountId(null);
      setStage("walletsList");
    }
  };

  return (
    <div className="flex flex-col justify-between gap-4  h-[90%] ">
      <div className="flex flex-col gap-1.5 overflow-y-scroll">
        {accounts?.map((item) => (
          <button
            key={item.address}
            className={`bg-[#F7F7F7] rounded-lg p-4 border-2 transition-colors duration-75 ${
              item.address === selectedAccountId
                ? "border-primary-500"
                : "border-[#F7F7F7]"
            }`}
            onClick={() => accountHandler(item.address)}
          >
            <p className="text-[#383E42] font-bold text-sm leading-5">
              {item.name}
            </p>
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 w-full">
        <Button
          onClick={handlePreviousStep}
          className="text-[#4C5452] bg-white hover:bg-gray-50/90 border border-[#767F7D26]"
        >
          Previous step
        </Button>
        <Button
          onClick={handleSelectAccount}
          disabled={!selectedAccountId}
          className="text-white bg-primary-500 hover:bg-primary-500/90 border-[#767F7D26] disabled:bg-primary-500/80 disabled:cursor-not-allowed"
        >
          Connect
        </Button>
      </div>
    </div>
  );
};

export default AccountList;
