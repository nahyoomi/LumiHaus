import { Dispatch, SetStateAction, RefObject } from "react";
interface ResetProductFormParams {
  imagePreview: string | null;
  setImagePreview: Dispatch<SetStateAction<string | null>>;
  setImageFile: Dispatch<SetStateAction<File | null>>;
  setImageUrl: Dispatch<SetStateAction<string | null>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setPrice: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
  fileInputRef: RefObject<HTMLInputElement | null>;
}

export const resetProductForm = ({
  imagePreview,
  setImagePreview,
  setImageFile,
  setImageUrl,
  setTitle,
  setPrice,
  setError,
  fileInputRef,
}: ResetProductFormParams): void => {
  if (imagePreview && !imagePreview.startsWith("http")) {
    URL.revokeObjectURL(imagePreview);
  }

  setImagePreview(null);
  setImageFile(null);
  setImageUrl(null);
  setTitle("");
  setPrice("");
  setError("");

  if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }
};
