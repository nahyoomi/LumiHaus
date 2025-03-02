import { ButtonProps } from "../../interfaces/Button";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "tonal",
  className = "",
  type = "button",
}) => {
  const baseClasses =
    "px-8 py-3 rounded-full transition-colors duration-200 font-medium text-base leading-6";
  const variantClasses =
    {
      text: "bg-transparent text-black hover:bg-transparent",
      outlined: "bg-transparent text-custom-blue border border-custom-blue",
      tonal: "bg-custom-blue text-white",
    }[variant] || "";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
