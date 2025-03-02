import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "./Skeletons/ProductCardSkeleton";
import { Product, ProductGridProps } from "../interfaces/Product";
import { getProducts } from "../services/productService";

const ProductGrid: React.FC<ProductGridProps> = ({
  categoryId,
  searchQuery,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const gridClasses =
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4";

  useEffect(() => {
    setLoading(true);
    getProducts({ categoryId, searchQuery, offset: 0, limit: 8 })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [categoryId, searchQuery]);

  return (
    <section aria-label="Product Grid" className={gridClasses}>
      {loading
        ? Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </section>
  );
};

export default ProductGrid;
