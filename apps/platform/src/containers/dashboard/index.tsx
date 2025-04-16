"use client";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

const Dashboard = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Tabs
        onChange={(_e, v) => setValue(v)}
        value={value}
        aria-label="basic tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </div>
  );
};
export default Dashboard;
