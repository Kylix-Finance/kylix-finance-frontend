import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ChartScale } from "~/types";

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
    <ButtonGroup variant="outlined" className="border border-primary-500">
      {periods.map((period) => {
        const isActive = period.value === selected;
        return (
          <Button
            variant="text"
            key={period.value}
            //TODO: use correct color for non-active mode
            color={isActive ? "primary" : "secondary"}
            onClick={() => setSelected(period.value)}
          >
            {period.label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
