import styles from "@/styles/general/button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  type: "button" | "submit";
};

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
