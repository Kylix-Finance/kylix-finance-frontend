"use client";
import { Skeleton } from "@repo/ui";
import { useEnableAsCollateral } from "~/hooks/chain/useEnableAsCollateral";
import { useDisableAsCollateral } from "~/hooks/chain/useDisableAsCollateral";
import { notify } from "~/components";
import { Switch } from "../Switch";

interface Props {
  id: string | number;
  isCollateral: boolean;
}

const CollateralSwitch = ({ id, isCollateral }: Props) => {
  const { mutate: enableAsCollateralMutate, isPending: isEnableAsCollateral } =
    useEnableAsCollateral();

  const {
    mutate: disableAsCollateralMutate,
    isPending: isDisableAsCollateral,
  } = useDisableAsCollateral();

  const handleCollateralClick = (state: boolean, assetId: string | number) => {
    if (state) {
      disableAsCollateralMutate(
        {
          assetId,
        },
        {
          onSuccess: ({ blockNumber }) => {
            notify({
              type: "success",
              title: "Success",
              message: "Transaction completed on block " + blockNumber,
            });
          },
          onError: ({ message, name }) => {
            notify({
              type: "error",
              title: name,
              message,
            });
          },
        }
      );
    } else {
      enableAsCollateralMutate(
        {
          assetId,
        },
        {
          onSuccess: ({ blockNumber }) => {
            notify({
              type: "success",
              title: "Success",
              message: "Transaction completed on block " + blockNumber,
            });
          },
          onError: ({ message, name }) => {
            notify({
              type: "error",
              title: name,
              message,
            });
          },
        }
      );
    }
  };

  return (
    <Skeleton
      className="w-[25px] h-[15px]"
      isLoading={isEnableAsCollateral || isDisableAsCollateral}
    >
      <Switch
        checked={isCollateral}
        disabled={isEnableAsCollateral || isDisableAsCollateral}
        onChange={() => handleCollateralClick(isCollateral, id)}
      />
    </Skeleton>
  );
};

export default CollateralSwitch;
