"use client";
import { Skeleton } from "@repo/ui";
import { Switch } from "@mui/material";
import { useEnableAsCollateral } from "~/hooks/chain/useEnableAsCollateral";
import { useDisableAsCollateral } from "~/hooks/chain/useDisableAsCollateral";
import { notify } from "~/components";

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
              message: message,
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
              message: message,
            });
          },
        }
      );
    }
  };

  return (
    <Skeleton
      isLoading={isEnableAsCollateral || isDisableAsCollateral}
      className="w-[25px] h-[15px]"
    >
      <Switch
        className="pl-4"
        checked={isCollateral}
        onChange={() => handleCollateralClick(isCollateral, id)}
        disabled={isEnableAsCollateral || isDisableAsCollateral}
      />
    </Skeleton>
  );
};

export default CollateralSwitch;
