import { LandingPool, LendingLendingPool } from "@repo/onchain";
import { GetAssetPrice } from "@repo/onchain/src/types/rpc/lending/getAssetPrice";
import { NextRequest, NextResponse } from "next/server";
import { ElementType, ReactNode } from "react";
import { CHART_SCALES } from "~/constants";

export type Middleware = (req: NextRequest) => Promise<NextResponse | void>;
export type Locale = "en" | "se" | "ar";
export type Theme = "light" | "dark" | "system";
export type VoidFunction = () => void;
export type WalletModalStage = "walletsList" | "accountsList" | "switchAccount";

export interface DataAttributes {
  [key: `data-${string}`]: string | number | boolean;
}

export type NotificationType =
  | "information"
  | "warning"
  | "error"
  | "success"
  | "message";

export type NotificationParams = {
  mode: NotificationType;
  message: string;
  title: string;
};

export interface ButtonGroupTab {
  content: ReactNode;
  value: string | number;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  isPortal?: boolean;
  children: ReactNode;
  title?: string;
  hasCloseButton?: boolean;
  closeOnClickOutside?: boolean;
  desktopClassName?: string;
  mobileClassName?: string;
  onBackButtonClick?: VoidFunction;
  footer?: ReactNode;
}
export type ChartScale = (typeof CHART_SCALES)[number];

export type ChartPoint = {
  x: number;
  y: number;
};

export type CursorProps = {
  width: number;
  height: number;
  points: ChartPoint[];
};

export interface ExpandableCardItem {
  title: {
    value: string;
    icon?: ElementType;
    tooltipContent?: string;
    className?: string;
    isLoading?: boolean;
  };
  content: ReactNode;
  isContentLoading?: boolean;
}

export type TransactionStage =
  | "form"
  | "ready"
  | "broadcast"
  | "in_block"
  | "finalized"
  | "wallet"
  | "error";

export interface TransactionFormProps {
  pool?: LandingPool;
  detail?: LendingLendingPool;
  price?: GetAssetPrice["formattedResponse"];
  balance?: {
    formattedBalance?: string;
    realBalance?: bigint;
  };
  isLoading: boolean;
  assetId: string;
}

export type ChartItemIndex = number | string | bigint | null | undefined;

export interface TokenIconProps {
  symbol: string;
  width?: number;
  height?: number;
  className?: string;
}
export type Sort = {
  title: string;
  value: string;
};
export interface Network {
  name: string;
  symbol: string;
}
