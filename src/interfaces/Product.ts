export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    category: { id: number };
    quantity?: number;
}

export interface CartContextProps {
    products: Product[];
    total: number;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    changeQuantity: (id: number, delta: number) => void;
    emptyCart: () => void;
    deleteProduct: (id: number) => void;
  }

export interface ProductCardProps {
    product: Product;
}

export interface CartModalProps {
    onClose: () => void;
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
