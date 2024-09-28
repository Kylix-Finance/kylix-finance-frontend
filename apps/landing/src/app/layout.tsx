import { fonts } from "~/assets/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fonts.migha.variable} ${fonts.poppins.variable}`}
    >
      <body className="font-body bg-secondary-500">{children}</body>
    </html>
  );
}
