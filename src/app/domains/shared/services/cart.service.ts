import { computed, Injectable, signal } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart=signal<Array<IProduct>>([])
  total=computed(() => {
const cart =this.cart();


return cart.reduce(
  (total, product) => total + product.price,
  0
);
  })

  constructor() { }
  addToCart(product: IProduct) {
    this.cart.update(prevCart => [...prevCart, product]);
  }

  removeFromCart(product: IProduct) {
    console.log(this.cart())
    console.log('product :>> ', product);
    this.cart.update(prevCart => prevCart.filter(p => p.id!== product.id));
  }
}
