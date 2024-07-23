"use client";
import React, { useEffect, useState } from "react";
import { ApiPromise } from "@polkadot/api";
import {
  useConnect,
  Button,
  Modal,
  useSwitchAccount,
} from "@repo/wallet-modal";
import { useActiveAccount } from "@repo/onchain-utils";
import { useProvider } from "@repo/onchain-utils";

const POLKADOT_WS_PROVIDER = "https://51.20.192.52:443";

const PolkadotConnection: React.FC = () => {
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [lendingPools, setLendingPools] = useState<any | null>(null);

  const { activeAccount } = useActiveAccount();
  const switchAccount = useSwitchAccount();

  const switchAccountHandler = () => {
    switchAccount();
  };

  const { api, isConnected, status } = useProvider({
    name: "Polkadot",
    url: POLKADOT_WS_PROVIDER,
  });

  useEffect(() => {
    if (api && isConnected) {
      const fetchLendingPools = async () => {
        try {
          //@ts-expect-error sssss
          const pools = await api.rpc.lending.getLendingPools();
          setLendingPools(pools.toHuman());
        } catch (error) {
          console.error("Failed to fetch lending pools", error);
        }
      };

      const subscribeToBlocks = async () => {
        try {
          const unsub = await api.rpc.chain.subscribeNewHeads((lastHeader) => {
            setBlockNumber(lastHeader.number.toNumber());
          });

          return () => {
            unsub();
          };
        } catch (error) {
          console.error("Failed to subscribe to new blocks", error);
        }
      };

      fetchLendingPools();
      subscribeToBlocks();
    }
  }, [api, isConnected]);

  return (
    <>
      <Modal center />
      <div>
        <h1>Polkadot Testnet</h1>
        <p>
          Current Block Number:{" "}
          {blockNumber !== null ? blockNumber : "Loading..."}
        </p>
        <Button />
        {activeAccount && (
          <div>
            <p>Active Account: {JSON.stringify(activeAccount, null, 2)}</p>
          </div>
        )}
        <button onClick={switchAccountHandler}>Switch account</button>
        <div>
          <h2>Lending Pools</h2>
          {lendingPools ? (
            <pre>{JSON.stringify(lendingPools, null, 2)}</pre>
          ) : (
            <p>Loading lending pools...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PolkadotConnection;
