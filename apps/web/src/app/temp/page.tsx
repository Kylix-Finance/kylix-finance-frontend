"use client";
import React, { useEffect, useState } from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Wallet, useConnect } from "@repo/wallet-modal"; // Adjust the import path as needed

const POLKADOT_WS_PROVIDER = "wss://westend-rpc.polkadot.io";

const wallets: Wallet[] = [
  { name: "Fearless Wallet", id: "fearless-wallet", image: "" },
  {
    name: "SubWallet - Polkadot Wallet",
    id: "subwallet-js",
    image: ""
  },
  {
    name: "Talisman - Ethereum and Polkadot Wallet",
    id: "talisman",
    image: ""
  },
  { name: "Enkrypt Crypto Wallet", id: "enkrypt", image: "" }
];

const PolkadotConnection: React.FC = () => {
  const [api, setApi] = useState<ApiPromise | null>(null);
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  const { connect } = useConnect("PolkadotConnection");

  useEffect(() => {
    const connectToApi = async () => {
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

    connectToApi();
  }, []);

  const handleConnect = async (wallet: Wallet) => {
    const connectionRequest = await connect(wallet);
    console.log("connectionRequest", connectionRequest);
    if (connectionRequest && api) {
      setAccount(connectionRequest);
      //@ts-expect-error tt
      const { data: { free: accountBalance } } = await api.query.system.account(connectionRequest);
      setBalance(accountBalance.toString());
    }
  };

  return (
    <div>
      <h1>Polkadot Westend Testnet</h1>
      <p>
        Current Block Number: {blockNumber !== null ? blockNumber : "Loading..."}
      </p>
      {wallets.map((wallet) => (
        <button key={wallet.id} onClick={() => handleConnect(wallet)}>
          Connect to {wallet.name}
        </button>
      ))}
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
