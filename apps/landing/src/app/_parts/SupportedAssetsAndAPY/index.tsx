import Image from "next/image";
import Section from "~/components/Section";
import { assets } from "~/data";
const SupportedAssetsAndAPY = () => {
  return (
    <Section
      heading={{ left: "Supported ", right: " Assets and APY" }}
      description="The new cross-chain Lending Platform, on Polkadot."
      id="supported-assets-and-apy"
    >
      <div>
        <div className="flex lg:flex-row items-center justify-between gap-6 flex-wrap">
          {assets.map((asset, index) => (
            <div
              key={index}
              className="p-0.5 bg-gradient-to-br from-white/20 via-transparent rounded-md w-[calc(50%-0.75rem)] xl:w-auto"
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
