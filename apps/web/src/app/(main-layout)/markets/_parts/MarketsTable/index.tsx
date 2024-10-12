"use client";

import { QUERY_SEARCH_MARKETS } from "~/constants";
import { useQueryState } from "nuqs";
import MarketsTableUI from "./MarketsTable";

const MarketsTable = () => {
  const [searchQuery] = useQueryState(QUERY_SEARCH_MARKETS, {
    clearOnDefault: true,
    defaultValue: "",
  });

  return <MarketsTableUI searchQuery={searchQuery} />;
};

export default MarketsTable;
