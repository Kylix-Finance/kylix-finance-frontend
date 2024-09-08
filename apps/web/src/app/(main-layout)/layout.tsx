import { WalletModal } from "@repo/wallet-modal";
import "../globals.css";
import MainLayout from "./_parts/MainLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      {children} <WalletModal center />
    </MainLayout>
  );
}
