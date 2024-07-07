import { Box } from "@mui/material";
import Link from "next/link";
import { socialMediaLinks } from "~/assets/data";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center">
        {socialMediaLinks.map(({ icon: Icon, link }) => (
          <Link key={link} href={link}>
            <Icon className="text-primary-500 w-10 h-10" />
          </Link>
        ))}
      </div>
      <p className="text-primary-300 font-medium text-xs leading-5 tracking-[-2%] select-none">
        <span>&#169;</span>
        <span>KYLIX Version 1.0</span>
      </p>
    </div>
  );
};

export default Footer;
