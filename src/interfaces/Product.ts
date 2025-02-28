export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    category: { id: number };
    quantity?: number;
}

export interface ProductCardProps {
    product: Product;
}

export interface CartModalProps {
    onClose: () => void;
    products: Product[] | [];
    total: number;
}

export interface CheckoutProductCardProps {
  product: Product;
  onQuantityChange: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
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

export interface SummaryProps {
    subtotal: number;
    shoppingCosts: number;
    total: number;
}