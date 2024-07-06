import { Box, Grid } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import Sidebar from "./sidebar";

const Parts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid container>
      <Sidebar />
      <Grid item xs={12} md={9.6} className="!mx-6 !mt-12">
        {children}
      </Grid>
    </Grid>
  );
};
export default Parts;
