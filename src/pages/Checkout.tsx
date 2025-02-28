import { useState } from 'react';
import Layout from "../components/Layout";
import CheckoutProductCard from "../components/CheckoutProductCard";
import Summary from "../components/Summary";
import { Product } from "../interfaces/Product";


const dummyProducts: Product[] = [
  {
    id: 1,
    images: ['https://via.placeholder.com/80'],
    title: 'Product 1',
    price: 20,
    quantity: 1,
    category: { id: 1 },
  },
  {
    id: 2,
    images: ['https://via.placeholder.com/80'],
    title: 'Product 2',
    price: 35,
    quantity: 2,
    category: { id: 2 },
  },
];

const Checkout: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(dummyProducts);

  const handleQuantityChange = (id: number, delta: number) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, quantity: Math.max((product.quantity ?? 0) + delta, 1) }
        : product
    ));
  };

  const handleRemove = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const subtotal = products.reduce((sum, product) => sum + product.price * (product.quantity ?? 0), 0);
  const shoppingCosts = products.length ? 10 : 0;
  const total = subtotal + shoppingCosts;

  return (
    <Layout>
      <div className="px-20 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className='mr-20'>
          <p className="font-semibold text-4xl leading-10 text-custom-dark pb-8">Checkout</p>
          <div className="space-y-4">
            {products.map(product => (
              <CheckoutProductCard
                key={product.id}
                product={product}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </div>
        </div>

        <div className='ml-20'>
          <Summary
            subtotal={subtotal}
            shoppingCosts={shoppingCosts}
            total={total}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;