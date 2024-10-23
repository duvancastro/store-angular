import { HttpClient } from "@angular/common/http"
import { Injectable, inject } from "@angular/core"
import { ICreateProduct, IProduct } from "@shared/models/product.model"
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient)

  constructor() {}
  getProducts(category_id?: string):Observable<Array<IProduct>>{
    const url = new URL(`https://api.escuelajs.co/api/v1/products`);
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<Array<IProduct>>(url.toString());
  }
getOneProduct(id: string):Observable<IProduct>{
  return this.http.get<IProduct>(`https://api.escuelajs.co/api/v1/products/${id}`)

}

createProduct(creteProducto:ICreateProduct):Observable<IProduct>{
  return this.http.post<IProduct>(`https://api.escuelajs.co/api/v1/products`, creteProducto)
}

updateProduct(id: string, updateProducto: IProduct):Observable<IProduct>{
  return this.http.put<IProduct>(`https://api.escuelajs.co/api/v1/products/${id}`, updateProducto)
}

}