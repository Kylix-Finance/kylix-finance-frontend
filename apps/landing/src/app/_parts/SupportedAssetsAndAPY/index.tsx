import Image from "next/image";
import Section from "~/components/Section";
import { supportedAssetsData } from "~/data";

const SupportedAssetsAndAPY = () => {
  return (
    <Section
      heading={supportedAssetsData.heading}
      description={supportedAssetsData.description}
      id={supportedAssetsData.id}
    >
      <div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {supportedAssetsData.items.map((asset, index) => (
            <div
              key={index}
              className="p-0.5 bg-gradient-to-br from-white/20 via-transparent rounded-md"
            >
              <div className="flex items-center justify-center p-9 rounded-md backdrop-blur-3xl bg-gradient-to-tl from-white/5 to-transparent aspect-square">
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  width={140}
                  height={140}
                  draggable="false"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SupportedAssetsAndAPY;
