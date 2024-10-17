import { CommonModule } from '@angular/common';
import { Component,  inject,  Input, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IProduct } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {
  @Input()id?:string
  private productService = inject(ProductService);
  product = signal<IProduct | null>(null);
  cover = signal('');
  private cartService = inject(CartService);
  ngOnInit() {
    if (this.id) {
      this.productService.getOneProduct(this.id)
      .subscribe({
        next: (product:IProduct) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0])
          }
        }
      })
    }
    
  }

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }


}
