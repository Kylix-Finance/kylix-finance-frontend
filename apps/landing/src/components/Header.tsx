"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Kylix, XIcon, Menu } from "~/assets/svgs";
import Link from "next/link";
import { navItems } from "~/data";
import { useLockBodyScroll } from "~/hooks/useLockBodyScroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  useLockBodyScroll({ isLocked: isOpen });

  const renderedNavItems = navItems.map(({ label, link }, index) => (
    <Link
      key={index}
      href={link}
      className="font-medium text-sm leading-5 tracking-wide text-white"
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  ));

  return (
    <>
      <header className="sticky top-0 z-20 text-white py-4">
        <div className="mx-6 py-4 px-8 flex justify-between items-center rounded-2xl border border-primary-900 bg-gradient-to-r from-[#11121439] to-[#0C0D0F45] backdrop-blur-sm">
          <Link href="/" className="font-bold text-lg">
            <span className="tracking-wide">
              <Kylix />
            </span>
          </Link>
          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          <nav className="hidden lg:flex space-x-8 text-sm font-medium items-center">
            {renderedNavItems}
          </nav>
          <Link
            href=""
            className="hidden lg:block get-start-btn font-medium leading-5 text-sm"
          >
            Launch App
          </Link>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="lg:hidden bg-secondary-900/70 bg-opacity-90 z-30 flex flex-col fixed w-screen h-screen text-white top-0 left-0"
          >
            <div className="flex flex-col gap-3 w-full h-full bg-secondary-500 p-6 ">
              <div className="flex items-center justify-between">
                <Kylix />
                <span onClick={toggleMenu}>
                  <XIcon className="w-6 h-6" />
                </span>
              </div>
              <div className="flex flex-col w-full h-full gap-4">
                {renderedNavItems}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
