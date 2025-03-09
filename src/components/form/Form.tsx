import { useState } from "react";
import styles from "@/styles/form/form.module.css";
import add from "@/assets/images/add.svg";
import stick from "@/assets/images/magicStick.svg";
import { rollSizes } from "../../data/rollSizes";
import { rapports } from "../../data/rapports";
import { roomParams } from "../../data/roomParams";
import { elements } from "../../data/elements";
import Button from "../general/Button";
import Cross from "../general/Cross";

function Form() {
  const [rollSize, setRollSize] = useState(rollSizes[0]);
  const [rapport, setRapport] = useState(Object.keys(rapports)[0]);
  const [windows, setWindows] = useState<{ id: number; height: string; width: string }[]>([]);
  const [doors, setDoors] = useState<{ id: number; height: string; width: string }[]>([]);
  const [room, setRoom] = useState({
    length: "14.2",
    width: "28.5",
    height: "18.5",
  });
  const [results, setResults] = useState<{
    wallpaperArea: string;
    rollsNeeded: number;
    wallpaperM2: string;
  } | null>(null);

  const addWindow = () => setWindows([...windows, { id: Date.now(), height: "0", width: "0" }]);
  const addDoor = () => setDoors([...doors, { id: Date.now(), height: "0", width: "0" }]);
  const removeWindow = (id: number) => setWindows(windows.filter((win) => win.id !== id));
  const removeDoor = (id: number) => setDoors(doors.filter((door) => door.id !== id));

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<any>>,
    key?: string,
    id?: number,
  ) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setter((prev: any) =>
        id !== undefined
          ? prev.map((item: any) => (item.id === id ? { ...item, [key as string]: value } : item))
          : { ...prev, [key as string]: value },
      );
    }
  };

  const calculateMaterials = () => {
    const roomLength = parseFloat(room.length) || 0;
    const roomWidth = parseFloat(room.width) || 0;
    const roomHeight = parseFloat(room.height) || 0;
    const rapportValue = parseFloat(rapport) || 0;

    if (roomLength === 0 || roomWidth === 0 || roomHeight === 0) {
      setResults({
        wallpaperArea: "0.00",
        rollsNeeded: 0,
        wallpaperM2: "0.00",
      });
      return; // Не продолжаем расчет, если хотя бы одно значение равно 0
    }

    const wallArea = 2 * roomHeight * (roomLength + roomWidth);

    const windowArea = windows.reduce(
      (acc, w) => acc + (parseFloat(w.height) || 0) * (parseFloat(w.width) || 0),
      0,
    );

    const doorArea = doors.reduce(
      (acc, d) => acc + (parseFloat(d.height) || 0) * (parseFloat(d.width) || 0),
      0,
    );

    const wallpaperArea = wallArea - (windowArea + doorArea);

    const [rollWidth, rollHeight] = rollSize.split("x").map(parseFloat);

    const stripsPerRoll = rollHeight / (roomHeight + rapportValue);

    const wallpaperPerRoll = rollWidth * rollHeight;

    const stripsNeeded = wallpaperArea / (roomHeight * rollWidth);

    const rollsNeeded = Math.ceil(stripsNeeded / stripsPerRoll);

    setResults({
      wallpaperArea: wallpaperArea.toFixed(2),
      rollsNeeded,
      wallpaperM2: (rollsNeeded * wallpaperPerRoll).toFixed(2),
    });
  };

  return (
    <section className={styles.container}>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2 className={styles.title}>Параметры комнаты</h2>
        <Cross styles={{ position: "absolute", top: "30px", right: "20px" }} />
        <div className={styles.grid}>
          {Object.keys(room).map((key, index) => (
            <label key={key} className={styles.label}>
              <span className={styles.paragraph}>{roomParams[index].label}</span>
              <input
                type="text"
                value={room[key as keyof typeof room]}
                onChange={(e) => handleInputChange(e, setRoom, key)}
                className={styles.input}
                placeholder={roomParams[index].placeholder}
              />
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
        {elements.map(({ title, label }) => (
          <div key={title} className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.items}>
              {(title === "Параметры окон" ? windows || [] : doors || []).map(({ id }) => (
                <div key={id} className={styles.windowItem}>
                  <div className={styles.windowSection}>
                    <h3 className={styles.windowTitle}>
                      {title === "Параметры окон" ? "Окно" : "Дверь"}
                    </h3>
                    <button
                      aria-label="Удалить окно/дверь"
                      className={styles.removeButton}
                      onClick={() =>
                        title === "Параметры окон" ? removeWindow(id) : removeDoor(id)
                      }
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
                        onChange={(e) =>
                          handleInputChange(
                            e,
                            title === "Параметры окон" ? setWindows : setDoors,
                            "height",
                            id,
                          )
                        }
                        placeholder="0"
                      />
                    </label>
                    <label>
                      <span>Ширина м</span>
                      <input
                        className={styles.windowField}
                        type="text"
                        onChange={(e) =>
                          handleInputChange(
                            e,
                            title === "Параметры окон" ? setWindows : setDoors,
                            "width",
                            id,
                          )
                        }
                        placeholder="0"
                      />
                    </label>
                  </div>
                </div>
              ))}
              <div className={styles.buttonSection}>
                <button
                  type="button"
                  onClick={title === "Параметры окон" ? addWindow : addDoor}
                  aria-label="Добавить окно"
                  className={styles.addButton}
                >
                  <img src={add} alt="add" className={styles.icon} />
                </button>
                <span>{label}</span>
              </div>
            </div>
          </div>
        ))}

        <Button type="button" isActive onClick={calculateMaterials}>
          <img src={stick} alt="stick" className={styles.icon} />
          <span>Рассчитать кол-во материалов</span>
        </Button>

        {results && (
          <section className={styles.results}>
            <h2 className={styles.resultsTitle}>Результаты</h2>
            <div className={styles.resultSection}>
              <div className={styles.resultContainer}>
                <h3 className={styles.resultsText}>{results.rollsNeeded}</h3>
                <p className={styles.resultsSubtitle}>Кол-во рулонов</p>
              </div>
              <div className={styles.resultContainer}>
                <h3 className={styles.resultsText}>{results.wallpaperArea}</h3>
                <p className={styles.resultsSubtitle}>Кол-во m² обоев</p>
              </div>
              <div className={styles.resultContainer}>
                <h3 className={styles.resultsText}>{results.wallpaperM2} м²</h3>
                <p className={styles.resultsSubtitle}>Площадь оклейки</p>
              </div>
            </div>
            <div className={styles.buttonsContainer}>
              <button onClick={() => window.location.reload()} className={styles.resetButton}>
                Сбросить параметры
              </button>
              <a href="https://www.stenova.ru/oboi/?srsltid=AfmBOoraN2oBrwi-fmQrl2T_uA1XhBTz3-uinCi3CpSV-Ft0_73Uw-1I">
                <button  className={styles.catalogButton}>Перейти в каталог</button>
              </a>
            </div>
          </section>
        )}
      </form>
    </section>
  );
}

export default Form;
