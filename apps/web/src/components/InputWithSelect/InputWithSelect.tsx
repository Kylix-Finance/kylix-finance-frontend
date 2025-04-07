import { Button, InputAdornment, TextField } from "@mui/material";
import { PoolSelect } from "../PoolSelect";
import { cn, handleInputChange } from "~/utils";
import { useMemo, useState } from "react";
import { SelectOption } from "~/types";
import { useMetadata } from "@repo/onchain-utils";
import { debounce } from "lodash-es";

interface Props {
  value?: string;
  setValue: (value: string) => void;
  maxValue?: string;
  onMax?: () => void;
  pool: SelectOption | undefined;
  setPool: (pool: SelectOption) => void;
  options: SelectOption[];
  textField?: "readonly" | "write";
  disabledMax?: boolean;
}

export const InputWithSelect = ({
  setValue,
  maxValue = "0",
  pool,
  setPool,
  options,
  textField = "write",
  value,
  onMax,
  disabledMax,
}: Props) => {
  const { assetMetaData } = useMetadata(pool?.value);
  const [localValue, setLocalValue] = useState<string>("");

  const debouncedSetValue = useMemo(
    () => debounce((val: string) => setValue(val), 300),
    [setValue]
  );
  const isReadOnly = textField === "readonly";

  return (
    <div className="w-full flex justify-center items-center">
      <PoolSelect
        className="!w-1/2"
        options={options}
        setValue={setPool}
        value={pool}
      />
      <div className="bg-[#45A9961A] h-full flex justify-center items-center">
        <span className="w-0.5 h-[22px] bg-[#1A433B33]" />
      </div>
      <TextField
        fullWidth
        autoComplete="off"
        FormHelperTextProps={{
          sx: {
            fontWeight: "bold",
          },
        }}
        inputMode="numeric"
        className={cn(
          "!w-1/2 !rounded-md !font-number !font-bold !text-base !text-primary-800 !leading-5"
        )}
        // error={!!error}
        // helperText={error}
        inputProps={{
          style: { cursor: isReadOnly ? "not-allowed" : "text" },
          className: "!font-number",
        }}
        InputProps={{
          readOnly: isReadOnly,
          className: "!font-number",
          style: { cursor: isReadOnly ? "not-allowed" : "text" },
          sx: {
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
            backgroundColor: "#45A9961A",
          },
          endAdornment: isReadOnly ? (
            <></>
          ) : (
            <InputAdornment position="end">
              <Button
                disabled={disabledMax}
                onClick={() => {
                  setValue(maxValue);
                  setLocalValue(maxValue);
                  onMax?.();
                }}
                size="small"
                sx={{
                  textTransform: "none",
                  minWidth: "auto",
                  padding: "0 8px",
                }}
              >
                Max
              </Button>
            </InputAdornment>
          ),
        }}
        placeholder="0"
        value={isReadOnly ? value : localValue}
        onChange={(e) => {
          handleInputChange(e, setLocalValue, assetMetaData?.decimals || 6);
          debouncedSetValue(e.target.value);
        }}
      />
    </div>
  );
};
