export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    category: { id: number };
}

export interface ProductCardProps {
    product: Product;
}

export interface FetchProductsParams {
    categoryId?: number;
    searchQuery?: string;
    offset?: number;
    limit?: number;
}

export interface ProductGridProps {
  categoryId?: number;
  searchQuery?: string;
}