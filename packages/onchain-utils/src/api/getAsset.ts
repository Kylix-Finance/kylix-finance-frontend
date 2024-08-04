import { ApiPromise } from "@polkadot/api";

type GetAsset = {
  api: ApiPromise;
  id: number;
};

export const getAsset = async ({ api, id }: GetAsset) => {
  const assetsInfo = await api?.query?.assets?.asset?.(id);
  return assetsInfo?.toJSON();
};
