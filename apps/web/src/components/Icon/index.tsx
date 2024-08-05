import { Box } from "@mui/material";
import { Skeleton } from "@repo/ui";
import Image from "next/image";
import { useGetAsset } from "~/hooks/api";
interface Props {
  symbol: string;
  width?: string | number | undefined;
  height?: string | number | undefined;
}

const Icon = ({ symbol, height = "32px", width = "32px" }: Props) => {
  const { data, isLoading } = useGetAsset({
    size: "128x128",
    symbol,
  });

  return (
    <Box
      sx={{
        width,
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {" "}
      <Skeleton isLoading={isLoading} height={"64px"} width={"64px"}>
        {data && <Image src={data.image} alt={data.name} fill />}
      </Skeleton>
    </Box>
  );
};
export default Icon;
