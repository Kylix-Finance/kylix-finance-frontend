import Section from "~/components/Section";
import { howItsWorksData } from "~/data";
import Card from "./components/Card";
import styles from "./styles.module.css";

const HowItWorks = () => {
  return (
    <Section
      description={howItsWorksData.description}
      heading={howItsWorksData.heading}
      id={howItsWorksData.id}
    >
      <div className={styles.container}>
        {howItsWorksData.items.map((item, index) => (
          <Card
            key={item.heading + index}
            className={styles[item.id]}
            data={item}
          />
        ))}
      </div>
    </Section>
  );
};

export default HowItWorks;
