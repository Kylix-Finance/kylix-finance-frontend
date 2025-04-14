import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  icon: ReactNode;
  text: string;
}

const Item = ({ isOpen, icon, text }: Props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={[
          {
            minHeight: 48,
            px: 2.5,
          },
          isOpen
            ? {
                justifyContent: "initial",
              }
            : {
                justifyContent: "center",
              },
        ]}
      >
        <ListItemIcon
          sx={[
            {
              minWidth: 0,
              justifyContent: "center",
            },
            isOpen
              ? {
                  mr: 3,
                }
              : {
                  mr: "auto",
                },
          ]}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={[
            isOpen
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                },
          ]}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default Item;
