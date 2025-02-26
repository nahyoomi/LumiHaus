import Logo from "./Logo";
import Navbar from "./Navbar";
import { Icons } from '../assets';

const Header = () => {
    return (
        <header>
            <div>
                <Logo />
                <Navbar />
                <div>
                    <button>
                        <img 
                            src={Icons.Login.src}
                            alt={Icons.Login.alt}    
                        />
                    </button>
                    <button>
                        <img 
                            src={Icons.Cart.src}
                            alt={Icons.Cart.alt}    
                        />
                    </button>
                </div>
            </div>
        </header>
    )
};

export default Header;