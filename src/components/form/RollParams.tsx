import styles from "@/styles/form/rollParams.module.css";
import { rollSizes } from "../../data/rollSizes";
import { rapports } from "../../data/rapports";
import ParameterBlock from "./ParameterBlock";

type Props = {
  rollSize: string;
  setRollSize: (size: string) => void;
  rapport: string;
  setRapport: (size: string) => void;
};

function RollParameters({ rollSize, setRollSize, rapport, setRapport }: Props) {
  return (
    <section>
      <div className={styles.metrics}>
        <ParameterBlock
          title="Параметры рулона"
          data={rollSizes}
          activeValue={rollSize}
          setValue={setRollSize}
        />

        <ParameterBlock
          title="Раппорт"
          data={rapports}
          activeValue={rapport}
          setValue={setRapport}
        />
      </div>
    </section>
  );
}

export default RollParameters;
