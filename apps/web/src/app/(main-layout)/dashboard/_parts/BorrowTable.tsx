import { Box, Button, Typography } from "@mui/material";
import { Table } from "@repo/ui";
import { Asset } from "~/components";

export const BorrowTable = () => {
  return (
    <Table<TableData[number], "actions">
      placeholderLength={3}
      headers={{
        asset: "Asset",
        apy: "APY",
        balance: "Balance",
        status: "Status",
        actions: "Actions",
      }}
      hiddenTHeads={["actions"]}
      tCellClassnames={"!p-3"}
      rowSpacing="10px"
      hasPagination={false}
      defaultSortKey="asset"
      tableName="supply"
      components={{
        asset: (item) => <Asset label={item.asset} helperText="" />,
        actions: () => (
          <Box className="flex justify-end gap-1">
            <Button variant="outlined">
              <Typography
                className="text-[##45A996] dark:text-[#56DDB4]"
                variant="subtitle1"
                fontWeight={600}
              >
                Borrow
              </Typography>
            </Button>
          </Box>
        ),
        apy: (item) => (
          <Typography variant="subtitle1" className="dark:text-black-100">
            {item.apy}
          </Typography>
        ),
        status: (item) => (
          <Typography variant="subtitle1" className="dark:text-black-100">
            {item.status}
          </Typography>
        ),
        balance: (item) => (
          <Typography variant="subtitle1" className="dark:text-black-100">
            {item.balance}
          </Typography>
        ),
      }}
      isFetched={true}
      isLoading={false}
      data={tableData}
    />
  );
};

const tableData = [
  { asset: "Dot", apy: "5%", balance: "0.202", status: "0.001" },
  { asset: "KYL", apy: "2%", balance: "210.2", status: "0.21" },
  { asset: "USDT", apy: "1%", balance: "1200", status: "212" },
];

type TableData = typeof tableData;
