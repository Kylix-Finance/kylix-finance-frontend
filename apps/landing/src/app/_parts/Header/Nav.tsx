import { navItems } from "~/data";

export const Nav = () => {
  return (
    <nav className="space-x-8 text-sm font-medium">
      {navItems.map(({ label, link }, index) => (
        <a key={index} href={`#${link}`}>
          {label}
        </a>
      ))}
    </nav>
  );
};
