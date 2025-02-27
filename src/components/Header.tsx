import Logo from "./Logo";
import Navbar from "./Navbar";
import { Icons } from '../assets';

const Header = () => {
    return (
        <header>
            <div className="flex justify-between pt-3 px-20 pb-3 items-center">
                <Logo />
                <Navbar />
                <div className="flex gap-6">
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