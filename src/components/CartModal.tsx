import { CartModalProps } from '../interfaces/Cart';

const CartModal: React.FC<CartModalProps> = ({ onClose, products, total }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6 z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={onClose} aria-label="Close Cart" className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <hr className="my-4" />
        <div className="max-h-60 overflow-auto">
          {products.length === 0 ? (
            <p className="text-gray-500">No products in cart</p>
          ) : (
            <ul>
              {products.map((prod) => (
                <li key={prod.id} className="flex justify-between py-2">
                  <span>{prod.name} x {prod.quantity}</span>
                  <span>{prod.price * prod.quantity} €</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex justify-between items-center py-2 mt-4">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">{total} €</span>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col gap-2">
          <button className="bg-custom-blue text-white py-2 rounded hover:bg-blue-600 transition-colors">
            Checkout
          </button>
          <button className="border border-red-500 text-red-500 py-2 rounded hover:bg-red-500 hover:text-white transition-colors">
            Empty Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;