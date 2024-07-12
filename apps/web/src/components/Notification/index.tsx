import { toast, ToastOptions } from "react-toastify";
import Container from "./Container";
import { NotificationParams } from "~/types";

export const notify = (
  { type, message, title }: NotificationParams,
  options?: Omit<
    ToastOptions,
    "className" | "bodyClassName" | "progressStyle" | "progressClassName"
  >
) => {
  const progressColor: Record<NotificationParams["type"], string> = {
    information: "#50A0E1",
    success: "#45a996",
    error: "#F07979",
    warning: "#FAAA56",
    message: "#50A0E1",
  };
  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    closeButton: false,
    progress: undefined,
    className:
      "!bg-transparent !p-0 !m-0 !border-none !outline-none !rounded-lg",
    bodyClassName:
      "!bg-transparent !p-0 !m-0 !border-none !outline-none !rounded-[inherit]",
    progressStyle: { background: progressColor[type], borderRadius: "8px" },
    ...options,
  };

  toast(
    <Container type={type} message={message} title={title} />,
    toastOptions
  );
};
