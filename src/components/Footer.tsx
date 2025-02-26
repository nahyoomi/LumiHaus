import Logo from "./Logo";
import Navbar from "./Navbar";
import { Icons } from '../assets';

const Footer = () => {
    return(
        <footer>
            <div>
                <div>
                    <Logo />
                    <p>Calle Fjord N° 23, Barrio Nordik,<br /> 
                    28014, Ciudad Valdheim.<br />
                    Suecia</p>
                </div>
                <div>
                    <h4>Links</h4>
                    <Navbar />
                </div>
                <div>
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
            <div>
                <p>2024 LumiHaus. All rights reserved.</p>
            </div>
        </footer>
    )
};

export default Footer;