import type { Metadata } from "next";

interface Props {
  title: string;
  description?: string;
}

export const metadataGenerator = ({ title, description }: Props): Metadata => {
  return {
    title,
    description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || ""),
    openGraph: {
      title,
      description,
      url: process.env.NEXT_PUBLIC_FRONTEND_URL || "",
      siteName: title,
      images: {
        url: "/cover.png",
        width: 400,
        height: 400,
        type: "image/jpg",
      },
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/cover.jpg"],
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
};
