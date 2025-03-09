import styles from "@/styles/form/form.module.css";
import { rollSizes } from "../../data/rollSizes";
import { rapports } from "../../data/rapports";
import Button from "../general/Button";

type Props = {
  rollSize: string;
  setRollSize: (size: string) => void;
  rapport: string;
  setRapport: (size: string) => void;
};

function RollParameters({ rollSize, setRollSize, rapport, setRapport }: Props) {
  return (
    <div className={styles.metrics}>
      <div className={styles.parametrs}>
        <h2 className={styles.title}>Параметры рулона</h2>
        <div className={styles.buttonsGroup}>
          {rollSizes.map((size) => (
            <Button
              type="button"
              key={size}
              isActive={rollSize === size}
              onClick={() => setRollSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.parametrs}>
        <h2 className={styles.title}>Раппорт</h2>
        <div className={styles.buttonsGroup}>
          {Object.entries(rapports).map(([size, className]) => (
            <Button
              type="button"
              className={styles[className]}
              key={size}
              isActive={rapport === size}
              onClick={() => setRapport(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RollParameters;
