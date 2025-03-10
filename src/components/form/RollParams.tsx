// import styles from "@/styles/form/rollParams.module.css";
// import { rollSizes } from "../../data/rollSizes";
// import { rapports } from "../../data/rapports";
// import Button from "../general/Button";

// type Props = {
//   rollSize: string;
//   setRollSize: (size: string) => void;
//   rapport: string;
//   setRapport: (size: string) => void;
// };

// function RollParameters({ rollSize, setRollSize, rapport, setRapport }: Props) {
//   return (
//     <section>
//       <div className={styles.metrics}>
//         <div className={styles.parametrs}>
//           <h2 className={styles.title}>Параметры рулона</h2>
//           <div className={styles.buttonsGroup}>
//             {Object.keys(rollSizes).map(([size, className]) => (
//               <Button
//                 className={styles[className]}
//                 type="button"
//                 key={size}
//                 isActive={rollSize === size}
//                 onClick={() => setRollSize(size)}
//               >
//                 {size}
//               </Button>
//             ))}
//           </div>
//         </div>
//         <div className={styles.parametrs}>
//           <h2 className={styles.title}>Раппорт</h2>
//           <div className={styles.buttonsGroup}>
//             {Object.entries(rapports).map(([size, className]) => (
//               <Button
//                 type="button"
//                 className={styles[className]}
//                 key={size}
//                 isActive={rapport === size}
//                 onClick={() => setRapport(size)}
//               >
//                 {size}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default RollParameters;

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
