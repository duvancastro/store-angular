import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICategory } from '@shared/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient)

  constructor() { }
  getCategories():Observable<Array<ICategory>>{
    return this.http.get<Array<ICategory>>(' https://api.escuelajs.co/api/v1/categories')
  }
}
