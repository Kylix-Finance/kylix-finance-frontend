import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";
const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: "./src/i18n/locales/en.json",
  },
});

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
  async redirects() {
    return [
      // {
      //   source: "/",
      //   destination: "/dashboard",
      //   permanent: false,
      // },
    ];
  },
};

const config = withNextIntl(nextConfig);
export default config;
