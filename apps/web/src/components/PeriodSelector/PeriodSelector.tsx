import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ChartScale } from "~/types";
import { cn } from "~/utils";

type Period = {
  value: ChartScale;
  label: string;
};

type PeriodSelectorProps = {
  periods: Period[];
  selected: ChartScale;
  setSelected: (selectedId: ChartScale) => void;
};

export const PeriodSelector = ({
  periods,
  selected,
  setSelected,
}: PeriodSelectorProps) => {
  return (
    <ButtonGroup
      disableElevation
      disableRipple
      disableFocusRipple
      variant="outlined"
      className="border border-[#B3BFBC9E] dark:border-primary-500/10 dark:bg-[#0D0D0D] p-0.5"
    >
      {periods.map((period) => {
        const isActive = period.value === selected;
        return (
          <Button
            variant="text"
            key={period.value}
            disableRipple
            disableTouchRipple
            disableElevation
            className={cn(
              "font-body p-1",
              isActive ? "text-primary-500" : "text-[#B3BFBC9E]"
            )}
            onClick={() => setSelected(period.value)}
          >
            {period.label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
