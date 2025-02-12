"use client";

import { QUERY_SEARCH_MARKETS } from "~/constants";
import { useQueryState } from "nuqs";
import LiquidationsTableUI from "./LiquidationsTable";

const LiquidationsTable = () => {
  const [searchQuery] = useQueryState(QUERY_SEARCH_MARKETS, {
    clearOnDefault: true,
    defaultValue: "",
  });

  return <LiquidationsTableUI searchQuery={searchQuery} />;
};

export default LiquidationsTable;
