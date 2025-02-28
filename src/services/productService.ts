import axios, { AxiosError } from 'axios';
import { Product, FetchProductsParams } from '../interfaces/Product';

const API_URL: string = import.meta.env.VITE_API_URL;

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
    const { data } = await axios.get<Product[]>(API_URL, { params });
    return data;
  } catch (error) {
    console.error('Error fetching products:', (error as AxiosError).response?.data);
    throw error;
  }
};