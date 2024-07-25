"use client";
import React, { useEffect } from "react";
import { Button, Modal, useSwitchAccount } from "@repo/wallet-modal";
import {
  useActiveAccount,
  useBalance,
  useBlockNumber,
} from "@repo/onchain-utils";
import { useProvider } from "@repo/onchain-utils";

const PolkadotConnection: React.FC = () => {
  const { api } = useProvider();
  const { activeAccount } = useActiveAccount();
  const switchAccount = useSwitchAccount();

  const switchAccountHandler = () => {
    switchAccount();
  };

  const { blockNumber } = useBlockNumber();
  const { balance } = useBalance(activeAccount?.address);
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
