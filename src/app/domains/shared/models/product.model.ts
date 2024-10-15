
export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
}
