import { useState, ChangeEvent, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "./Button";
import {
  createProduct,
  editProduct,
  getProduct,
  uploadFile,
} from "../services/productService";
import { Product } from "../interfaces/Product";
import { extractErrorMessage } from "../utils/helpers";
import { resetProductForm } from "../hooks/resetProductForm";

const ProductDetail: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    return () => {
      if (imagePreview && !imagePreview.startsWith("http")) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  useEffect(() => {
    if (!productId) return;
    const fetchProduct = async () => {
      try {
        const product: Product = await getProduct(Number(productId));
        setTitle(product.title);
        setPrice(product.price.toString());
        if (product.images?.length) {
          setImagePreview(product.images[0]);
          setImageUrl(product.images[0]);
        }
      } catch (err) {
        toast.error("Error retrieving product details.");
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (imagePreview && !imagePreview.startsWith("http")) {
      URL.revokeObjectURL(imagePreview);
    }
    setImageFile(file);
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
    setImageUrl(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageFile && !imageUrl) return setError("Product image is required.");
    if (!title.trim()) return setError("Product name is required.");
    if (!price.trim()) return setError("Price is required.");
    setError("");

    try {
      setIsSubmitting(true);
      let finalImageUrl = imageUrl;
      if (imageFile) {
        try {
          const uploadResponse = await uploadFile(imageFile);
          finalImageUrl = uploadResponse.location;
        } catch (err) {
          toast.error("Failed to upload image. Using placeholder image.");
          finalImageUrl = "https://via.placeholder.com/150";
          console.error("Error uploading image:", err);
        }
      }

      const productData = {
        title,
        price: Number(price),
        description: "New product",
        categoryId: 1,
        images: [finalImageUrl ?? "https://via.placeholder.com/150"],
      };

      if (productId) {
        await editProduct(Number(productId), productData);
        toast.success("Product successfully updated.");
        navigate("/admin");
      } else {
        await createProduct(productData);
        toast.success("Product successfully created.");
        resetProductForm({
          imagePreview,
          setImagePreview,
          setImageFile,
          setImageUrl,
          setTitle,
          setPrice,
          setError,
          fileInputRef,
        });
      }
    } catch (err: any) {
      const action = productId ? "updating" : "saving";
      const msg = extractErrorMessage(err, `Error ${action} product.`);
      toast.error(msg);
      console.error(`Error ${action} product:`, err);
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    resetProductForm({
      imagePreview,
      setImagePreview,
      setImageFile,
      setImageUrl,
      setTitle,
      setPrice,
      setError,
      fileInputRef,
    });
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
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Product"
                  crossOrigin="anonymous"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
            <label className="px-8 py-3 rounded-full transition-colors duration-200 font-medium text-base bg-custom-blue text-white cursor-pointer">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
                required
              />
              {imagePreview ? "MODIFY" : "UPLOAD IMAGE"}
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
          <Button
            type="submit"
            text={isSubmitting ? "SAVING..." : "SAVE"}
            variant="tonal"
          />
          <Button
            onClick={handleCancel}
            type="button"
            text="CANCEL"
            variant="outlined"
          />
        </div>
      </div>
    </form>
  );
};

export default ProductDetail;
