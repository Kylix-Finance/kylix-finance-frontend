import { ApiPromise } from "@polkadot/api";
import { u32 } from "@polkadot/types-codec";
interface ToU32FormatProps {
  api: ApiPromise;
  value: number;
}
export function toU32Format({ api, value }: ToU32FormatProps): u32 | null {
  try {
    if (value < 0 || value > 4294967295) {
      throw new Error("Number out of range for u32.");
    }
    return new u32(api.registry as any, value);
  } catch (error) {
    console.error("Error converting to u32:", error);
    return null;
  }
}
