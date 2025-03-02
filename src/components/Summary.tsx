import Button from "./Button";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Summary = () => {
  const { total, emptyCart } = useCart();
  const navigate = useNavigate();

  const handleSuccessfulPurchase = () => {
    toast.success("Purchase successful! 🎉", {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
    });
    emptyCart();
    navigate("/");
  };
  return (
    <div className="p-8 border-2 rounded-lg text-custom-dark">
      <h3 className="font-semibold text-2xl leading-9 text-custom-dark pb-4">
        Summary
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between font-normal text-base leading-6 text-custom-gray">
          <span>Subtotal</span>
          <span>{total}€</span>
        </div>
        <div className="flex justify-between text-base leading-6 text-custom-gray">
          <span>Shopping Costs</span>
          <span>0,00€</span>
        </div>
        <div className="flex justify-between font-medium text-xl leading-7 text-custom-dark pt-4">
          <span>Total</span>
          <span>{total}€</span>
        </div>
      </div>
      <hr className="my-4" />
      <Button
        text="PURCHASE"
        onClick={() => handleSuccessfulPurchase()}
        variant="tonal"
        className="w-full flex items-center justify-center px-4 py-2 bg-custom-blue text-white "
      ></Button>
    </div>
  );
};

export default Summary;
