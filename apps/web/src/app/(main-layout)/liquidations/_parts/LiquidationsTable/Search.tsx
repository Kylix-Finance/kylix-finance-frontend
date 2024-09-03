"use client";
import { useQueryState } from "nuqs";
import { QUERY_SEARCH_MARKETS } from "~/constants";
import SearchUI from "./SearchUI";

const Search = () => {
  const [searchQuery, setSearchQuery] = useQueryState(QUERY_SEARCH_MARKETS, {
    clearOnDefault: true,
    defaultValue: "",
  });

  return <SearchUI value={searchQuery} onChange={setSearchQuery} />;
};

export default Search;
