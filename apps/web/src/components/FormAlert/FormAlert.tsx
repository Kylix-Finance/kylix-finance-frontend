import { Alert, AlertProps } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";

interface Props extends AlertProps {
  severity: "success" | "info" | "warning" | "error";
  message: string;
}

const FormAlert = (
  { severity, message, ...props }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <Alert
      {...props}
      ref={ref}
      severity={severity}
      sx={{
        paddingBlock: 0,
        paddingInline: 1,
        "& .MuiAlert-icon": {
          marginRight: 1,
        },
        ...props.style,
      }}
    >
      {message}
    </Alert>
  );
};

export default forwardRef(FormAlert);
