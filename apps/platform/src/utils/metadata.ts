import type { Metadata } from "next";
import merge from "lodash/merge";
const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_PLATFORM_URL!),
  openGraph: {
    type: "website",
    url: "./",
    siteName: "Kylix",
    images: "WILL BE ADD",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KylixFinance",
    images: "WILL BE ADD",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export const mergeMetadata = (metadata: Metadata = {}): Metadata => {
  const { title, description } = metadata;
  return merge({}, baseMetadata, metadata, {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: { title, description },
  });
};
