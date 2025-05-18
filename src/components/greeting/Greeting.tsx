import styles from "@/styles/greeting/greeting.module.css";
import { GreetingDescription } from "./GreetingDescription";
import { GreetingButton } from "./GreetingHeader";
import { GreetingHeader } from "./GreetingButton";

function Greeting({ onClick }: { onClick: () => void }) {
  return (
    <section className={styles.container}>
      <GreetingHeader />
      <GreetingDescription />
      <GreetingButton onClick={onClick} />
    </section>
  );
}

export default Greeting;
