import Section from "~/components/Section";
import Card from "./components/Card";
import { smartLendingData } from "~/data";

const SmartLending = () => {
  return (
    <Section
      description={smartLendingData.description}
      heading={smartLendingData.heading}
      id={smartLendingData.id}
    >
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {smartLendingData.items.map((item, index) => (
          <Card key={item.heading + index} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default SmartLending;
