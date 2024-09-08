import {
  Autocomplete,
  Icon,
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
  value: SelectOption;
  className?: string;
}

export const PoolSelect = ({ setValue, value, options, className }: Props) => {
  const theme = useTheme();

  const handleChange = (_: React.SyntheticEvent, newValue: SelectOption) => {
    setValue(newValue);
  };

  return (
    <Autocomplete
      className={cn(className)}
      sx={(theme) => ({
        backgroundColor: "#45A9961A",
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
      })}
      isOptionEqualToValue={(option: SelectOption, value: SelectOption) =>
        option.value === value.value
      }
      value={value}
      onChange={handleChange}
      options={options}
      disableClearable
      getOptionLabel={(option: SelectOption) => option.label}
      renderOption={SelectRenderOption}
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
                <TokenIcon width={28} height={28} symbol={value.label} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
