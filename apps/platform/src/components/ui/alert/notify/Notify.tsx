import { toast, ToastOptions } from "react-toastify";
import Container from "../content/Content";
import { NotificationParams } from "~/types";

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
      progressClassName: `toastify_${mode}`,
      closeButton: false,
      className: "toastify_container",
      ...options,
    }
  );
};

export default notify;
