import styles from "@/styles/greeting/greeting.module.css";
import light from "@/assets/images/magicStick.svg";

interface StartButtonProps {
  onClick: () => void;
}

export function GreetingButton({ onClick }: StartButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      <img className={styles.image} src={light} alt="light" />
      <span className={styles.buttonText}>Начать расчет материалов</span>
    </button>
  );
}
