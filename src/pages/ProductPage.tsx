import AdminHeader from "../components/AdminHeader";
import Layout from "../components/Layout";
import ProductDetail from "../components/ProductDetail";

const ProductPage = () => {
  return (
    <Layout>
      <AdminHeader title="Create Product" renderComponet="createProduct" />
      <ProductDetail />
    </Layout>
  );
};

export default ProductPage;
