import { ApiPromise } from "@polkadot/api";

export const isApiExists = (api?: ApiPromise): api is ApiPromise => {
    if (!api) {
        throw new Error(
            "The API could not be accessed. Please try refreshing the page."
        );
    }
    return true
}