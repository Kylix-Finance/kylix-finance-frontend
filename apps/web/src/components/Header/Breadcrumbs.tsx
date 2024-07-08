import { Breadcrumbs as BaseBreadcrumbs } from "@mui/material";
import Link from "next/link";

interface Props {
  pathnames: string[];
}

const Breadcrumbs = ({ pathnames }: Props) => {
  return (
    <BaseBreadcrumbs separator="/" className="!font-normal !text-xs !leading-4">
      <p className="text-[#A0AEC0]">Pages</p>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <Link key={to} href={to}>
            <p className="text-[#2D3748]">
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </p>
          </Link>
        );
      })}
    </BaseBreadcrumbs>
  );
};

export default Breadcrumbs;
