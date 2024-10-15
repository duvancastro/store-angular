import { HttpClient } from "@angular/common/http"
import { Injectable, inject } from "@angular/core"
import { IProduct } from "@shared/models/product.model"

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient)

  constructor() { }
  getProducts(){
  return this.http.get<Array<IProduct>>(' https://api.escuelajs.co/api/v1/products')
}

}