import { EmptyState } from "~/components/empty-state";
import Ghost from "~/assets/icons/ghost.svg";
import { ConnectButton } from "~/components/modal/wallet-modal";

const AccessDenied = () => {
  return (
    <EmptyState
      hasBorder
      title="Please, connect your wallet"
      description="We couldn't find your wallet. Connect to access your dApp data and functions."
      action={<ConnectButton content="Connect Wallet" />}
      icon={Ghost}
    />
  );
};

export default AccessDenied;
