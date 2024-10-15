import { Component, inject, Signal, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  ngOnInit(){
    this.productService.getProducts().subscribe({next:(products) => {
      this.products.set(products);
  },
error:(error)=>{
  console.error('Error fetching products', error);

}});
  }

  products = signal<Array<IProduct>>([]);
  cart:Signal<Array<IProduct>> = this.cartService.cart
  constructor() {
    
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product)
  }
}
