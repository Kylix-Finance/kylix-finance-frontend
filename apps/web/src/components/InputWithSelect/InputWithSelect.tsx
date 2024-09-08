import { TextField, TextFieldProps } from "@mui/material";
import { usePoolStore } from "~/store";
import { PoolSelect } from "../PoolSelect";
import { getDecimalRegex } from "~/utils";
import { useState } from "react";
import { usePools } from "~/hooks/chain/usePools";
import { SelectOption } from "~/types";

export const InputWithSelect = () => {
  const { pools } = usePools();

  const options: SelectOption[] =
    pools?.map((pool) => ({
      value: pool.assetId.toString(),
      label: pool.assetName,
    })) || [];

  const { setPool, pool } = usePoolStore();
  const [value, setValue] = useState("");
  let decimals: number | undefined = undefined;
  const handleInputChange: TextFieldProps["onChange"] = ({
    target: { value },
  }) => {
    if (value === "") return setValue(value);
    const isValid = getDecimalRegex(decimals || 6).test(value);
    if (isValid) setValue(value);
  };
  return (
    <div className="w-full flex justify-center items-center">
      <PoolSelect
        className="w-1/2"
        options={options}
        setValue={setPool}
        value={pool}
      />
      <div className="bg-[#45A9961A] h-full flex justify-center items-center">
        <span className="w-0.5 h-[22px] bg-[#1A433B33]" />
      </div>
      <TextField
        value={value}
        onChange={handleInputChange}
        fullWidth
        placeholder="0"
        className="w-1/2 !rounded-md !font-number !font-bold !text-base !text-primary-800 !leading-5"
        // error={!!error}
        // helperText={error}
        inputMode="numeric"
        autoComplete="off"
        FormHelperTextProps={{
          sx: {
            fontWeight: "bold",
          },
        }}
        InputProps={{
          sx: {
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
            backgroundColor: "#45A9961A",
          },
        }}
      />
    </div>
  );
};
