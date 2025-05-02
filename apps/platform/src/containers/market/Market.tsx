import styles from "./Market.module.scss";
import ScrollableContainer from "../../components/ScrollableContainer/ScrollableContainer";

const Market = () => {
  return (
    <ScrollableContainer>
      <div className={styles.slide} style={{ width: "300px" }}>
        Slide 1
      </div>
      <div className={styles.slide} style={{ width: "400px" }}>
        Slide 2
      </div>
      <div className={styles.slide} style={{ width: "350px" }}>
        Slide 3
      </div>
      <div className={styles.slide} style={{ width: "450px" }}>
        Slide 4
      </div>
      <div className={styles.slide} style={{ width: "380px" }}>
        Slide 5
      </div>
    </ScrollableContainer>
  );
};

export default Market;
