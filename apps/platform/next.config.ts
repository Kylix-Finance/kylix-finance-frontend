import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
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
