"use client";
import React, { useEffect } from "react";
import { Button, Modal, useSwitchAccount } from "@repo/wallet-modal";
import {
  useActiveAccount,
  useBalance,
  useBlockNumber,
} from "@repo/onchain-utils";
import { useProvider } from "@repo/onchain-utils";
import { ApiPromise, HttpProvider, WsProvider } from "@polkadot/api";

const POLKADOT_WS_PROVIDER = "wss://westend-rpc.polkadot.io";

const PolkadotConnection: React.FC = () => {
  const { api } = useProvider({
    name: "Westnet",
    url: POLKADOT_WS_PROVIDER,
  });
  const { activeAccount } = useActiveAccount();
  const switchAccount = useSwitchAccount();

  const switchAccountHandler = () => {
    switchAccount();
  };

  const { blockNumber } = useBlockNumber(api);
  const { balance } = useBalance(
    "5FU165x6HT2eZYTW3QAxqhiJZfTJ9Vqdtfe6owkNLeGSBSbV",
    api
  );
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
        <Button />
        {activeAccount && (
          <div>
            <p>Active Account: {JSON.stringify(activeAccount, null, 2)}</p>
          </div>
        )}

        <button onClick={switchAccountHandler}>Switch account</button>
      </div>
    </>
  );
};

export default PolkadotConnection;
function getLendingPools() {
  throw new Error("Function not implemented.");
}
