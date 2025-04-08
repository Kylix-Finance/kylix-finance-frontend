import { WalletModal } from "@repo/wallet-modal";
import MainLayout from "./_parts/MainLayout";
import { BackGround } from "@repo/ui";

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
