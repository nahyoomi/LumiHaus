import { Dispatch, SetStateAction } from "react";

export const resetProductForm = (
  setImage: Dispatch<SetStateAction<string | null>>,
  setTitle: Dispatch<SetStateAction<string>>,
  setPrice: Dispatch<SetStateAction<string>>,
  setError: Dispatch<SetStateAction<string>>,
): void => {
  setImage(null);
  setTitle("");
  setPrice("");
  setError("");
};