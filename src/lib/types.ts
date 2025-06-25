export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  imageHint: string;
  ingredients: string[];
  origin: string;
  spiceLevel: 'Mild' | 'Medium' | 'Hot';
}

export interface CartItem {
  product: Product;
  quantity: number;
}
