import type { NextConfig } from "next";
import { join } from "path";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s2.coinmarketcap.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    includePaths: [join(__dirname, "src")],
    prependData: "@use 'src/sass' as *;",
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  transpilePackages: [],
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
      },
      {
        test: /\/index.ts$/,
        sideEffects: false,
      }
    );
    return config;
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/dashboard",
        },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
