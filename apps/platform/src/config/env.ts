type VercelEnv = 'production' | 'preview' | 'development' | undefined;
const VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV as VercelEnv;

const IS_PRODUCTION = VERCEL_ENV === 'production';
const APP_ACCESS_PASSWORD = process.env.APP_ACCESS_PASSWORD;
const REST_API_ENDPOINT = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;
const RPC_ENDPOINT = process.env.NEXT_PUBLIC_RPC_ENDPOINT;
const JWT_SECRET = process.env.JWT_SECRET
export const ENV = {
    IS_PRODUCTION,
    APP_ACCESS_PASSWORD,
    REST_API_ENDPOINT,
    RPC_ENDPOINT,
    JWT_SECRET
}