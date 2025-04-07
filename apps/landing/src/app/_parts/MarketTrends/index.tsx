"use client";
import clsx from "clsx";
import { useState } from "react";
import Section from "~/components/Section";
import { marketTrendsData } from "~/data";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./components/Card";

const MarketTrends = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Section
      description={marketTrendsData.description}
      heading={marketTrendsData.heading}
      id={marketTrendsData.id}
    >
      <div className="flex flex-col pt-4 pb-8 px-8 gap-12 rounded-md border border-secondary-400 w-full shadow-[0px 64px 64px -48px rgba(15, 15, 15, 0.1)] bg-[#DBC5F510]">
        <div
          className="flex border-b-[3px] border-[#23262F] overflow-x-scroll overflow-y-hidden hide-scrollbar"
          style={{ justifyContent: "safe center" }}
        >
          {marketTrendsData.items.map((item) => (
            <div key={item.id} className="relative pb-0.5 shrink-0">
              <p
                className={clsx(
                  "text-sm leading-4 py-2 px-4 cursor-pointer transition-all whitespace-nowrap",
                  currentSlide === item.id
                    ? "text-white font-bold"
                    : "text-secondary-100 font-normal"
                )}
                onClick={() => setCurrentSlide(item.id)}
              >
                {item.label}
              </p>
              {item.id === currentSlide && (
                <motion.div
                  layout
                  className="w-full h-1 bg-primary-500 absolute rounded-full"
                  layoutId="underline"
                />
              )}
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <Card key={currentSlide} id={currentSlide} />
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default MarketTrends;
