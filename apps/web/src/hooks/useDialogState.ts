import { GlobalStore, defaultDialogProps, useGlobalStore } from "~/store";

export const useDialogState = <T extends GlobalStore.DialogName>(
  dialogName: T
) => {
  const globalStore = useGlobalStore();

  const open: GlobalStore.DialogTemplateData["open"] = (props) => {
    globalStore.setOpenDialog(dialogName, props);
  };

  const close = () => {
    globalStore.setDialogClose();
  };

  let dialogData: GlobalStore.DialogTemplateData = {
    close,
    isOpen: false,
    name: dialogName,
    open,
    props: {
      ...defaultDialogProps,
      shouldKeepOpenCurrentDialog: false,
    },
  };

  const makeDialogOpen = (): GlobalStore.DialogTemplateData => {
    const currentDialogState = reversedDialogStates.at(indexOfCurrentDialog);

    return {
      ...dialogData,
      ...currentDialogState,
      isOpen: true,
      props: {
        ...dialogData.props,
        ...currentDialogState?.props,
      },
    };
  };

  const reversedDialogStates = [...globalStore.dialogStates].reverse();

  const indexOfCurrentDialog = reversedDialogStates.findIndex(
    (item) => item.name === dialogName
  );

  const indexBeforeCurrentDialog = indexOfCurrentDialog - 1;

  const dialogStateBeforeCurrent =
    reversedDialogStates[indexBeforeCurrentDialog];

  if (
    dialogStateBeforeCurrent?.props.shouldKeepOpenCurrentDialog ||
    indexOfCurrentDialog === 0
  ) {
    dialogData = makeDialogOpen();
  }

  return dialogData;
};
