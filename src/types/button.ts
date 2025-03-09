
export type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	isActive?: boolean;
	className?: string;
	type: "button" | "submit";
  };