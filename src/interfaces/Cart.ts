export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartModalProps {
  onClose: () => void;
  products: Product[];
  total: number;
}