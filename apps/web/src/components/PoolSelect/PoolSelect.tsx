import {
  Autocomplete,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import { SelectOption } from "~/types";
import { SelectRenderOption } from "./SelectRenderOption";
import { cn } from "~/utils";
import { TokenIcon } from "../TokenIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface Props {
  options: SelectOption[];
  setValue: (value: SelectOption) => void;
  value: SelectOption | undefined;
  className?: string;
}

export const PoolSelect = ({ setValue, value, options, className }: Props) => {
  const theme = useTheme();

  const handleChange = (_: React.SyntheticEvent, newValue: SelectOption) => {
    setValue(newValue);
  };

  return (
    <Autocomplete
      disableClearable
      className={cn(className)}
      getOptionLabel={(option: SelectOption) => option.label}
      isOptionEqualToValue={(option: SelectOption, value: SelectOption) =>
        option.value === value.value
      }
      options={options}
      popupIcon={<ExpandMoreIcon />}
      renderInput={(params) => (
        <TextField
          {...params}
          color="info"
          InputLabelProps={{ style: { color: theme.palette.text.primary } }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <TokenIcon height={28} symbol={value?.label} width={28} />
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={SelectRenderOption}
      sx={() => ({
        backgroundColor: "#45A9961A",
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
      })}
      value={value}
      onChange={handleChange}
    />
  );
};
