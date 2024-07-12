import { Box } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert, Icons } from "~/assets/svgs";
import { NotificationParams } from "~/types";

interface NotificationProps extends NotificationParams {}

const ICONS = {
  information: <Alert.Information />,
  success: <Alert.Success />,
  error: <Alert.Error />,
  warning: <Alert.Warning />,
  message: <Alert.Message />,
};

const BOX_SHADOWS = {
  information: "border border-notification-information",
  success: "border  border-notification-success",
  error: "border border-notification-error",
  warning: "border border-notification-warning",
  message: "border border-notification-information",
};

const TEXT_COLORS = {
  information: "text-notification-information",
  success: "text-notification-success",
  error: "text-notification-error",
  warning: "text-notification-warning",
  message: "text-[#383E42]",
};

const Container: React.FC<NotificationProps> = ({ type, message, title }) => {
  return (
    <Box
      className={`flex flex-col items-start gap-2 p-3 border rounded-lg bg-white ${BOX_SHADOWS[type]}`}
    >
      <Box className="flex items-center justify-between w-full">
        <Box className="flex gap-1.5 font-bold text-sm leading-5">
          {ICONS[type]}
          <p className={`capitalize ${TEXT_COLORS[type]}`}>{title}</p>
        </Box>
        <Icons.XIcon
          className="text-gray-500 cursor-pointer"
          onClick={() => toast.dismiss()}
        />
      </Box>
      <p className="text-[#82908D] font-bold text-xs leading-4">{message}</p>
    </Box>
  );
};

export default Container;
