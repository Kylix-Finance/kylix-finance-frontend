import Section from "~/components/Section";
import { howItsWorksData } from "~/data";
import Card from "./components/Card";
import styles from "./styles.module.css";

const HowItWorks = () => {
  return (
    <Section
      heading={howItsWorksData.heading}
      description={howItsWorksData.description}
      id={howItsWorksData.id}
    >
      <div className={styles.container}>
        {howItsWorksData.items.map((item, index) => (
          <Card data={item} className={styles[item.id]} key={index} />
        ))}
      </div>
    </Section>
  );
};

export default HowItWorks;
