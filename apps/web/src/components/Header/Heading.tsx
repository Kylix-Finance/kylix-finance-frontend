import { Typography } from "@mui/material";

interface Props {
  heading: string;
}

const Heading = ({ heading }: Props) => {
  return (
    <Typography
      variant="h6"
      className="text-[#1A433B] capitalize dark:text-primary-100"
    >
      {heading}
    </Typography>
  );
};

export default Heading;
