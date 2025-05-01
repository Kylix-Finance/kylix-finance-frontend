import { toast, ToastOptions } from "react-toastify";
import Container from "../content/Content";
import { NotificationParams } from "~/types";
import styles from "./Notify.module.scss";

const notify = (
  { mode, message, title }: NotificationParams,
  options?: ToastOptions
) => {
  toast(
    (props) => (
      <Container mode={mode} message={message} title={title} {...props} />
    ),
    {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      progressClassName: styles[mode],
      closeButton: false,
      className: styles.container,
      ...options,
    }
  );
};

export default notify;
