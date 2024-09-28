import Section from "~/components/Section";
import { security } from "~/data";
import Card from "./components/Card";

const SecurityAndAudits = () => {
  return (
    <Section
      heading={{
        left: "Security",
        right: "and Audits",
      }}
      description="The new cross-chain Lending Platform, on Polkadot."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-20">
        {security.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </Section>
  );
};

export default SecurityAndAudits;
