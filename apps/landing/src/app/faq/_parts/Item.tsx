"use client";
import { useState } from "react";
import { Plus } from "~/assets/svgs";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

const Item = ({ description, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 p-4 backdrop-blur-md bg-[#A6CEC20F] rounded-lg">
      <div className="flex items-center w-full justify-between">
        <p
          className={`transition-all duration-300 text-xl ${
            isOpen
              ? "font-bold leading-5 text-primary-500"
              : "font-normal leading-8 text-primary-100"
          }`}
        >
          {title}
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`transition-transform duration-300 ${
            isOpen ? "text-primary-500 rotate-45" : "text-primary-100"
          }`}
        >
          <Plus />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm lg:text-lg font-normal text-secondary-100">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Item;
