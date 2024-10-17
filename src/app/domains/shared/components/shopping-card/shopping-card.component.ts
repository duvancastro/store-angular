
import { Component, inject, Input, Signal, Output, EventEmitter } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IProduct } from "@shared/models/product.model";
import { CartService } from "@shared/services/cart.service";


@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.css',
})
export class ShoppingCardComponent {
  private cartService = inject(CartService);
  @Input({ required: true }) showCart!: Signal<boolean>;
  @Output() removeFromCart = new EventEmitter();
  productsInCart:Signal<Array<IProduct>>=this.cartService.cart
  total:Signal<number> = this.cartService.total;

  hidden() {
    this.removeFromCart.emit();
  }
  removeProduct(product:IProduct){
    this.cartService.removeFromCart(product);
  }

}
