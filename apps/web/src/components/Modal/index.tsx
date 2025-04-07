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
  Box,
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
      fullWidth
      fullScreen={isFullScreenOnSmallScreen}
      open={isOpen}
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
          className="!p-0 !m-0"
          display="flex"
          flexDirection="column"
        >
          <Box className="flex justify-end">
            <IconButton
              className="justify-end"
              size="small"
              onClick={handleClose}
            >
              <Icons.XIcon />
            </IconButton>
          </Box>
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
              className="!w-full !rounded-md !border !border-primary-500/15 !text-[#4C5452] !capitalize"
              size="small"
              variant="outlined"
              onClick={cancelButton.onClick}
            >
              {cancelButton.title}
            </Button>
          )}
          {acceptButton && (
            <Button
              className="!w-full !rounded-md !border !border-primary-500/15 !text-white !capitalize !font-semibold"
              size="small"
              variant="contained"
              onClick={acceptButton.onClick}
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
