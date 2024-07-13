import { QueryClient } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
  queryClient: QueryClient;
}

const Providers = ({ children }: Props) => {
  return <>{children}</>;
};
export default Providers;
