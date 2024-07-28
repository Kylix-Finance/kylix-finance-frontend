import { useModalStore } from "../stores";

const useSwitchAccount = () => {
  const { setStage, setIsOpen: setStatus } = useModalStore();
  const switchAccount = () => {
    setStage("switchAccount");
    setTimeout(() => {
      setStatus(true);
    }, 200);
  };

  return switchAccount;
};

export { useSwitchAccount };
