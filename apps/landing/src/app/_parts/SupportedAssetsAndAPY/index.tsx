import Image from "next/image";
import Section from "~/components/Section";
import { supportedAssetsData } from "~/data";
import { useState } from "react";
import Card from "./components/Card";
const SupportedAssetsAndAPY = () => {
  return (
    <Section
      heading={supportedAssetsData.heading}
      description={supportedAssetsData.description}
      id={supportedAssetsData.id}
    >
      <div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:grid-rows-2">
          {supportedAssetsData.items.map((asset, index) => (
            <Card
              alt={asset.alt}
              isLaunched={asset.isLaunched}
              src={asset.src}
              key={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SupportedAssetsAndAPY;
