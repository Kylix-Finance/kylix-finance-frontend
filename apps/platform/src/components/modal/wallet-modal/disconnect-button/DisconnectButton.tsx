import { useAccountsStore } from "@repo/shared";
import { Button } from "~/components/ui/button";

const DisconnectButton = () => {
  const { disconnect } = useAccountsStore();

  return (
    <Button variant="primary" onClick={() => disconnect(null)} fullWidth>
      Disconnect
    </Button>
  );
};

export default DisconnectButton;
