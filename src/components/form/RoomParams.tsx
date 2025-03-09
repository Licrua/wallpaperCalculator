import styles from "@/styles/form/form.module.css";
import { roomParams } from "../../data/roomParams";

type Props = {
  room: { length: string; width: string; height: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, setter: any, key: string) => void;
  setRoom: React.Dispatch<React.SetStateAction<any>>;
};

function RoomParameters({ room, handleInputChange, setRoom }: Props) {
  return (
    <div>
      <h2 className={styles.title}>Параметры комнаты</h2>
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
    </div>
  );
}

export default RoomParameters;
