import { PropsWithChildren } from "react";
import ReactQueryProvider from "~/providers/ReactQueryProvider";
import ThemeProvider from "~/providers/ThemeProvider";
import { fonts } from "~/assets/fonts";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";
import ModalProvider from "~/providers/ModalProvider";
import { mergeMetadata } from "~/utils/metadata";
import { metaTags } from "~/constants/metadata";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import BlockProvider from "~/providers/BlockProvider";
//Make sure to import the global styles last to ensure they can override other styles.
import "~/sass/globals.scss";

export const metadata = mergeMetadata(metaTags.root);
export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fonts}>
        <NuqsAdapter>
          <ThemeProvider>
            <ReactQueryProvider>
              <div
                style={{
                  paddingRight: "calc(100vw - 100%)",
                }}
              >
                {children}
              </div>
              <ToastContainer />
              <BlockProvider />
              <div id="modal"></div>
              <ModalProvider />
            </ReactQueryProvider>
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
