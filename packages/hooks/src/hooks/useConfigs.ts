import { STORAGE_KEY, TransitionName } from "@repo/types";
import { useLocalStorage } from "usehooks-ts";
import { z } from "zod";

const envSchema = z.object({
  APP_LABEL: z.enum(["Platform"]),
  APP_NAME: z.enum(["platform"]),
  FRONTEND_URL: z.string(),
  JWT_SECRET: z.string(),
  LOG_LEVEL: z.enum(["debug", "error", "fatal", "log", "verbose", "warn"]),
  NODE_ENV: z.enum(["development", "production", "stage"]),
  PASSWORD: z.string(),
  REST_ENDPOINT: z.string(),
  RPC_ENDPOINT: z.string(),
});

export type AppName = z.infer<typeof envSchema>["APP_NAME"];

export const ENVS = envSchema.parse({
  APP_LABEL: process.env.NEXT_PUBLIC_APP_LABEL,
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
  JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET,
  LOG_LEVEL: process.env.NEXT_PUBLIC_LOG_LEVEL,
  NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  PASSWORD: process.env.NEXT_PUBLIC_PASSWORD,
  REST_ENDPOINT: process.env.NEXT_PUBLIC_REST_ENDPOINT,
  RPC_ENDPOINT: process.env.NEXT_PUBLIC_RPC_ENDPOINT,
});

export type Environments = z.infer<typeof envSchema>;

export type Protocol = "http" | "https" | "wss";

export type Url = `${Protocol}://${string}`;

export type EnvName = keyof Environments;

export interface UiConfig {
  DIALOG_DEFAULT_TRANSITION: TransitionName;
  MAX_NOTIFICATION: number;
}

export const useConfigs = () => {
  const [configs] = useLocalStorage(STORAGE_KEY.CONFIGS, getInitialConfigs);

  function setLogLevel() {
    return undefined;
  }

  function getApiHTTPUrl() {
    // return configs.API.URL.HTTP[configs.APP.ENV];
  }

  function getApiWSUrl() {
    return null;
  }

  function getAppUrl() {
    return configs.APP.URL!;
  }

  return {
    configs,
    getApiHTTPUrl,
    getApiWSUrl,
    getAppUrl,
    setLogLevel,
  };
};

export const getInitialConfigs = () => {
  const UIConfig: UiConfig = {
    DIALOG_DEFAULT_TRANSITION: "Grow",
    MAX_NOTIFICATION: 10,
  };

  return {
    API: {
      AUTH: {},
      LIMITS: {},
      URL: {
        HTTP: {},
        WS: {},
      },
    },
    APP: {
      APP_LABEL: ENVS.APP_LABEL,
      APP_NAME: ENVS.APP_NAME,
      ENV: ENVS.NODE_ENV,
      LOG_LEVEL: ENVS.LOG_LEVEL,
      URL: ENVS.FRONTEND_URL,
    },
    UI: UIConfig,
  };
};
