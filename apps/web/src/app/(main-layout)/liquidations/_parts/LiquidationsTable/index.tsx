"use client";

import { QUERY_SEARCH_MARKETS } from "~/constants";
import { useQueryState } from "nuqs";
import MarketsTableUI from "./LiquidationsTable";

const LiquidationsTable = () => {
  const [searchQuery] = useQueryState(QUERY_SEARCH_MARKETS, {
    clearOnDefault: true,
    defaultValue: "",
  });

  return <MarketsTableUI searchQuery={searchQuery} />;
};

export default LiquidationsTable;
