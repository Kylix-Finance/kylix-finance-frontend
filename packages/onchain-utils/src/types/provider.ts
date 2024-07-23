export type ConnectionStatus =
  | "connected"
  | "disconnected"
  | "error"
  | "decorated"
  | "ready";

export type Provider = {
  url: string;
  name: string;
};
