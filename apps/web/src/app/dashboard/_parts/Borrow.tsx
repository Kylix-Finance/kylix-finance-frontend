"use client";

import { Box } from "@mui/material";
import { Modal } from "~/components";
import { BorrowTable } from "./BorrowTable";

const Borrow = () => {
  return (
    <Box>
      {/* <Modal
        title="Are you sure?"
        content={<p className="text-[#82908D] font-medium text-xs leading-4 text-center">Viverra rhoncus leo egestas tellus vitae sapien vel quis. Et facilisis neque consectetur.</p>}
        acceptButton={{
          title: "Accept",
          onClick: () => { }
        }}
        cancelButton={{
          title: "Cancel",
          onClick: () => { }
        }}
        maxWidth="xs"
      /> */}
      <BorrowTable />
    </Box>
  );
};

export default Borrow;
