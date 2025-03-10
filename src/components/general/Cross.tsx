import cross from "@/assets/images/cross.svg";

function Cross({ styles, onClick }: { styles?: React.CSSProperties; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
      aria-label="Удалить элемент"
    >
      <img style={styles} src={cross} alt="cross" />
    </button>
  );
}

export default Cross;
