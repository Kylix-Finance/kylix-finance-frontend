"use client";
import { TabContext, TabPanel } from "@mui/lab";
import { Tabs } from "@mui/material";
import { ReactNode, useState } from "react";
import Tab from "./Tab";

export type TabType = {
  label: string;
  value: string;
  content: ReactNode;
  disable?: boolean;
};

interface Props {
  tabs: TabType[];
}
type TabValues = Props["tabs"][number]["value"];

function TabsManager({ tabs }: Props) {
  const [value, setValue] = useState<TabValues>(tabs[0]!.value);

  const handleChange = (_: React.SyntheticEvent, newValue: TabValues) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        variant="fullWidth"
        TabIndicatorProps={{
          sx: {
            display: "none",
          },
        }}
        centered
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
            disabled={tab.disable}
          />
        ))}
      </Tabs>
      {tabs.map((tab) => (
        <TabPanel key={tab.value} value={tab.value} className="!m-0 !p-1">
          {tab.content}
        </TabPanel>
      ))}
    </TabContext>
  );
}

export default TabsManager;
