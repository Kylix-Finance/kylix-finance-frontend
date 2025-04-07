import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { cn } from "~/utils";

interface Props {
  value?: string;
  className?: string;
  iconDimension?: {
    width: number;
    height: number;
  };
}

const KylixChip = ({
  value,
  className,
  iconDimension = {
    height: 10,
    width: 10,
  },
}: Props) => {
  // const finalValue = useMemo(() => {
  //   return `${(1 + Math.random() * 10).toFixed()}%`;
  // }, []);
  return (
    <Box
      className={cn(
        "bg-primary-400/10 font-number text-primary-800",
        className
      )}
      sx={{
        display: "flex",
        gap: "4px",
        alignItems: "center",
        justifyContent: "center",
        width: "fit-content",
        fontWeight: "500",
        fontSize: "10px",
        lineHeight: "20px",
        letterSpacing: "-2%",
        borderRadius: "4px",
        paddingX: "6px",
        paddingY: "1px",
      }}
    >
      <Typography className="dark:text-primary-100" variant="caption">
        {value}
      </Typography>
      <Image
        alt="Kylix badge"
        draggable="false"
        height={iconDimension.height}
        src="/kylix-chip.svg"
        width={iconDimension.width}
      />
    </Box>
  );
};

export default KylixChip;
