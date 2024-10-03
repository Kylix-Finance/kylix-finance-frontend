import Link from "next/link";
import { navItems } from "~/data";

export const Nav = () => {
  return (
    <nav className="space-x-8 text-sm font-medium">
      {navItems.map(({ label, link }, index) => (
        <Link key={index} href={link}>
          {label}
        </Link>
      ))}
    </nav>
  );
};
