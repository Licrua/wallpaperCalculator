import styles from "@/styles/greeting/greeting.module.css";
import light from "@/assets/images/magicStick.svg";

function Greeting({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <h1 className={styles.header}>Калькулятор обоев</h1>
        <p className={styles.description}>
          Онлайн-калькулятор расчета обоев поможет вам определить число рулонов, требуемых для
          оклеивания, с учетом окон и дверей. Чтобы получить точные результаты, просто укажите
          параметры помещения и размеры в специальной таблице. Наша программа также берет в учет
          повторение рисунка (раппорт), что позволяет оптимизировать расходы на материалы и клей.
        </p>
        <button onClick={onClick} className={styles.button}>
          <img className={styles.image} src={light} alt="light" />
          <span className={styles.buttonText}>Начать расчет материалов</span>
        </button>
      </div>
    </div>
  );
}

export default Greeting;
