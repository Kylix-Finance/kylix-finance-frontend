import { Typography } from "@mui/material";

interface Props {
  heading: string;
}

const Heading = ({ heading }: Props) => {
  return (
    <Typography
      className="text-[#1A433B] capitalize dark:text-primary-100"
      variant="h6"
    >
      {heading}
    </Typography>
  );
};

export default Heading;
