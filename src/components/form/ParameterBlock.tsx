import styles from "@/styles/form/rollParams.module.css";
import Button from "../general/Button";

type ParameterBlockProps = {
  title: string;
  data: Record<string, string>;
  activeValue: string;
  setValue: (value: string) => void;
};

function ParameterBlock({ title, data, activeValue, setValue }: ParameterBlockProps) {
  return (
    <div className={styles.parametrs}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.buttonsGroup}>
        {Object.entries(data).map(([size, className]) => (
          <Button
            key={size}
            type="button"
            className={styles[className]}
            isActive={activeValue === size}
            onClick={() => setValue(size)}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ParameterBlock;
