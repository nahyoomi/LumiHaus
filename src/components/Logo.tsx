import { useNavigate } from "react-router-dom";
import { Icons } from "../assets";

interface LogoProps {
  linkToHome?: boolean;
}

const Logo: React.FC<LogoProps> = ({ linkToHome = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (linkToHome) {
      navigate("/");
    }
  };

  return (
    <img
      src={Icons.Logo.src}
      alt={Icons.Logo.alt}
      className={`h-auto max-w-[131px] object-contain ${linkToHome ? "cursor-pointer" : ""}`}
      onClick={handleClick}
    />
  );
};

export default Logo;