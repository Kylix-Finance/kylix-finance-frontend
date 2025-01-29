import { WalletModal } from "@repo/wallet-modal";
import "../globals.css";
import MainLayout from "./_parts/MainLayout";
import { BackGround, ThemeMode } from "@repo/ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      <WalletModal center />

      <BackGround imgStyle={{ filter: "blur(10px)" }} />

      {children}
    </MainLayout>
  );
}
