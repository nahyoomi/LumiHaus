import Button from "./Button";
import { BannerProps } from "../interfaces/Banner";

const Banner: React.FC<BannerProps> = ({ image, title, subtitle, description }) => {
    return (
        <div className="relative w-full h-[632px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className="w-1/2 h-full absolute flex items-center justify-center">
                <div className="pl-20 text-white">
                    <p className="font-semibold pb-4 text-[16px] leading-[24px] tracking-[2px] text-custom-blue uppercase">{title}</p>
                    <h2 className="font-semibold pb-4 text-[48px] leading-[56px] text-custom-dark">{subtitle}</h2>
                    <p className="font-[400] pb-4 text-[16px] leading-[24px] tracking-[2px] text-custom-dark">{description}</p>
                    <Button
                        text='BUY NOW'
                        onClick={() => { }}
                        variant='tonal'
                    />
                </div>
            </div>
        </div>
    )
};

export default Banner;