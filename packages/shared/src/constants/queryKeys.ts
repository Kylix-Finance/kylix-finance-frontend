const baseKey = process.env.NEXT_PUBLIC_REACT_QUERY_BASE_KEY;

export const queryKeys = {
  accounts: [baseKey, "accounts"],
  activeAccount: [baseKey, "active-account"],
  connectionRequest: [baseKey, "connection-request"],
  config: [baseKey, "config"],
  status: [baseKey, "status"],
  connector: [baseKey, "connector"],
};
