import { useState, useRef } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { Icons } from "../assets";
import CartModal from "./CartModal";
import LoginModal from "./LoginModal";
import { useCart } from "../contexts/CartContext";
import { useModal } from "../contexts/ModalContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();
  const { products } = useCart();

  const loginButtonRef = useRef<HTMLButtonElement>(null);
  const cartButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const openLogin = () =>
    openModal(
      { title: "Log In", body: <LoginModal /> },
      loginButtonRef.current
    );
  const openCart = () =>
    openModal(
      { title: "Shopping Cart", body: <CartModal /> },
      cartButtonRef.current
    );

  return (
    <header className="px-4 md:px-20 pt-3 pb-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="lg:hidden mr-4">
            <img
              src={Icons.Menu.src}
              alt={Icons.Menu.alt}
              className="w-7 h-7"
            />
          </button>
          <Logo linkToHome />
        </div>
        <div className="hidden lg:flex">
          <Navbar />
        </div>
        <div className="flex gap-6">
          <button onClick={openLogin} ref={loginButtonRef}>
            <img
              src={Icons.Login.src}
              alt={Icons.Login.alt}
              className="w-7 h-7"
            />
          </button>
          <button onClick={openCart} ref={cartButtonRef} className="relative">
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
        <nav className="lg:hidden bg-white shadow-md">
          <Navbar />
        </nav>
      )}
    </header>
  );
};

export default Header;
