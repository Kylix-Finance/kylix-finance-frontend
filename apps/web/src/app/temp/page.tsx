"use client";
import {
  ConnectButton,
  Modal,
  useDisconnect,
  useSwitchAccount,
} from "@repo/wallet-modal";
import {
  useActiveAccount,
  useBalance,
  useBlockNumber,
} from "@repo/onchain-utils";
import { useProvider } from "@repo/onchain-utils";

const PolkadotConnection = () => {
  const { api } = useProvider();
  const { activeAccount } = useActiveAccount();
  const switchAccount = useSwitchAccount();

  const switchAccountHandler = () => {
    switchAccount();
  };

  const { blockNumber } = useBlockNumber();
  const { balance } = useBalance(activeAccount?.address);
  const { disconnect } = useDisconnect();
  return (
    <>
      <Modal center />
      <div>
        <h1>Polkadot Testnet</h1>
        <p>
          Current Block Number:{" "}
          {blockNumber !== null ? blockNumber : "Loading..."}
        </p>
        <p>
          Current Balance Number: {balance !== null ? balance : "Loading..."}
        </p>
        <ConnectButton address={activeAccount?.address} />
        {activeAccount && (
          <div>
            <p>Active Account: {JSON.stringify(activeAccount, null, 2)}</p>
          </div>
        )}
        <button onClick={switchAccountHandler}>Switch account</button>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    </>
  );
};

export default PolkadotConnection;
