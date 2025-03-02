import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import AdminHeader from "../components/AdminHeader";
import ProductTable from "../components/ProductTable";
import { Product } from "../interfaces/Product";
import { getProducts } from "../services/productService";

const Admin: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const newProducts = await getProducts({});
        setProducts(newProducts);
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <Layout>
      <div className="p-4 lg:px-20 bg-transparent text-black hover:bg-transparentpx-8  rounded-full transition-colors duration-200 font-medium text-base leading-6">
        <AdminHeader title="Products" renderComponet="products" />
        <ProductTable products={products} loading={loading} />
      </div>
    </Layout>
  );
};

export default Admin;
