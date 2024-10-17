
import { Component, inject, Input, signal, Signal, SimpleChange } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { ProductComponent } from '@products/components/product/product.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { IProduct, ICategory } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { CategoryService } from '@shared/services/category.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ProductComponent,
    HeaderComponent,
    RouterLinkWithHref
],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export default class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
@Input({required:false})category_id?:string

  products = signal<Array<IProduct>>([]);
  categories = signal<Array<ICategory>>([]);
  cart: Signal<Array<IProduct>> = this.cartService.cart;
  constructor() {}
  ngOnInit() {
    this.getCatergories();
  }

  ngOnChanges(changes:SimpleChange){
    this.getProducts();
  }
  
  getProducts() {
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error('Error fetching products', error);
      },
    });
  }

  getCatergories() {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: (error) => {
        console.error('Error fetching categories', error);
      },
    });
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
}
