import {
  Button,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { PoolSelect } from "../PoolSelect";
import { getDecimalRegex, handleInputChange } from "~/utils";
import { useCallback, useMemo, useState } from "react";
import { usePools } from "~/hooks/chain/usePools";
import { SelectOption } from "~/types";
import { useMetadata } from "@repo/onchain-utils";
import { debounce } from "lodash-es";

interface Props {
  setValue: (value: any) => void;
  maxValue?: string;
  pool: SelectOption | undefined;
  setPool: (pool: SelectOption) => void;
}

export const InputWithSelect = ({
  setValue,
  maxValue = "0",
  pool,
  setPool,
}: Props) => {
  const { pools } = usePools();

  const options: SelectOption[] =
    pools?.map((pool) => ({
      value: pool.assetId.toString(),
      label: pool.assetName,
    })) || [];

  const { assetMetaData } = useMetadata(pool?.value);
  const [localValue, setLocalValue] = useState<string>("");

  const debouncedSetValue = useMemo(
    () => debounce((val: string) => setValue(val), 300),
    [setValue]
  );

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
        value={localValue}
        onChange={(e) => {
          handleInputChange(e, setLocalValue, assetMetaData?.decimals || 6);
          debouncedSetValue(e.target.value);
        }}
        fullWidth
        placeholder="0"
        className="!w-1/2 !rounded-md !font-number !font-bold !text-base !text-primary-800 !leading-5"
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
          endAdornment: (
            <InputAdornment position="end">
              <Button
                onClick={() => setValue(maxValue)}
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
      />
    </div>
  );
};
