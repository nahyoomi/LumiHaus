import Logo from "./Logo";
import Navbar from "./Navbar";
import { Icons } from "../assets";
import { SocialIconProps } from "../interfaces/Footer";

const containerClasses = "w-full px-20 flex-col lg:flex-row";
const gridClasses = "flex justify-between pt-3 pb-3 items-center lg:flex-row flex-col";
const sectionClasses = {
  info: "w-full max-w-[287px] flex justify-center pt-0 lg:pt-10 lg:block",
  links: "w-auto",
};
const socialContainerClasses = "flex lg:flex-row gap-10";

const SocialIcons: React.FC = () => {
  const socialIcons: SocialIconProps[] = [
    { src: Icons.Google.src, alt: Icons.Google.alt },
    { src: Icons.Facebook.src, alt: Icons.Facebook.alt },
    { src: Icons.Instagram.src, alt: Icons.Instagram.alt },
  ];
  return (
    <div className={socialContainerClasses}>
      {socialIcons.map((icon, idx) => (
        <img key={idx} src={icon.src} alt={icon.alt} />
      ))}
    </div>
  );
};

const FooterInfo: React.FC = () => (
  <div className={sectionClasses.info}>
    <p className="font-normal text-[16px] leading-[24px] text-custom-gray pt-8 pb-4 text-center lg:text-start lg:pb-0">
      Calle Fjord N° 23, Barrio Nordik, 28014, Ciudad Valdheim.<br /> 
      Suecia
    </p>
  </div>
);

const FooterLinks: React.FC = () => (
  <div className={sectionClasses.links}>
    <h4 className="font-semibold text-lg pb-2 pl-0 text-center lg:pl-8 lg:text-start">Links</h4>
    <Navbar />
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="border-t-[1px] border-custom-gray md:flex-col">
      <div className="px-20 pt-10 flex justify-center lg:block">
        <Logo />
      </div>
      <div className={`${containerClasses} ${gridClasses}`}>
        <FooterInfo />
        <FooterLinks />
        <SocialIcons />
      </div>
      <div className={`${containerClasses} p-8 text-center  lg:text-start`}>
        <p>2024 LumiHaus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;