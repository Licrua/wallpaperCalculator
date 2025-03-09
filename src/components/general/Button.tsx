import styles from "@/styles/general/button.module.css";
import { ButtonProps } from "../../types/button";



export default function Button({
  children,
  onClick,
  isActive = false,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${!isActive ? styles.inactive : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
