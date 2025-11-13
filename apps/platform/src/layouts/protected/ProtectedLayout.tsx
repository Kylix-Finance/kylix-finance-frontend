"use client";
import { useAccountsStore } from "@repo/shared";
import { ReactNode } from "react";
import useIsMounted from "~/hooks/useIsMounted";
import AccessDenied from "./AccessDenied";
interface Props {
  children: ReactNode;
}

export const ProtectedLayout = ({ children }: Props) => {
  const { account } = useAccountsStore();
  const isMounted = useIsMounted();
  if (!isMounted) return null;
  return <>{account ? children : <AccessDenied />}</>;
};
