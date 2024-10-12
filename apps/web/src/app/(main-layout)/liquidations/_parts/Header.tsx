import { Box, Button } from "@mui/material";
import { Suspense } from "react";
import SearchUI from "./LiquidationsTable/SearchUI";
import Search from "./LiquidationsTable/Search";

const buttonStyle = {
  padding: "12px 20px",
  textWrap: "nowrap",
  borderColor: "#1A433B1A",
  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center",
  lineHeightStep: "16px",
  color: "#1c443c",
};

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="10px"
      width="100%"
    >
      <Suspense fallback={<SearchUI />}>
        <Search />
      </Suspense>
      <Box display="flex" alignItems="center" gap="10px">
        <Button
          variant="outlined"
          size="large"
          sx={buttonStyle}
          className="load-more-ripple"
        >
          Filter By Collateral
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={buttonStyle}
          className="load-more-ripple"
        >
          Filter by Bid
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
