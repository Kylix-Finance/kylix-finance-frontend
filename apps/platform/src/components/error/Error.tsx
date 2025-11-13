import Background from "../background/Background";
import { Button } from "../ui/button";
import { LinkButton } from "../ui/link-button";
import styles from "./Error.module.scss";
interface Props {
  code: string;
  title: string;
  description: string;
}

const Error = ({ code, description, title }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.code}>{code}</h1>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <LinkButton href="/">
          <Button variant="primary">Back to home</Button>
        </LinkButton>
      </div>
      <Background />
    </div>
  );
};

export default Error;
