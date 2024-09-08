import { Box, Skeleton } from "@mui/material";
import Borrow from "./_parts/Borrow";
import Supply from "./_parts/Supply";
import MarketsTable from "./_parts/MarketsTable";
import { Suspense } from "react";
import { Card } from "~/components";
import Search from "./_parts/MarketsTable/Search";
import { FancyLoader } from "~/components/Loaders";
import SearchUI from "./_parts/MarketsTable/SearchUI";
import MarketsTableUI from "./_parts/MarketsTable/MarketsTable";

export default function Page() {
  return <Box className="flex flex-col gap-4"></Box>;
}
