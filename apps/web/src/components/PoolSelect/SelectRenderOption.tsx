import { SelectOption } from "~/types";
import { TokenIcon } from "../TokenIcon";
import { ListItemButton } from "@mui/material";

export const SelectRenderOption = (props: object, option: SelectOption) => {
  return (
    <ListItemButton {...props} className="flex gap-2">
      <TokenIcon symbol={option.value} />
      <span>{option.label}</span>
    </ListItemButton>
  );
};
