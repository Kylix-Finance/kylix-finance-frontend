import {
  Box,
  keyframes,
  ListItemIcon,
  ListItemText,
  ListItem as MUIItemList,
} from "@mui/material";
import { ListItem } from "./type";
import KylixChip from "../KylixChip";

const Item = ({ label, value, kylixValue }: ListItem) => {
  return (
    <MUIItemList className="!flex gap-5 !p-0 !m-0">
      <ListItemText className="!text-sm !font-medium !leading-5 !text-[#767F7D]">
        {label}
      </ListItemText>
      <Box display="flex" gap="10px" alignItems="center">
        <p className="!font-semibold !text-base !leading-5 !text-primary-800 !font-number">
          {value}
        </p>
        {kylixValue && (
          <KylixChip
            value={kylixValue}
            className="px-2.5 py-0.5 text-sm"
            iconDimension={{
              height: 14,
              width: 14,
            }}
          />
        )}
      </Box>
    </MUIItemList>
  );
};

export default Item;
