import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { Icons } from "../assets";
import CartModal from "./CartModal";
import { useCart } from "../contexts/CartContext";
import { useModal } from "../contexts/ModalContext";
import LoginModal from "./LoginModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();
  const { products } = useCart();

  const handleOpenLogin = () => {
    openModal({ title: "Log In", body: <LoginModal  /> });
  };

  const handleOpenCart = () => {
    openModal({ title: "Shopping Cart", body: <CartModal  /> });
  };

  return (
    <header>
      <div className="mx-auto flex justify-between items-center pt-3 px-20 pb-3">
        <div className="flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden mr-4"
          >
            <img
              src={Icons.Menu.src}
              alt={Icons.Menu.alt}
              className="w-7 h-7"
            />
          </button>
          <Logo />
        </div>
        <div className="hidden md:flex">
          <Navbar />
        </div>
        <div className="flex gap-6">
          <button onClick={handleOpenLogin}>
            <img
              src={Icons.Login.src}
              alt={Icons.Login.alt}
              className="w-7 h-7"
            />
          </button>
          <button onClick={handleOpenCart} className="relative">
            <img
              src={Icons.Cart.src}
              alt={Icons.Cart.alt}
              className="w-7 h-7"
            />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-custom-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {products.length}
              </span>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <Navbar />
        </nav>
      )}
    </header>
  );
};

export default Header;
