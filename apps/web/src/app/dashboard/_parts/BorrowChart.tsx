import { Box, Button, Typography } from "@mui/material";
import { Table } from "~/components";
import { Asset } from "~/components/Asset";

type TKey = "Asset" | "APY" | "Balance" | "Status" | "Actions";

export const BorrowChart = () => {
  return (
    <Table<TKey>
      tCellClassnames={"!p-3"}
      hiddenTHeadsText={["Actions"]}
      rowSpacing="10px"
      hasPagination={false}
      defaultSortKey="Asset"
      tableName="supply"
      data={tableData.map((item) => ({
        Asset: <Asset label={item.Asset} helperText="" />,
        APY: <Typography variant="subtitle1">{item.APY}</Typography>,
        Balance: <Typography variant="subtitle1">{item.Balance}</Typography>,
        Status: <Typography variant="subtitle1">{item.Status}</Typography>,
        Actions: (
          <Box className="flex justify-end gap-1">
            <Button variant="outlined">
              <Typography
                className="!text-primary-500"
                variant="subtitle1"
                fontWeight={600}
                fontFamily="Poppins"
              >
                Borrow
              </Typography>
            </Button>
          </Box>
        ),
      }))}
    />
  );
};

const tableData = [
  { Asset: "Dot", APY: "5%", Balance: "0.202", Status: "0.001" },
  { Asset: "KYL", APY: "2%", Balance: "210.2", Status: "0.21" },
  { Asset: "USDT", APY: "1%", Balance: "1200", Status: "212" },
];
