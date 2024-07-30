export type ConnectionStatus =
  | "connected"
  | "disconnected"
  | "error"
  | "decorated"
  | "ready";

export type ProviderInterfaceCallback = (
  error: Error | null,
  result: any
) => void;
export interface SubscriptionHandler {
  callback: ProviderInterfaceCallback;
  type: string;
}
