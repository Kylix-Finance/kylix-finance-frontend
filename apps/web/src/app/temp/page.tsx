"use client";
import React, { useEffect, useState } from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from "@polkadot/extension-dapp";

const POLKADOT_WS_PROVIDER = "wss://westend-rpc.polkadot.io";

const PolkadotConnection: React.FC = () => {
  const [api, setApi] = useState<ApiPromise | null>(null);
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    const connect = async () => {
      try {
        const provider = new WsProvider(POLKADOT_WS_PROVIDER);
        const api = await ApiPromise.create({ provider });
        setApi(api);

        const unsub = await api.rpc.chain.subscribeNewHeads((lastHeader) => {
          setBlockNumber(lastHeader.number.toNumber());
        });

        return () => {
          unsub();
          api.disconnect();
        };
      } catch (error) {
        console.error("Failed to connect to the Polkadot API", error);
      }
    };

    connect();
  }, []);

  const connectToSubwallet = async () => {
    try {
      // Request permissions to access the user's accounts
      const extensions = await web3Enable("PolkadotConnection");
      if (extensions.length === 0) {
        throw new Error("No extension installed");
      }

      // Get all accounts available in the extension
      const allAccounts = await web3Accounts();
      if (allAccounts.length === 0) {
        throw new Error("No accounts available");
      }

      // Select the first account as the default account
      const defaultAccount = allAccounts[0]?.address || "";
      setAccount(defaultAccount);

      // Retrieve the balance of the default account
      const injector = await web3FromAddress(defaultAccount);
      api?.setSigner(injector.signer);
      let balance;
      if (api?.query.system && api?.query.system.account) {
        const data = await api?.query.system.account(defaultAccount);
        balance = (data as unknown as any)?.data;
      }
      setBalance(balance.free.toString());
    } catch (error) {
      console.error("Failed to connect to the Subwallet", error);
    }
  };

  return (
    <div>
      <h1>Polkadot Westend Testnet</h1>
      <p>
        Current Block Number:{" "}
        {blockNumber !== null ? blockNumber : "Loading..."}
      </p>
      <button onClick={connectToSubwallet}>Connect to Subwallet</button>
      {account && (
        <div>
          <p>Connected Account: {account}</p>
          <p>Balance: {balance !== null ? balance : "Loading..."}</p>
        </div>
      )}
    </div>
  );
};

export default PolkadotConnection;
