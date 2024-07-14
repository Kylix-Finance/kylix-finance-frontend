import { Balance } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { Table } from "~/components";

type TKey = "Asset" | "APY" | "Balance" | "Status" | "Actions";

// CLEANME: Duplicate component
const Asset = ({
  helperText: helperText,
  label,
}: {
  helperText: string;
  label: string;
}) => {
  return (
    <Box className="flex flex-row items-center justify-start gap-[8px]">
      <Box>
        <Image
          draggable="false"
          src="/kylix-chip.svg"
          alt="Asset Icon"
          width={24}
          height={24}
        />
      </Box>
      <Box className="flex flex-col">
        <Typography variant="md" fontWeight={"bold"}>
          {label}
        </Typography>
        {helperText && <Typography variant="xs">{helperText}</Typography>}
      </Box>
    </Box>
  );
};

export const SupplyChart = () => {
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
        APY: <Typography variant="md">{item.APY}</Typography>,
        Balance: <Typography variant="md">{item.Balance}</Typography>,
        Status: <Typography variant="md">{item.Status}</Typography>,
        Actions: (
          <Box>
            <Button style={{ padding: "4px 12px" }} variant="outlined">
              <Typography
                className="!text-primary-500"
                variant="md"
                fontWeight={600}
                fontFamily={"Poppins"}
              >
                Supply
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
