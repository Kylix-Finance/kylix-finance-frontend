import { Breadcrumbs as BaseBreadcrumbs, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  pathnames: string[];
}

const Breadcrumbs = ({ pathnames }: Props) => {
  return (
    <BaseBreadcrumbs className="!font-normal !text-xs !leading-4" separator="/">
      <Typography className="text-[#A0AEC0]" variant="caption">
        Pages
      </Typography>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <Link key={to} href={to}>
            <Typography
              className="text-[#2D3748] dark:text-primary-100/50"
              variant="caption"
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Typography>
          </Link>
        );
      })}
    </BaseBreadcrumbs>
  );
};

export default Breadcrumbs;
