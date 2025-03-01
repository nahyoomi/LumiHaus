import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product , CartContextProps} from "../interfaces/Product";

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  const addToCart = (product: Product) => {
    setProducts((prevProducts) => {
      const productExists = prevProducts.find((p) => p.id === product.id);
      if (productExists) {
        return prevProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      }
      return [...prevProducts, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
  };

  const total = products.reduce(
    (acc, p) => acc + p.price * (p.quantity ?? 0),
    0
  );

  const changeQuantity = (id: number, delta: number) => {
    setProducts((prevProducts) =>
      prevProducts.reduce<Product[]>((acc, p) => {
        if (p.id === id) {
          const newQuantity = (p.quantity || 1) + delta;
          if (newQuantity > 0) {
            acc.push({ ...p, quantity: newQuantity });
          }
        } else {
          acc.push(p);
        }
        return acc;
      }, [])
    );
  };

  const emptyCart = () => {
    setProducts([]);
  };

  const deleteProduct = (id: number) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
  };

  return (
    <CartContext.Provider value={{ products, total, addToCart, removeFromCart, changeQuantity, emptyCart, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
