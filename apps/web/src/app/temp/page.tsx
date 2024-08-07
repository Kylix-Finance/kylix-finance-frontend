"use client";

import {
  parseUnit,
  useActiveAccount,
  useAsset,
  useBalance,
  useDownloadEvents,
  useEvent,
  useMetadata,
  useSupply,
} from "@repo/onchain-utils";
import { formatUnit } from "@repo/onchain-utils";
import { useEffect } from "react";
import { notify } from "~/components";
import { useGetAsset } from "~/hooks/api";

// import {
//   useActiveAccount,
//   useAsset,
//   useBalance,
//   useMetadata,
//   useSupply,
// } from "@repo/onchain-utils";
// import { useEffect } from "react";

// import {
//   ConnectButton,
//   WalletModal,
//   useDisconnect,
//   useSwitchAccount,
// } from "@repo/wallet-modal";
// import {
//   useActiveAccount,
//   useBalance,
//   useBlockNumber,
//   useRead,
// } from "@repo/onchain-utils";
// import { useProvider } from "@repo/onchain-utils";
// import { useEffect, useState } from "react";
// import { ApiPromise, WsProvider } from "@polkadot/api";
// import {
//   web3Enable,
//   web3Accounts,
//   web3FromAddress,
// } from "@polkadot/extension-dapp";

// const PolkadotConnection = () => {
//   const rpcGHJGKHG = {
//     chainHead: {
//       body: {
//         description: "Get chain head body",
//         params: [
//           {
//             name: "blockHash",
//             type: "Hash",
//           },
//         ],
//         type: "Bytes",
//       },
//     },
//     chainSpec: {
//       chainName: {
//         description: "Get chain name",
//         params: [],
//         type: "Text",
//       },
//     },
//     transactionWatch: {
//       submitAndWatch: {
//         description: "Submit and watch transaction",
//         params: [
//           {
//             name: "extrinsic",
//             type: "Extrinsic",
//           },
//         ],
//         type: "Hash",
//       },
//     },
//   };

//   const typesjhghjg = {
//     // Define any custom types if required
//     // Example:
//     Auction: {
//       duration: "u32",
//       lease_period_index: "u32",
//     },
//   };

//   async function createApioooo() {
//     const provider = new WsProvider("wss://westend-rpc.polkadot.io");

//     const api = await ApiPromise.create({
//       provider,
//       // rpc:rpc, // Add custom RPC methods
//       // types, // Add custom types if any
//     });

//     // Ensure API is ready
//     await api.isReady;

//     return api;
//   }

//   // const { api } = useProvider();
//   const { activeAccount } = useActiveAccount();
//   const switchAccount = useSwitchAccount();
//   const [isExtensionEnabled, setExtensionEnabled] = useState(false);
//   const { data } = useRead("getLendingPools", [], true);
//   console.log("data", data);

//   useEffect(() => {
//     const enableExtension = async () => {
//       const extensions = await web3Enable("my-app");
//       if (extensions.length > 0) {
//         setExtensionEnabled(true);
//       } else {
//         console.error(
//           "No extension installed or the user did not accept the authorization"
//         );
//       }
//     };

//     enableExtension();
//   }, []);

//   const switchAccountHandler = () => {
//     switchAccount();
//   };

//   const { blockNumber } = useBlockNumber();
//   const { balance } = useBalance(activeAccount?.address);
//   const { disconnect } = useDisconnect();

//   return (
//     <>
//       <WalletModal center />
//       <div className="flex flex-col">
//         <h1>Polkadot Testnet</h1>
//         <p>
//           Current Block Number:{" "}
//           {blockNumber !== null ? blockNumber : "Loading..."}
//         </p>
//         <p>
//           Current Balance Number: {balance !== null ? balance : "Loading..."}
//         </p>
//         <ConnectButton address={activeAccount?.address} />
//         {activeAccount && (
//           <div>
//             <p>Active Account: {JSON.stringify(activeAccount, null, 2)}</p>
//           </div>
//         )}
//         <button onClick={switchAccountHandler}>Switch account</button>
//         <button onClick={() => disconnect()}>Disconnect</button>
//         <button
//           onClick={async () => {
//             if (!activeAccount) return;

//             // Ensure extension is enabled
//             if (!isExtensionEnabled) {
//               console.error("Extension is not enabled");
//               return;
//             }

//             const api = await createApioooo();
//             const extensions = await web3Enable("kylix");
//             // Get the injector for the active account from the Polkadot.js extension
//             const injector = await web3FromAddress(activeAccount.address);

//             // Set the signer for the API
//             api.setSigner(injector.signer);

//             const duration = 1123123;
//             const leasePeriodIndex = 12;

//             const tx = api?.tx?.auctions?.newAuction?.(
//               duration,
//               leasePeriodIndex
//             );

//             // Sign and send the transaction
//             const hash = await tx?.signAndSend(activeAccount.address);

//             console.log("Transaction sent with hash", hash?.toJSON());
//           }}
//         >
//           create auction
//         </button>

//         <div className="flex flex-col gap-4"></div>
//       </div>
//     </>
//   );
// };

// export default PolkadotConnection;

const SignMessage: React.FC = () => {
  // const { data:asset } = useAsset(257);

  const { activeAccount } = useActiveAccount();
  const { balance } = useBalance({ assetId: 1 });

  // const { balance:balance1 } = useBalance("5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY")
  // const { balance } = useBalance(activeAccount?.address);
  const { submitSupply, error } = useSupply();
  useEffect(() => {
    if (error) {
      notify({
        type: "error",
        title: "Supply",
        message: error?.toString() || "",
      });
    }
  }, [error]);
  // console.log("asset",asset,"activeAccount",activeAccount, "metadata",data,"balance1",balance1,"balance",balance );

  // console.log("balaaaanxe", balance);
  // const { data } = useEvent()
  // const { data } = useDownloadEvents();
  // console.log("eveeeeeeeent", data);
  // const { data } = useGetAsset({
  //   symbol: "BTC",
  //   size: "64x64",
  // });
  console.log("balance", balance);

  return (
    <div className="flex flex-col gap-3">
      <div>{/* <p>Balance is : {balance}</p> */}</div>
      <button onClick={() => submitSupply(257, BigInt(parseUnit("555", 18)))}>
        Supply
      </button>
      <button>Get Assets</button>
    </div>
  );
};

export default SignMessage;
