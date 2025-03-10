import { useState } from "react";
import ElementsParameters from "./ElementsParameters";
import styles from "@/styles/form/form.module.css";
import RoomParameters from "./RoomParams";
import RollParameters from "./RollParams";
import ResultsSection from "./ResultSection";
import Button from "../general/Button";
import { rollSizes } from "../../data/rollSizes";
import { rapports } from "../../data/rapports";
// import { calculateMaterials } from "../../utils/calculateMaterials";
// import handleInputChange from "../../utils/handleInputChange";
import FeedbackForm from "../feedback/Feedback";
import { calculateMaterials } from "../../utils/calculateMaterials";
import handleInputChange from "../../utils/handleInputChange";

function Form() {
  const [room, setRoom] = useState({ length: "14.2", width: "28.5", height: "18.5" });
  const [windows, setWindows] = useState<{ id: number; height: string; width: string }[]>([]);
  const [doors, setDoors] = useState<{ id: number; height: string; width: string }[]>([]);
  const [rollSize, setRollSize] = useState(rollSizes[0]);
  const [rapport, setRapport] = useState(Object.keys(rapports)[0]);
  const [isFormShow, setIsFormShow] = useState(false);
  const [results, setResults] = useState<{
    wallpaperArea: string;
    rollsNeeded: number;
    wallpaperM2: string;
  } | null>(null);

  const addWindow = () => setWindows([...windows, { id: Date.now(), height: "0", width: "0" }]);
  const addDoor = () => setDoors([...doors, { id: Date.now(), height: "0", width: "0" }]);
  const removeWindow = (id: number) => setWindows(windows.filter((win) => win.id !== id));
  const removeDoor = (id: number) => setDoors(doors.filter((door) => door.id !== id));

  const handleCalculate = () => {
    const newResults = calculateMaterials(room, windows, doors, rollSize, rapport);
    setResults(newResults);
  };
  const sendFormHandler = () => {
    setIsFormShow(false);
  };

  const resetForm = () => {
    setRoom({
      length: "14.2",
      width: "28.5",
      height: "18.5",
    });
    setWindows([]);
    setDoors([]);
    setRollSize(rollSizes[0]);
    setRapport(Object.keys(rapports)[0]);
    setResults(null);
  };

  return (
    <main className={styles.container}>
      <form onSubmit={(e) => e.preventDefault()}>
        <RoomParameters room={room} setRoom={setRoom} handleInputChange={handleInputChange} />
        <RollParameters
          rollSize={rollSize}
          setRollSize={setRollSize}
          rapport={rapport}
          setRapport={setRapport}
        />

        <ElementsParameters
          title="Параметры окон"
          label="Добавить окно"
          elements={windows}
          addElement={addWindow}
          removeElement={removeWindow}
          setElements={setWindows}
          handleInputChange={handleInputChange}
        />

        <ElementsParameters
          title="Параметры дверей"
          label="Добавить дверь"
          elements={doors}
          addElement={addDoor}
          removeElement={removeDoor}
          setElements={setDoors}
          handleInputChange={handleInputChange}
        />

        <Button type="button" isActive onClick={handleCalculate}>
          Рассчитать материалы
        </Button>
        <ResultsSection
          onClick={() => setIsFormShow(true)}
          resetForm={resetForm}
          results={results}
        />
      </form>
      {isFormShow && (
        <FeedbackForm closeFrame={sendFormHandler} onClick={sendFormHandler} results={results} />
      )}
    </main>
  );
}

export default Form;
