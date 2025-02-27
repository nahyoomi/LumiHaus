import Logo from "./Logo";
import Navbar from "./Navbar";
import { Icons } from '../assets';

const Footer = () => {
    return(
        <footer>
            <div className="flex justify-between pt-3 px-20 pb-3 items-center gap-6">
                <div>
                    <Logo />
                    <p>Calle Fjord N° 23, Barrio Nordik,
                    28014, Ciudad Valdheim.<br /> 
                    Suecia</p>
                </div>
                <div>
                    <h4>Links</h4>
                    <Navbar />
                </div>
                <div className="flex gap-10">
                    <img 
                        src={Icons.Google.src}
                        alt={Icons.Google.alt}
                    />
                    <img 
                        src={Icons.Facebook.src}
                        alt={Icons.Facebook.alt}
                    />
                    <img 
                        src={Icons.Instagram.src}
                        alt={Icons.Instagram.alt}
                    />
                </div>
            </div>
            <div className="p-8 px-20">
                <p>2024 LumiHaus. All rights reserved.</p>
            </div>
        </footer>
    )
};

export default Footer;