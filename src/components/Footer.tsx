import Logo from "./Logo";
import Navbar from "./Navbar";
import { Icons } from '../assets';

const socialIcons = [
  { src: Icons.Google.src, alt: Icons.Google.alt },
  { src: Icons.Facebook.src, alt: Icons.Facebook.alt },
  { src: Icons.Instagram.src, alt: Icons.Instagram.alt },
];

const Footer: React.FC = () => {
  const container = "w-full px-20";
  const sectionClasses = {
    info: "w-full md:w-[20%] pt-10",
    links: "w-full md:w-[25%]",
  };
  const gridClasses = "flex justify-between pt-3 pb-3 items-center md:flex-row flex-col";
  const socialClasses = "flex flex-col lg:flex-row gap-10";

  return (
    <footer className="border-t-[1px] border-custom-gray">
      <div className={`${container} ${gridClasses}`}>
        <div className={sectionClasses.info}>
          <Logo />
          <p className="font-normal text-[16px] leading-[24px] text-custom-gray pt-8">
            Calle Fjord N° 23, Barrio Nordik, 28014, Ciudad Valdheim.<br /> 
            Suecia
          </p>
        </div>
        <div className={sectionClasses.links}>
          <h4>Links</h4>
          <Navbar />
        </div>
        <div className={socialClasses}>
          {socialIcons.map(({ src, alt }, i) => (
            <img key={i} src={src} alt={alt} />
          ))}
        </div>
      </div>
      <div className={`${container} p-8`}>
        <p>2024 LumiHaus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;