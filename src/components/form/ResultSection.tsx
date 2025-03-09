import styles from "@/styles/form/resultSection.module.css";
import Props from "../../types/resultProps";

function ResultsSection({ results, resetForm }: Props) {
  if (!results) return null;

  const resultData = [
    { value: results.rollsNeeded, label: "Кол-во рулонов" },
    { value: results.wallpaperArea + " м²", label: "Кол-во m² обоев" },
    { value: results.wallpaperM2 + " м²", label: "Площадь оклейки" },
  ];

  return (
    <section className={styles.results}>
      <h2 className={styles.resultsTitle}>Результаты</h2>
      <div className={styles.resultSection}>
        {resultData.map((result, index) => (
          <div key={index} className={styles.resultContainer}>
            <h3 className={styles.resultsText}>{result.value}</h3>
            <p className={styles.resultsSubtitle}>{result.label}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttonsContainer}>
        <button onClick={resetForm} className={styles.resetButton}>
          Сбросить параметры
        </button>
        <button
          onClick={() =>
            (window.location.href =
              "https://www.stenova.ru/oboi/?srsltid=AfmBOooo-I5X_FjcoBFRxZBOcEe23uN498kllb-d4bIhiOX5yBUpr-bS")
          }
          type="button"
          className={styles.catalogButton}
        >
          Перейти в каталог
        </button>
      </div>
    </section>
  );
}

export default ResultsSection;
