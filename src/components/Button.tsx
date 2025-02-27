interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
  }

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-200 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
