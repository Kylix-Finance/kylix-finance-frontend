import Section from "~/components/Section";
import { supportedAssetsData } from "~/data";
import Card from "./components/Card";
const SupportedAssetsAndAPY = () => {
  return (
    <Section
      description={supportedAssetsData.description}
      heading={supportedAssetsData.heading}
      id={supportedAssetsData.id}
    >
      <div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:grid-rows-2">
          {supportedAssetsData.items.map((asset, index) => (
            <Card
              key={asset.alt + index}
              alt={asset.alt}
              isLaunched={asset.isLaunched}
              src={asset.src}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SupportedAssetsAndAPY;
