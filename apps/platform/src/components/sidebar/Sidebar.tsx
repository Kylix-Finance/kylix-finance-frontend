"use client";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import Item from "./Item";
import { useState } from "react";
const drawerWidth = 240;
import { KylixText } from "~/assets/svgs";
import { Link } from "~/i18n/navigation";
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  paddingInline: theme.spacing("4"),
  paddingBlock: theme.spacing("6"),
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing("10")} + 1px)`,
  paddingInline: theme.spacing("4"),
  paddingBlock: theme.spacing("6"),
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing("12")} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  border: `1px solid  ${theme.palette.grey[700]}`,
  "& .MuiDrawer-paper": {
    backgroundColor: "#1E1E1E80",
    backdropFilter: "blur(15px)",
    ...(open ? openedMixin(theme) : closedMixin(theme)),
  },
}));

const MiniDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerClose = () => setOpen((prev) => !prev);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Link href="/" className="w-24 h-16">
          <KylixText className="w-full h-full" />
        </Link>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <Item isOpen={open} icon={<MailIcon />} text={text} key={index} />
        ))}
      </List>
    </Drawer>
  );
};
export default MiniDrawer;
