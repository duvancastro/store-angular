
export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: Array<string>;
  creationAt: string;
  updatedAt: string;
}
export type ICreateProduct = Omit<IProduct,'id'|'creationAt'|'updatedAt'|'category'>

export type IUpdateProduct = Partial<ICreateProduct>
