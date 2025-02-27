import Button from "./Button";

interface BannerProps {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    buttonLink: string;
}


const Banner: React.FC<BannerProps> = ({ image, title, subtitle, description, buttonLink }) => {
    return (
        <div className="relative w-full h-96 md:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute flex items-center justify-center">
                <div className="text-white p-6 md:p-12 max-w-lg">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
                    <h3 className="text-xl md:text-2xl mb-4">{subtitle}</h3>
                    <p className="text-sm md:text-base mb-6">{description}</p>
                    <a href={buttonLink}></a>
                    <Button
                        text='Buy Now'
                        onClick={() => { }}
                        className="bg-black"
                    />
                </div>
            </div>
        </div>
    )
};

export default Banner;