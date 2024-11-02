"use client";

import {
  Box,
  Button,
  ListItemText,
  ListItem as MUIItemList,
  Tooltip,
  Typography,
} from "@mui/material";
import KylixChip from "../KylixChip";
import { ListItem } from "./index";
import { InfoRounded } from "@mui/icons-material";
import { cn } from "~/utils";
import ClientOnly from "../ClientOnly";

const Item = ({
  label,
  value,
  kylixValue,
  tooltipTitle,
  labelClassName,
  valueClassName,
  action,
}: ListItem) => {
  return (
    <MUIItemList className="!flex gap-5 !p-0 !m-0 !justify-between">
      <Box display="flex" alignItems="center" gap="5px">
        <ListItemText className={cn("text-[#767F7D]", labelClassName)}>
          <Typography variant="body1">{label}</Typography>
        </ListItemText>
        {tooltipTitle && (
          <Tooltip title={tooltipTitle} placement="right">
            <InfoRounded className="text-primary-400/50 !w-3 !h-3" />
          </Tooltip>
        )}
      </Box>
      <Box display="flex" gap="10px" alignItems="center">
        {typeof value === "string" ? (
          <Typography
            className={cn("text-primary-800 font-number", valueClassName)}
            variant="subtitle2"
            fontWeight="600"
          >
            {value}
          </Typography>
        ) : (
          value
        )}
        {kylixValue && (
          <ClientOnly>
            <KylixChip
              value={kylixValue}
              className="px-2.5 py-0.5 text-sm"
              iconDimension={{
                height: 14,
                width: 14,
              }}
            />
          </ClientOnly>
        )}
        {action && (
          <Button
            className="!capitalize !text-xs !font-semibold !leading-[13px] !text-center !rounded !py-1 !px-2 !min-h-0"
            size="large"
            variant="outlined"
            disableElevation
            onClick={action.onClick}
            disabled={action.disabled}
          >
            {action.title}
          </Button>
        )}
      </Box>
    </MUIItemList>
  );
};

export default Item;
