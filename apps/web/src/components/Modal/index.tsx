"use client";

import React, { ReactNode, useState } from "react";
import {
  IconButton,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import {
  DialogActionsProps,
  DialogContentProps,
  DialogProps,
  DialogTitleProps,
  ButtonProps,
} from "@mui/material";
import { Icons } from "~/assets/svgs";

type ActionButtonProps = {
  title: string;
  onClick: ButtonProps["onClick"];
};

interface ModalProps extends Omit<DialogProps, "title" | "content" | "open"> {
  title?: string;
  content: ReactNode;
  acceptButton?: ActionButtonProps;
  cancelButton?: ActionButtonProps;
  dialogStyle?: React.CSSProperties;
  isClosable?: boolean;
  onAfterClose?: () => void;
  onClose?: () => void;
  transitionDuration?: number;
  titleProps?: DialogTitleProps;
  contentProps?: DialogContentProps;
  actionProps?: DialogActionsProps;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  acceptButton,
  cancelButton,
  dialogStyle,
  isClosable = true,
  onAfterClose,
  onClose,
  transitionDuration = 500,
  titleProps,
  contentProps,
  actionProps,
  ...rest
}) => {
  const theme = useTheme();
  const isFullScreenOnSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
    onAfterClose?.();
  };

  return (
    <Dialog
      open={isOpen}
      fullWidth
      fullScreen={isFullScreenOnSmallScreen}
      onClose={isClosable ? handleClose : undefined}
      {...rest}
      PaperProps={{
        style: {
          height: isFullScreenOnSmallScreen ? "100vh" : dialogStyle?.height,
          ...dialogStyle,
        },
        className: "!rounded-lg !rounded-lg !p-2 !gap-4",
      }}
      transitionDuration={transitionDuration}
    >
      {title && (
        <DialogTitle
          {...titleProps}
          align="center"
          display="flex"
          flexDirection="column"
          className="!p-0 !m-0"
        >
          <div className="flex justify-end">
            <IconButton
              size="small"
              onClick={handleClose}
              className="justify-end"
            >
              <Icons.XIcon />
            </IconButton>
          </div>
          <p className="font-bold text-sm leading-5 text-[#383E42]">{title}</p>
        </DialogTitle>
      )}
      <DialogContent
        {...contentProps}
        className="flex justify-center items-center !p-0"
      >
        {content}
      </DialogContent>
      {(acceptButton || cancelButton) && (
        <DialogActions {...actionProps} className="!w-full  !p-0">
          {cancelButton && (
            <Button
              onClick={cancelButton.onClick}
              variant="outlined"
              size="small"
              className="!w-full !rounded-md !border !border-primary-500/15 !text-[#4C5452] !capitalize"
            >
              {cancelButton.title}
            </Button>
          )}
          {acceptButton && (
            <Button
              onClick={acceptButton.onClick}
              variant="contained"
              size="small"
              className="!w-full !rounded-md !border !border-primary-500/15 !text-white !capitalize !font-semibold"
            >
              {acceptButton.title}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default Modal;
