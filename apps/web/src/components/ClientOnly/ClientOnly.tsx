import { PropsWithChildren } from "react";
import { useIsMounted } from "~/hooks/useIsMounted";

const ClientOnly = ({ children }: PropsWithChildren) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return children;
};

export default ClientOnly;
