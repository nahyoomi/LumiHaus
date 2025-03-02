import { Button } from "./Button";
import { BannerProps } from "../interfaces/Banner";

const Banner: React.FC<BannerProps> = ({
  image,
  title,
  subtitle,
  description,
}) => {
  return (
    <div
      className="relative w-full h-[632px] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" w-full p-[30px] md:p-0 items-center md:w-1/2 h-full absolute flex justify-center">
        <div className=" flex flex-col md:block pl-4 md:pl-20 text-white">
          <p className="text-center md:text-start font-semibold pb-4 text-[16px] leading-[24px] tracking-[2px] text-custom-blue uppercase">
            {title}
          </p>
          <h2 className="text-center md:text-start font-semibold pb-4 text-[48px] leading-[56px] text-custom-dark">
            {subtitle}
          </h2>
          <p className="text-center md:text-start font-[400] pb-4 text-[16px] leading-[24px] tracking-[2px] text-custom-dark">
            {description}
          </p>
          <Button text="BUY NOW" onClick={() => {}} variant="tonal" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
