import Section from "~/components/Section";
import { howItsWorks } from "~/data";
import Card from "./components/Card";
import styles from "./styles.module.css";

const HowItWorks = () => {
  return (
    <Section
      heading={{
        left: "How",
        right: "It Works",
      }}
      description=" A visual breakdown of the lending and borrowing process, typically simplified into steps like:"
    >
      <div className={styles.container}>
        {howItsWorks.map((item, index) => (
          <Card data={item} className={styles[item.id]} key={index} />
        ))}
      </div>
    </Section>
  );
};

export default HowItWorks;
