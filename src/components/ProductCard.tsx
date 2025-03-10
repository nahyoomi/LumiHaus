import { ProductCardProps } from "../interfaces/Product";
import { Icons } from "../assets";
import { useCart } from "../contexts/CartContext";
import { toast } from "react-toastify";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const textBase = "text-[16px] leading-[24px] tracking-[2px] text-custom-dark";

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(
      "Product added to the cart. Go to checkout to  continue purchase",
      {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      }
    );
  };

  return (
    <article className="overflow-hidden">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-[312px] bg-cover"
      />
      <div className="p-4 flex justify-between items-center">
        <div className="flex-1">
          <p className={`font-semibold ${textBase}`}>{product.title}</p>
          <p className={`font-medium ${textBase}`}>{product.price}€</p>
        </div>
        <button
          onClick={handleAddToCart}
          aria-label="Add to cart"
          className="border border-custom-blue text-custom-blue rounded-full w-11 h-11 flex items-center justify-center cursor-pointer"
        >
          <img src={Icons.Add.src} alt={Icons.Add.alt} className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
