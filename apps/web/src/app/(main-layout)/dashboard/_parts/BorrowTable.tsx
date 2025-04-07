import { Box, Button, Typography } from "@mui/material";
import { Table } from "@repo/ui";
import { Asset } from "~/components";

export const BorrowTable = () => {
  return (
    <Table<TableData[number], "actions">
      components={{
        asset: (item) => (
          <Asset helperText="" label={item.asset} symbol={item.asset} />
        ),
        actions: () => (
          <Box className="flex justify-end gap-1">
            <Button variant="outlined">
              <Typography
                className="text-[##45A996] dark:text-[#56DDB4]"
                fontWeight={600}
                variant="subtitle1"
              >
                Borrow
              </Typography>
            </Button>
          </Box>
        ),
        apy: (item) => (
          <Typography className="dark:text-black-100" variant="subtitle1">
            {item.apy}
          </Typography>
        ),
        status: (item) => (
          <Typography className="dark:text-black-100" variant="subtitle1">
            {item.status}
          </Typography>
        ),
        balance: (item) => (
          <Typography className="dark:text-black-100" variant="subtitle1">
            {item.balance}
          </Typography>
        ),
      }}
      data={tableData}
      defaultSortKey="asset"
      hasPagination={false}
      headers={{
        asset: "Asset",
        apy: "APY",
        balance: "Balance",
        status: "Status",
        actions: "Actions",
      }}
      hiddenTHeads={["actions"]}
      isFetched={true}
      isLoading={false}
      placeholderLength={3}
      rowSpacing="10px"
      tableName="supply"
      tCellClassnames="!p-3 bg dark:bg-black-500"
    />
  );
};

const tableData = [
  { asset: "Dot", apy: "5%", balance: "0.202", status: "0.001" },
  { asset: "KYL", apy: "2%", balance: "210.2", status: "0.21" },
  { asset: "USDT", apy: "1%", balance: "1200", status: "212" },
];

type TableData = typeof tableData;
