import Section from "~/components/Section";
import { securityAndAuditsData } from "~/data";
import Card from "./components/Card";

const SecurityAndAudits = () => {
  return (
    <Section
      description={securityAndAuditsData.description}
      heading={securityAndAuditsData.heading}
      id={securityAndAuditsData.id}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-20">
        {securityAndAuditsData.items.map((item, index) => (
          <Card {...item} key={item.heading + index} />
        ))}
      </div>
    </Section>
  );
};

export default SecurityAndAudits;
