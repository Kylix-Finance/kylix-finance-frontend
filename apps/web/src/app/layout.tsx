import Providers from "~/providers";
import "./globals.css";
import Parts from "./_parts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Parts>{children}</Parts>
        </Providers>
      </body>
    </html>
  );
}
