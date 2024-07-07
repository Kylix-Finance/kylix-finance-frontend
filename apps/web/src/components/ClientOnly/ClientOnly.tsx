import { useIsMounted } from "~/hooks/useIsMounted";

type ClientOnly = {
  children: React.ReactNode;
};

const ClientOnly = ({ children }: ClientOnly) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return children;
};

export default ClientOnly;
