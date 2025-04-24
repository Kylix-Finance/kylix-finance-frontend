import { NextRequest, NextResponse } from "next/server";
import { ReactNode } from "react";
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
  footer?: ReactNode
}
export type ChartScale = (typeof CHART_SCALES)[number];
