import { Children } from "../../types/children";
import styles from "@/styles/general/container.module.css";

function Container({ children }: { children: Children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
