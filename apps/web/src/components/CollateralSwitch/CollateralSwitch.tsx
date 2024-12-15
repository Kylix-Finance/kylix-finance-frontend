"use client";
import { Skeleton } from "@repo/ui";
import { styled, Switch } from "@mui/material";
import { useEnableAsCollateral } from "~/hooks/chain/useEnableAsCollateral";
import { useDisableAsCollateral } from "~/hooks/chain/useDisableAsCollateral";
import { notify } from "~/components";
import useLocalStorage from "~/hooks/useLocalStorage";
import { ThemeMode } from "~/hooks/usePreferences";

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
      <CustomSwitch
        checked={isCollateral}
        onChange={() => handleCollateralClick(isCollateral, id)}
        disabled={isEnableAsCollateral || isDisableAsCollateral}
      />
    </Skeleton>
  );
};

const CustomSwitch = styled(Switch)(({ theme }) => {
  const { value: mode } = useLocalStorage<ThemeMode>({
    key: "theme-mode",
  });

  return {
    width: 25,
    height: 16,
    padding: 0,

    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(7px)",
        color: theme.palette.background.default,
        "& + .MuiSwitch-track": {
          backgroundColor: "#56DDB4",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#56DDB4",
        border: `6px solid ${theme.palette.background.default}`,
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.secondary.dark,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 14,
      height: 14,
      marginTop: -1,
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      backgroundColor: mode === "light" ? "#E9E9EA" : "#84A8A133",
      opacity: 1,
    },
  };
});

export default CollateralSwitch;
