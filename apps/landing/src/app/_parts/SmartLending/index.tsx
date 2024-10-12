import Section from "~/components/Section";
import Card from "./components/Card";
import { smartLending } from "~/data";

const SmartLending = () => {
  return (
    <Section
      heading={{
        left: "Smart",
        right: "Lending",
      }}
      description="The new cross-chain Lending Platform, on Polkadot."
      id="smart-lending"
    >
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {smartLending.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default SmartLending;
