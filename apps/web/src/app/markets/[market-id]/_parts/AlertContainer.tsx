import React from "react";
import { Box, Alert } from "@mui/material";
import { cn } from "~/utils";
import { FormAlert } from "~/components/FormAlert";

interface AlertContainerProps {
  isInputEmptyOrZero: boolean;
  isInsufficientBalance: boolean;
}

const AlertContainer = ({
  isInputEmptyOrZero,
  isInsufficientBalance,
}: AlertContainerProps) => {
  return (
    <Box className={cn("flex flex-col gap-1")}>
      {isInputEmptyOrZero && (
        <FormAlert severity="error" message="Please enter a valid amount!" />
      )}
      {isInsufficientBalance && (
        <FormAlert severity="error" message="Insufficient Balance!" />
      )}
    </Box>
  );
};

export default AlertContainer;
