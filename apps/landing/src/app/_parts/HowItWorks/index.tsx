import Section from "~/components/Section";
import { howItsWorks } from "~/data";
import Card from "./components/Card";

const HowItWorks = () => {
  return (
    <Section
      heading={{
        left: "How",
        right: "It Works",
      }}
      description=" A visual breakdown of the lending and borrowing process, typically simplified into steps like:"
    >
      <div className="how-its-works-grid-container">
        {howItsWorks.map((item, index) => (
          <Card
            data={item}
            className={`how-its-works-${item.id}`}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default HowItWorks;
