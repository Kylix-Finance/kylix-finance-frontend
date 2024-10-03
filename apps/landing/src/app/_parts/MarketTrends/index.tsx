"use client";
import clsx from "clsx";
import { useState } from "react";
import Section from "~/components/Section";
import { marketTrends } from "~/data";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./components/Card";

const MarketTrends = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Section
      heading={{
        left: "Market",
        right: "Trends",
      }}
      description="The new cross-chain Lending Platform, on Polkadot."
      id="markets-trends"
    >
      <div className="flex flex-col pt-4 pb-8 px-8 gap-12 rounded-md border border-secondary-400 w-full shadow-[0px 64px 64px -48px rgba(15, 15, 15, 0.1)] bg-[#DBC5F510]">
        <div className="flex justify-center items-center gap-7 border-b-[3px] border-[#23262F]">
          {marketTrends.map((item) => (
            <div key={item.id} className="relative pb-0.5">
              <p
                onClick={() => setCurrentSlide(item.id)}
                className={clsx(
                  "text-sm  leading-4 py-2 px-4  cursor-pointer",
                  currentSlide === item.id
                    ? "text-white font-bold"
                    : "text-secondary-100 font-normal"
                )}
              >
                {item.label}
              </p>
              <AnimatePresence>
                {item.id === currentSlide && (
                  <motion.div
                    layout
                    layoutId="underline"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      type: "tween",
                    }}
                    className="w-full h-1 bg-primary-500 absolute rounded-full"
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <Card id={currentSlide} />
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default MarketTrends;
