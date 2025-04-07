"use client";
import { TabContext, TabPanel } from "@mui/lab";
import { Tabs } from "@mui/material";
import { ReactNode } from "react";
import Tab from "./Tab";
import { parseAsString, useQueryState } from "nuqs";
import { cn } from "~/utils";

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
  const [value, setValue] = useQueryState(
    "tab",
    parseAsString.withDefault(tabs[0]?.value || "")
  );

  const handleChange = (_: React.SyntheticEvent, newValue: TabValues) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Tabs
        centered
        TabIndicatorProps={{
          sx: {
            display: "none",
          },
        }}
        textColor="primary"
        value={value}
        variant="fullWidth"
        onChange={handleChange}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            className={cn(
              "text-[#96ABA7] dark:text-[#707F7A] text-[14px] font-[500] leading-4",
              value === tab.value &&
                "text-[#FFFFFF] dark:text-[#0D0D0D] bg-[#A5CAC3] dark:bg-[#A5CAC3] font-[700]"
            )}
            disabled={tab.disable}
            label={tab.label}
            value={tab.value}
          />
        ))}
      </Tabs>
      {tabs.map((tab) => (
        <TabPanel key={tab.value} className="!m-0 !p-1" value={tab.value}>
          {tab.content}
        </TabPanel>
      ))}
    </TabContext>
  );
}

export default TabsManager;
