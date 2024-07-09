import Providers from "~/providers";
import "./globals.css";
import MainLayout from "./_parts/MainLayout";
import { fonts } from "~/assets/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fonts.inter.variable} ${fonts.poppins.variable}`}
    >
      <body className="font-body !bg-[#F4FAF9]">
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
