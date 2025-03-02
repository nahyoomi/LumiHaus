import CheckoutProductCard from "./CheckoutProductCard";
import { Button } from "./Button";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useModal } from "../contexts/ModalContext";

const CartModal = () => {
  const { products, total, emptyCart } = useCart();
  const navigate = useNavigate();
  const { closeModal } = useModal();

  return (
    <>
      <div className="max-h-60 overflow-auto">
        {products.length === 0 ? (
          <p className="text-gray-500">No products in cart</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <CheckoutProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex justify-between items-center py-2 mt-4">
        <span className="font-semibold">Total</span>
        <span className="font-semibold">{total}€</span>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-2">
        <Button
          text="CHECKOUT"
          onClick={() => {
            closeModal();
            navigate("/checkout");
          }}
          variant="tonal"
        />
        <Button
          text="EMPTY CART"
          onClick={() => {
            emptyCart();
          }}
          variant="outlined"
        />
      </div>
    </>
  );
};

export default CartModal;
