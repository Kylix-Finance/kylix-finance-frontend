"use client";

import { QUEY_SEARCH_MARKETS } from "~/constants";
import { useQueryState } from "nuqs";
import MarketsTableUI from "./MarketsTable";

const MarketsTable = () => {
  const [searchQuery] = useQueryState(QUEY_SEARCH_MARKETS, {
    clearOnDefault: true,
    defaultValue: "",
  });

  return <MarketsTableUI searchQuery={searchQuery} />;
};

export default MarketsTable;
