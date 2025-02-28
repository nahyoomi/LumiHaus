import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { Icons } from "../assets";
import CartModal from "./CartModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    { id: 1, name: "Product 1", price: 10, quantity: 2 },
    { id: 2, name: "Product 2", price: 15, quantity: 1 },
  ];
  const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

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
          <button>
            <img
              src={Icons.Login.src}
              alt={Icons.Login.alt}
              className="w-7 h-7"
            />
          </button>
          <button onClick={() => setIsCartOpen(true)}>
            <img
              src={Icons.Cart.src}
              alt={Icons.Cart.alt}
              className="w-7 h-7"
            />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <Navbar />
        </nav>
      )}
      {isCartOpen && (
        <CartModal
          onClose={() => setIsCartOpen(false)}
          products={products}
          total={total}
        />
      )}
    </header>
  );
};

export default Header;
