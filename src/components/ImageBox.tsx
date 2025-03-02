import { ImageBoxProps } from "../interfaces/ImageGrid";

const ImageBox: React.FC<ImageBoxProps> = ({ image, text }) => {
  return (
    <div className="relative w-full h-full">
      <img src={image} alt={text} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 text-custom-white p-4 font-semibold text-[20px] leading-[28px] tracking-[2px]">
        {text}
      </div>
    </div>
  );
};

export default ImageBox;
