import { useState } from "react";
import styles from "@/styles/form/form.module.css";
import add from "@/assets/images/add.svg";
import stick from "@/assets/images/magicStick.svg";
import cross from "@/assets/images/cross.svg";
import { rollSizes } from "../../data/rollSizes";
import { rapports } from "../../data/rapports";
import { roomParams } from "../../data/roomParams";
import { elements } from "../../data/elements";
import Button from "../general/Button";

function Form() {
  const [rollSize, setRollSize] = useState(rollSizes[0]);
  const [rapport, setRapport] = useState(Object.keys(rapports)[0]);
  const [windows, setWindows] = useState<{ id: number; height: number; width: number }[]>([]);
  const [doors, setDoors] = useState<{ id: number; height: number; width: number }[]>([]);
  console.log("windows", windows);

  //
  const addWindow = () => {
    setWindows([...windows, { id: Date.now(), height: 2.5, width: 3.2 }]);
  };

  const addDoor = () => {
    setDoors([...doors, { id: Date.now(), height: 2.0, width: 0.9 }]);
  };
  //

  //
  const removeWindow = (id: number) => {
    setWindows(windows.filter((win) => win.id !== id));
  };

  const removeDoor = (id: number) => {
    setDoors(doors.filter((door) => door.id !== id));
  };
  //

  return (
    // <section className={styles.container}>
    //   <form>
    //     <h2 className={styles.title}>Параметры комнаты</h2>
    //     <div className={styles.grid}>
    //       {roomParams.map(({ label, placeholder }) => (
    //         <label key={label} className={styles.label}>
    //           <span className={styles.paragraph}>{label}</span>
    //           <input type="text" placeholder={placeholder} className={styles.input} />
    //         </label>
    //       ))}
    //     </div>
    //     <div className={styles.metrics}>
    //       <div className={styles.parametrs}>
    //         <h2 className={styles.title}>Параметры рулона</h2>
    //         <div className={styles.buttonsGroup}>
    //           {rollSizes.map((size) => (
    //             <Button
    //               type="button"
    //               key={size}
    //               isActive={rollSize === size}
    //               onClick={() => setRollSize(size)}
    //             >
    //               {size}
    //             </Button>
    //           ))}
    //         </div>
    //       </div>
    //       <div className={styles.parametrs}>
    //         <h2 className={styles.title}>Раппорт</h2>
    //         <div className={styles.buttonsGroup}>
    //           {Object.entries(rapports).map(([size, className]) => {
    //             console.log("size", size);

    //             return (
    //               <Button
    //                 type="button"
    //                 className={styles[className]}
    //                 key={size}
    //                 isActive={rapport === size}
    //                 onClick={() => setRapport(size)}
    //               >
    //                 {size}
    //               </Button>
    //             );
    //           })}
    //         </div>
    //       </div>
    //     </div>

    //     {elements.map(({ title, label }) => (
    //       <div key={title} className={styles.section}>
    //         <h2 className={styles.title}>{title}</h2>
    //         <div className={styles.buttonSection}>
    //           <button type="button" onClick={addWindow} className={styles.addButton}>
    //             <img src={add} alt="add" className={styles.icon} />
    //           </button>
    //           <span>{label}</span>
    //         </div>
    //       </div>
    //     ))}
    //     <div className={styles.items}>
    //       {windows.map(({ id, height, width }) => (
    //         <div key={id} className={styles.windowItem}>
    //           <div className={styles.windowSection}>
    //             <h3 className={styles.windowTitle}>Окно</h3>
    //             <button className={styles.removeButton} onClick={() => removeWindow(id)}>
    //               <img src={cross} alt="cross" />
    //             </button>
    //           </div>
    //           <div className={styles.buttons}>
    //             <label>
    //               <span className={styles.paragraph}>Высота м</span>
    //               <input className={styles.windowField} type="text" value={height} />
    //             </label>
    //             <label>
    //               <span>Ширина м</span>
    //               <input className={styles.windowField} type="text" value={width} />
    //             </label>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     <Button type="submit" isActive>
    //       <img src={stick} alt="stick" className={styles.icon} />
    //       <span>Рассчитать кол-во материалов</span>
    //     </Button>
    //   </form>
    // </section>
    <section className={styles.container}>
      <form>
        <h2 className={styles.title}>Параметры комнаты</h2>
        <div className={styles.grid}>
          {roomParams.map(({ label, placeholder }) => (
            <label key={label} className={styles.label}>
              <span className={styles.paragraph}>{label}</span>
              <input type="text" placeholder={placeholder} className={styles.input} />
            </label>
          ))}
        </div>
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
        <div className={styles.windowContainer}>
          <div className={styles.items}>
            {windows.map(({ id, height, width }) => (
              <div key={id} className={styles.windowItem}>
                <div className={styles.windowSection}>
                  <h3 className={styles.windowTitle}>Окно</h3>
                  <button className={styles.removeButton} onClick={() => removeWindow(id)}>
                    <img src={cross} alt="cross" />
                  </button>
                </div>
                <div className={styles.buttons}>
                  <label>
                    <span className={styles.paragraph}>Высота м</span>
                    <input className={styles.windowField} type="text" value={height} />
                  </label>
                  <label>
                    <span>Ширина м</span>
                    <input className={styles.windowField} type="text" value={width} />
                  </label>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.addWindowSection}>
            {elements.map(({ title, label }) => (
              <div key={title} className={styles.section}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.buttonSection}>
                  <button type="button" onClick={addWindow} className={styles.addButton}>
                    <img src={add} alt="add" className={styles.icon} />
                  </button>
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button type="submit" isActive>
          <img src={stick} alt="stick" className={styles.icon} />
          <span>Рассчитать кол-во материалов</span>
        </Button>
      </form>
    </section>
  );
}

export default Form;
