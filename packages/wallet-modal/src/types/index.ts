type Unsubcall = () => void;

interface InjectedAccount {
  address: string;
  genesisHash?: string | null;
  name?: string;
}

interface InjectedAccounts {
  get: () => Promise<InjectedAccount[]>;
  subscribe: (
    cb: (accounts: InjectedAccount[]) => void | Promise<void>
  ) => Unsubcall;
}

interface MetadataDefBase {
  chain: string;
  genesisHash: string;
  icon: string;
  ss58Format: number;
}

interface MetadataDef extends MetadataDefBase {
  color?: string;
  specVersion: number;
  tokenDecimals: number;
  tokenSymbol: string;
  types: Record<string, Record<string, string> | string>;
  metaCalls?: string;
}

interface InjectedMetadataKnown {
  genesisHash: string;
  specVersion: number;
}

interface InjectedMetadata {
  get: () => Promise<InjectedMetadataKnown[]>;
  provide: (definition: MetadataDef) => Promise<boolean>;
}

interface ProviderMeta {
  network: string;
  node: "full" | "light";
  source: string;
  transport: string;
}

type ProviderList = Record<string, ProviderMeta>;

interface InjectedProvider {
  send: (method: string, params: any[]) => Promise<any>;
  subscribe: (
    type: string,
    method: string,
    params: any[],
    callback: (error: Error | null, result: any) => void
  ) => Promise<number>;
  unsubscribe: (
    type: string,
    method: string,
    subscriptionId: number
  ) => Promise<boolean>;
  listProviders: () => Promise<ProviderList>;
  startProvider: (key: string) => Promise<ProviderMeta>;
}

interface InjectedSigner {
  signPayload: (payload: any) => Promise<any>;
  signRaw: (raw: any) => Promise<any>;
}

interface Injected {
  accounts: InjectedAccounts;
  metadata?: InjectedMetadata;
  provider?: InjectedProvider;
  signer: InjectedSigner;
}

export interface InjectedWindowProvider {
  enable: (origin: string) => Promise<Injected>;
  version: string;
}
