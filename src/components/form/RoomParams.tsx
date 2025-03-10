import styles from "@/styles/form/roomParams.module.css";
import { roomParams } from "../../data/roomParams";
import Cross from "../general/Cross";
import handlerReset from "../../utils/handlerReset";

type Props = {
  room: { length: string; width: string; height: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, setter: any, key: string) => void;
  setRoom: React.Dispatch<React.SetStateAction<any>>;
};

function RoomParameters({ room, handleInputChange, setRoom }: Props) {
  return (
    <section>
      <h2 className={styles.title}>Параметры комнаты</h2>
      <Cross onClick={handlerReset} styles={{ position: "absolute", top: "30px", right: "30px" }} />
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
    </section>
  );
}

export default RoomParameters;
