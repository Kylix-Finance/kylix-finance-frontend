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
      <Box alignItems="center" display="flex" gap="5px">
        <ListItemText className={cn("text-[#767F7D]", labelClassName)}>
          <Typography variant="body1">{label}</Typography>
        </ListItemText>
        {tooltipTitle && (
          <Tooltip placement="right" title={tooltipTitle}>
            <InfoRounded className="text-[#767F7D] w-4 h-4" />
          </Tooltip>
        )}
      </Box>
      <Box alignItems="center" display="flex" gap="10px">
        {typeof value === "string" ? (
          <Typography
            className={cn(
              "text-primary-800 dark:text-primary-100 font-number",
              valueClassName
            )}
            fontWeight="600"
            variant="subtitle2"
          >
            {value}
          </Typography>
        ) : (
          value
        )}
        {kylixValue && (
          <ClientOnly>
            <KylixChip
              className="px-3 py-2 text-sm"
              iconDimension={{
                height: 14,
                width: 14,
              }}
              value={kylixValue}
            />
          </ClientOnly>
        )}
        {action && (
          <Button
            disableElevation
            className="!capitalize !text-xs !font-semibold !leading-[13px] !text-center !rounded py-2 px-2 min-h-0 dark:disabled:border-black-400 dark:disabled:text-black-400"
            disabled={action.disabled}
            size="large"
            variant="outlined"
            onClick={action.onClick}
          >
            {action.title}
          </Button>
        )}
      </Box>
    </MUIItemList>
  );
};

export default Item;
