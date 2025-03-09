import cross from "@/assets/images/cross.svg";

function Cross({ styles }: { styles?: React.CSSProperties }) {
  return <img style={styles} src={cross} alt="cross" />;
}

export default Cross;
