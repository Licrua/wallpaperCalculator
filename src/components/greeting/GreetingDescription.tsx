import styles from "@/styles/greeting/greeting.module.css";

export function GreetingDescription() {
  return (
    <p className={styles.description}>
      Онлайн-калькулятор расчета обоев поможет вам определить число рулонов, требуемых для
      оклеивания, с учетом окон и дверей. Чтобы получить точные результаты, просто укажите
      параметры помещения и размеры в специальной таблице. Наша программа также берет в учет
      повторение рисунка (раппорт), что позволяет оптимизировать расходы на материалы и клей.
    </p>
  );
}
