import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "./Button";
import { createProduct, editProduct, getProduct } from "../services/productService";
import { Product } from "../interfaces/Product";
import { extractErrorMessage } from "../utils/helpers";
import { resetProductForm } from "../hooks/resetProductForm";

const ProductDetail: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        try {
          const product: Product = await getProduct(Number(productId));
          setTitle(product.title);
          setPrice(product.price.toString());
          if (product.images && product.images.length > 0) {
            setImage(product.images[0]);
          }
        } catch (err) {
          toast.error("Error retrieving product details.");
          console.error("Error fetching product:", err);
        }
      };
      fetchProduct();
    }
  }, [productId]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image) return setError("Product image is required.");
    if (!title.trim()) return setError("Product name is required.");
    if (!price.trim()) return setError("Price is required.");
    setError("");

    if (productId) {
      try {
        await editProduct(
          Number(productId),
          {
          title,
          price: Number(price),
          description: "New product",
          categoryId: 1,
          images: [image],
        });
        toast.success("Product successfully updated.");
        navigate("/admin");
      } catch (err: any) {
        const msg = extractErrorMessage(err, "Error updating product.");
        toast.error(msg);
        console.error("Error updating product:", err);
        setError(msg);
      }
    } else {
      try {
        await createProduct({
          title,
          price: Number(price),
          description: "New product",
          categoryId: 1,
          images: ["https://via.placeholder.com/150"],
        });
        toast.success("Product successfully created.");
        resetProductForm(setImage, setTitle, setPrice, setError);
        
      } catch (err: any) {
        const msg = extractErrorMessage(err, "Error saving product.");
        toast.error(msg);
        console.error("Error creating product:", err);
        setError(msg);
      }
    }
  };

  const handleCancel = () => {
    resetProductForm(setImage, setTitle, setPrice, setError);
    navigate("/admin");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4" noValidate>
      <div className="max-w-3xl mt-6 space-y-6 pb-10">
        {error && <div className="text-red-600 font-medium">{error}</div>}

        <fieldset>
          <legend className="font-semibold text-sm mb-4">
            Product Picture
          </legend>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-28 h-28 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
            <label className="px-8 py-3 rounded-full transition-colors duration-200 font-medium text-base bg-custom-blue text-white cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
                required
              />
              {image ? "MODIFY" : "UPLOAD IMAGE"}
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-semibold text-sm mb-4">Product Name</legend>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter product name"
            className="w-full border border-gray-300 p-3 rounded"
            required
          />
        </fieldset>

        <fieldset>
          <legend className="font-semibold text-sm mb-4">Price</legend>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            className="w-full border border-gray-300 p-3 rounded"
            required
          />
        </fieldset>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button type="submit" text="SAVE" variant="tonal" />
          <Button onClick={handleCancel} type="button" text="CANCEL" variant="outlined"/>
        </div>
      </div>
    </form>
  );
};

export default ProductDetail;
