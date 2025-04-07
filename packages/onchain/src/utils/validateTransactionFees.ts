import { SubmittableExtrinsic } from "@polkadot/api-base/types";
import { ISubmittableResult } from "@polkadot/types/types";

export const validateEstimatedGas = async (
    extrinsic: SubmittableExtrinsic<"promise", ISubmittableResult>,
    account: string,
    balance: bigint
): Promise<bigint> => {

    const estimatedGas = (
        await extrinsic.paymentInfo(account)
    ).partialFee.toBigInt();

    if (!estimatedGas) {
        throw new Error("Unable to estimate gas fees.");
    }

    if (balance < estimatedGas) {
        throw new Error(
            "You do not have enough balance to cover the transaction fees."
        );
    }

    return estimatedGas;
}
