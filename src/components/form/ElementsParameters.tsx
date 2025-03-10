import styles from "./../../styles/form/elementsParameters.module.css";
import add from "@/assets/images/add.svg";
import Cross from "../general/Cross";
import Props from "../../types/elemntsProps";

function ElementsParameters({
  title,
  label,
  elements,
  addElement,
  removeElement,
  handleInputChange,
  setElements,
}: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.items}>
        {elements.map(({ id }) => (
          <div key={id} className={styles.windowItem}>
            <div className={styles.windowSection}>
              <h3 className={styles.windowTitle}>
                {title === "Параметры окон" ? "Окно" : "Дверь"}
              </h3>
              <button
                type="button"
                aria-label="Удалить"
                className={styles.removeButton}
                onClick={() => removeElement(id)}
              >
                <Cross />
              </button>
            </div>
            <div className={styles.buttons}>
              <label>
                <span className={styles.paragraph}>Высота м</span>
                <input
                  className={styles.windowField}
                  type="text"
                  onChange={(e) => handleInputChange(e, setElements, "height", id)}
                  placeholder="0"
                />
              </label>
              <label>
                <span>Ширина м</span>
                <input
                  className={styles.windowField}
                  type="text"
                  onChange={(e) => handleInputChange(e, setElements, "width", id)}
                  placeholder="0"
                />
              </label>
            </div>
          </div>
        ))}
        <div className={styles.buttonSection}>
          <button type="button" onClick={addElement} className={styles.addButton}>
            <img src={add} alt="add" className={styles.icon} />
          </button>
          <span>{label}</span>
        </div>
      </div>
    </section>
  );
}

export default ElementsParameters;
