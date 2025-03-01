import Layout from "../components/Layout";
import CheckoutProductCard from "../components/CheckoutProductCard";
import Summary from "../components/Summary";
import { useCart } from '../contexts/CartContext';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";


const Checkout: React.FC = () => {
  const { products } = useCart();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="px-20 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className='mr-20'>
          <p className="font-semibold text-4xl leading-10 text-custom-dark pb-8">Checkout</p>
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-10">
              <p className="text-lg text-gray-600">
                No products have been added to your cart yet.
              </p>
                <Button
                  text='Start shopping'
                  onClick={() => navigate('/')}
                  variant='outlined'
                />
            </div>
          ) : (
            <div className="space-y-4">
              {products.map(product => (
                <CheckoutProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
        <div className='ml-20'>
          <Summary />
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;