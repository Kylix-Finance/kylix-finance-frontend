"use client";
import { useState } from "react";
import InputNumber from "~/components/inputs/input-number";
const Page = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ width: 329 }}>
      <InputNumber
        label="Amount"
        showMaxButton
        showEstimate
        showPercentButtons
        isPercentMode={true}
        onMaxClick={() => console.log("Max clicked")}
        selectedToken="ETH"
        onTokenSelect={(token) => console.log("Selected token:", token)}
        availableTokens={["ETH", "BTC", "USDT"]}
        onChange={setValue}
        value={value}
        placeholder="0"
        decimals={4}
        price="94000"
        availableAmount="0.056"
      />
    </div>
  );
};

export default Page;
