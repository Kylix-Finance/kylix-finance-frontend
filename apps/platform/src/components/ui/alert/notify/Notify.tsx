import { toast, ToastOptions } from "react-toastify";
import Container from "../content/Content";
import { NotificationParams } from "~/types";
import styles from "./Notify.module.scss";

const notify = (
  { mode, message, title }: NotificationParams,
  options?: ToastOptions
) => {
  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: false,
    className: styles.container,
    ...options,
  };

  toast(
    (props) => (
      <Container mode={mode} message={message} title={title} {...props} />
    ),
    toastOptions
  );
};

export default notify;
