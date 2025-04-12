import { Box } from "@mui/material";

import { Alert } from "@repo/ui/Alert";

export default function Page() {
  return (
    <Box className="flex flex-col gap-[60px]">
      hello devs!
      <Alert
        severity="info"
        title="Info"
        description="lorem ipsum dolor sit yes"
      />
      <Alert
        severity="success"
        title="Success"
        description="lorem ipsum dolor sit yes"
      />
      <Alert
        severity="error"
        title="Error"
        description="lorem ipsum dolor sit yes"
      />
      <Alert
        severity="warning"
        title="Warning"
        description="lorem ipsum dolor sit yes"
      />
      <Alert
        severity="message"
        title="Message"
        description="lorem ipsum dolor sit yes"
      />
    </Box>
  );
}
