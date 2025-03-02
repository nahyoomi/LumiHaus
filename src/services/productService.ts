import axios, { AxiosError } from 'axios';
import { Product, FetchProductsParams } from '../interfaces/Product';

const BASE_URL = import.meta.env.VITE_API_URL;

const addParam = (params: Record<string, string>, key: string, value?: number | string) => {
  if (value !== undefined) {
    params[key] = value.toString();
  }
};

export const getProducts = async ({ categoryId, searchQuery, offset, limit }: FetchProductsParams): Promise<Product[]> => {
  const params: Record<string, string> = {};

  addParam(params, 'categoryId', categoryId);
  addParam(params, 'title', searchQuery);
  addParam(params, 'offset', offset);
  addParam(params, 'limit', limit);

  try {
    const { data } = await axios.get<Product[]>(`${BASE_URL}/products`, { params });
    return data;
  } catch (error) {
    console.error('Error fetching products:', (error as AxiosError).response?.data);
    throw error;
  }
};

export const createProduct = async (productData: {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}): Promise<Product> => {
  try {
    const { data } = await axios.post<Product>(
      `${BASE_URL}/products`,
      productData,
      { headers: { "Content-Type": "application/json" } }
    );
    return data;
  } catch (error) {
    console.error('Error creating product:', (error as AxiosError).response?.data);
    throw error;
  }
};

export const deleteProduct = async (productId: number): Promise<void> => {
  try {
    await axios.delete<void>(`${BASE_URL}/products/${productId}`);
  } catch (error) {
    console.error('Error deleting product:', (error as AxiosError).response?.data);
    throw error;
  }
}

export const editProduct = async (productId: number, productData: {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}): Promise<Product> => {
  try {
    const { data } = await axios.put<Product>(
      `${BASE_URL}/products/${productId}`,
      productData,
      { headers: { "Content-Type": "application/json" } }
    );
    return data;
  } catch (error) {
    console.error('Error updating product:', (error as AxiosError).response?.data);
    throw error;
  }
}

export const getProduct = async (productId: number): Promise<Product> => {
  try {
    const { data } = await axios.get<Product>(`${BASE_URL}/products/${productId}`);
    return data;
  } catch (error) {
    console.error('Error fetching product:', (error as AxiosError).response?.data);
    throw error;
  }
}
