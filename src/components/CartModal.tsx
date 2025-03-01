import { CartModalProps } from '../interfaces/Product';
import CheckoutProductCard from './CheckoutProductCard';
import Button from './Button';
import { Icons } from '../assets';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const { products, total, emptyCart } = useCart();
  const navigate = useNavigate();


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6 z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button onClick={onClose} aria-label="Close Cart" className="text-gray-500 hover:text-gray-700">
            <img src={Icons.Close.src} alt={Icons.Close.alt} className="w-7 h-7" />
          </button>
        </div>
        <hr className="my-4" />
        <div className="max-h-60 overflow-auto">
          {products.length === 0 ? (
            <p className="text-gray-500">No products in cart</p>
          ) : (
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <CheckoutProductCard
                    product={product}
                  />
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
            text='CHECKOUT'
            onClick={() => navigate('/checkout')}
            variant='tonal'
          >
          </Button>
          <Button 
            text='EMPTY CART'
            onClick={() => {emptyCart()}}
            variant='outlined'
          >
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;