import Section from "~/components/Section";
import { assets } from "~/data";
const SupportedAssetsAndAPY = () => {
  return (
    <Section
      heading={{ left: "Supported ", right: " Assets and APY" }}
      description="The new cross-chain Lending Platform, on Polkadot."
    >
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {assets.map((Asset, index) => (
            <div
              key={index}
              className="p-0.5 bg-gradient-to-br from-white/20 via-transparent rounded-md"
            >
              <div className="p-9 rounded-md backdrop-blur-3xl  bg-gradient-to-tl from-white/5 to-transparent">
                <Asset />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SupportedAssetsAndAPY;
