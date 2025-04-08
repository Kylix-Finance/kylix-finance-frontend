import { ApiPromise, WsProvider } from "@polkadot/api";
import fs from "fs";

async function generateMetadata() {
  try {
    const provider = new WsProvider("wss://test-dashboard.kylix.finance");
    const api = await ApiPromise.create({ provider });

    const metadata = await api.rpc.state.getMetadata();

    fs.writeFileSync("./metadata.hex", metadata.toHex());

    fs.writeFileSync("./metadata.json", JSON.stringify(metadata.toJSON()));

    console.log(
      "Metadata saved in two formats. Try using metadata.hex with the --input flag."
    );
    await api.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

generateMetadata().catch(console.error);
