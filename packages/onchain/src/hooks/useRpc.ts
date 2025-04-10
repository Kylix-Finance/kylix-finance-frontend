import { useProvider } from "./useProvider"
type Mammad = "fml" | "fu"
type X = [Mammad, string]

export const useRpc = (module: "lending", method: "getAssetPrice") => {

    const { data: provider } = useProvider()
    const execute = async (...args: X) => {
       return provider.api.rpc[module][method] as floan 
    }
    return {
        execute
    }
}