"use client";
import React, { useEffect, useState } from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";
import {
  useConnect,
  Button,
  Modal,
  useSwitchAccount,
} from "@repo/wallet-modal";
import { useActiveAccount } from "@repo/onchain-utils";

const POLKADOT_WS_PROVIDER = "wss://westend-rpc.polkadot.io";

const PolkadotConnection: React.FC = () => {
  const [api, setApi] = useState<ApiPromise | null>(null);
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  const { activeAccount } = useActiveAccount();

  // const { connect } = useConnect("PolkadotConnection");
  // const { data: accounts } = useConnect();
  // console.log("accounts___", accounts);
  // const { activeAccount } = useActiveAccount();
  // console.log("accounts-active___", activeAccount);
  // const switchAccount = useSwitchAccount()

  // const switchAccountHandler = () => {
  //   switchAccount(activeAccount?.address!)
  // }

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

  // const handleConnect = async (wallet: Wallet) => {
  //   const connectionRequest = await connect(wallet);
  //   console.log("connectionRequest", connectionRequest);
  //   if (connectionRequest && api) {
  //     //@ts-expect-error tt
  //     const {
  //       data: { free: accountBalance },
  //     } = await api.query.system.account(connectionRequest);
  //     setBalance(accountBalance.toString());
  //   }
  // };
  // useEffect(() => {
  //   handleConnect(wallets![0]!);
  // }, []);

  return (
    <>
      <Modal center />
      <div>
        <h1>Polkadot Westend Testnet</h1>
        <p>
          Current Block Number:{" "}
          {blockNumber !== null ? blockNumber : "Loading..."}
        </p>
        <Button />
        {account && (
          <div>
            <p>Connected Account: {account}</p>
            <p>Balance: {balance !== null ? balance : "Loading..."}</p>
          </div>
        )}
        <p>Active ACcount: {JSON.stringify(activeAccount, null, 2)}</p>
        {/* <button onClick={switchAccountHandler}>Switch account</button> */}
      </div>
    </>
  );
};

export default PolkadotConnection;
