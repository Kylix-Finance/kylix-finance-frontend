import React from "react";
import { Box, Alert } from "@mui/material";
import { cn } from "~/utils";
import { FormAlert } from "~/components/FormAlert";

interface AlertContainerProps {
  isInputEmptyOrZero: boolean;
}

const AlertContainer = ({ isInputEmptyOrZero }: AlertContainerProps) => {
  return (
    <Box className={cn("flex flex-col gap-1")}>
      {isInputEmptyOrZero && (
        <FormAlert severity="error" message="Please enter a valid amount!" />
      )}
    </Box>
  );
};

export default AlertContainer;
