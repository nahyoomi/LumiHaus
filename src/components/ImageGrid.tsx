import { Images } from "../assets";
import ImageBox from "./ImageBox";

const ImageGrid: React.FC = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-8 pb-40">
    <ImageBox image={Images.Image1.src} text="Bedroom" />
    <div className="flex flex-col gap-2">
      <ImageBox image={Images.Image2.src} text="Living room" />
      <ImageBox image={Images.Image3.src} text="Dinning room" />
    </div>
  </section>
);

export default ImageGrid;
