import { Box, TextField } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Icons } from "~/assets/svgs";
import { QUEY_SEARCH_MARKETS } from "~/constants";

export const RightComponent = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (searchQuery: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set(QUEY_SEARCH_MARKETS, searchQuery);
    } else {
      params.delete(QUEY_SEARCH_MARKETS);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <TextField
      onChange={(e) => handleSearch(e.target.value)}
      style={{
        fontSize: "10px",
        borderRadius: "4px",
        border: "#C7C7C7 1px solid",
      }}
      placeholder="Search by market"
      size="small"
      defaultValue={searchParams.get(QUEY_SEARCH_MARKETS)?.toString()}
      inputProps={{
        style: {
          fontWeight: "normal",
        },
      }}
      InputProps={{
        style: {
          backgroundImage: "none",
          color: "#C7C7C7",
          fontSize: "14px",
        },
        startAdornment: (
          <Box className="pr-2">
            <Icons.Search />
          </Box>
        ),
      }}
    />
  );
};
