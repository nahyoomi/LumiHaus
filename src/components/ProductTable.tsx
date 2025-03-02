import { useState, useEffect } from "react";
import { Product, ProductTableProps } from "../interfaces/Product";
import { deleteProduct } from "../services/productService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ProductTableSkeleton from "./Skeletons/ProductTableSkeleton";

const ProductTable: React.FC<ProductTableProps> = ({ products, loading }) => {
  const [localProducts, setLocalProducts] = useState<Product[]>(products);
  const navigate = useNavigate();

  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  const handleDelete = async (id: number): Promise<void> => {
    try {
      await deleteProduct(id);
      setLocalProducts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Product successfully deleted.");
    } catch (error: any) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product.");
    }
  };

  if (loading) return <ProductTableSkeleton />;

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <td className="p-2">
              <input type="checkbox" className="w-6 h-6 border" />
            </td>
            <th className="p-2 text-left font-normal text-xs leading-4 tracking-[2px]">
              Name
            </th>
            <th className="p-2 text-left font-normal text-xs leading-4 tracking-[2px]">
              Price
            </th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {localProducts.map((product) => (
            <tr key={product.id} className="border-b border-gray-200 h-[96px]">
              <td className="p-2">
                <input type="checkbox" className="w-6 h-6 border" />
              </td>
              <td className="p-2 flex items-center w-[360px] truncate">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  crossOrigin="anonymous"
                  className="w-10 h-10 rounded mr-2"
                />
                <p className="font-medium text-base leading-6 tracking-[2px] text-custom-dark truncate">
                  {product.title}
                </p>
              </td>
              <td className="p-2 font-medium text-base leading-6 tracking-[2px] text-custom-dark">
                {product.price.toFixed(2)}€
              </td>
              <td className="p-2 space-x-6">
                <button
                  onClick={() => navigate(`/admin/products/edit/${product.id}`)}
                  className="px-2 py-1 font-medium text-base leading-6 tracking-[2px] text-custom-blue"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="py-1 font-medium text-base leading-6 tracking-[2px] text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
