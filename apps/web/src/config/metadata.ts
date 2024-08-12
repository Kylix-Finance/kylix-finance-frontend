import type { Metadata } from "next";
import { merge } from "lodash-es";

const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL!),
  openGraph: {
    url: "./",
    siteName: "Kylix",
    images: {
      url: "/cover.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    images: "/cover.png",
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

  const sharedMetadata = {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: { title, description },
  };

  const mergedMetadata = merge({}, baseMetadata, metadata, sharedMetadata);
  return mergedMetadata;
};
