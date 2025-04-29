"use client";
import InputNumber from "~/components/inputs/input-number";

const page = () => {
  return (
    <div style={{ width: 329 }}>
      <InputNumber
        label="Amount"
        showMaxButton={true}
        onMaxClick={() => console.log("Max clicked")}
        selectedToken="ETH"
        onTokenSelect={(token) => console.log("Selected token:", token)}
        availableTokens={["ETH", "BTC", "USDT"]}
        onChange={(value) => console.log("Value changed:", value)}
        value="1000.00"
        placeholder="Enter amount"
      />
    </div>
  );
};

export default page;
