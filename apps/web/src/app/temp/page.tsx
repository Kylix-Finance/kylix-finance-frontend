"use client";
import {
  ConnectButton,
  WalletModal,
  useDisconnect,
  useSwitchAccount,
} from "@repo/wallet-modal";
import {
  useActiveAccount,
  useBalance,
  useBlockNumber,
} from "@repo/onchain-utils";
import { useProvider } from "@repo/onchain-utils";
import { useEffect, useState } from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";
import {
  web3Enable,
  web3Accounts,
  web3FromAddress,
} from "@polkadot/extension-dapp";

const PolkadotConnection = () => {
  const rpcGHJGKHG = {
    // Example of adding a custom RPC, modify accordingly
    chainHead: {
      body: {
        description: "Get chain head body",
        params: [
          {
            name: "blockHash",
            type: "Hash",
          },
        ],
        type: "Bytes",
      },
      // Add other chainHead methods here
    },
    chainSpec: {
      chainName: {
        description: "Get chain name",
        params: [],
        type: "Text",
      },
      // Add other chainSpec methods here
    },
    transactionWatch: {
      submitAndWatch: {
        description: "Submit and watch transaction",
        params: [
          {
            name: "extrinsic",
            type: "Extrinsic",
          },
        ],
        type: "Hash",
      },
      // Add other transactionWatch methods here
    },
    // Add other custom RPCs as needed
  };

  const typesjhghjg = {
    // Define any custom types if required
    // Example:
    Auction: {
      duration: "u32",
      lease_period_index: "u32",
    },
  };

  async function createApioooo() {
    const provider = new WsProvider("wss://westend-rpc.polkadot.io");

    const api = await ApiPromise.create({
      provider,
      // rpc:rpc, // Add custom RPC methods
      // types, // Add custom types if any
    });

    // Ensure API is ready
    await api.isReady;

    return api;
  }

  const { api } = useProvider();
  const { activeAccount } = useActiveAccount();
  const switchAccount = useSwitchAccount();
  const [isExtensionEnabled, setExtensionEnabled] = useState(false);

  useEffect(() => {
    const enableExtension = async () => {
      const extensions = await web3Enable("my-app");
      if (extensions.length > 0) {
        setExtensionEnabled(true);
      } else {
        console.error(
          "No extension installed or the user did not accept the authorization"
        );
      }
    };

    enableExtension();
  }, []);

  const switchAccountHandler = () => {
    switchAccount();
  };

  const { blockNumber } = useBlockNumber();
  const { balance } = useBalance(activeAccount?.address);
  const { disconnect } = useDisconnect();

  return (
    <>
      <WalletModal center />
      <div className="flex flex-col">
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
        <button
          onClick={async () => {
            if (!activeAccount) return;

            // Ensure extension is enabled
            if (!isExtensionEnabled) {
              console.error("Extension is not enabled");
              return;
            }

            const api = await createApioooo();
            const extensions = await web3Enable("kylix");
            // Get the injector for the active account from the Polkadot.js extension
            const injector = await web3FromAddress(activeAccount.address);

            // Set the signer for the API
            api.setSigner(injector.signer);

            const duration = 1123123;
            const leasePeriodIndex = 12;

            const tx = api?.tx?.auctions?.newAuction?.(
              duration,
              leasePeriodIndex
            );

            // Sign and send the transaction
            const hash = await tx?.signAndSend(activeAccount.address);

            console.log("Transaction sent with hash", hash?.toJSON());
          }}
        >
          create auction
        </button>
      </div>
    </>
  );
};

export default PolkadotConnection;
