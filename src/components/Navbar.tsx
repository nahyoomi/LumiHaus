import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        {["Home", "Shop", "About", "Contact"].map((item) => {
          const to = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          return (
            <li
              key={item}
              className="px-2 lg:px-8 py-3 font-semibold text-[16px] leading-6 tracking-widest transition-colors duration-200 cursor-pointer hover:text-custom-blue active:text-custom-blue"
            >
              <Link to={to}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
