import styles from "@/styles/greeting/greeting.module.css";
import { GreetingDescription } from "./GreetingDescription";
import { GreetingButton } from "./GreetingHeader";
import { GreetingHeader } from "./GreetingButton";

function Greeting({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles.container}>
      <GreetingHeader />
      <GreetingDescription />
      <GreetingButton onClick={onClick} />
    </div>
  );
}

export default Greeting;
