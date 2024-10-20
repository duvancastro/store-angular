
import {
  Component,
  inject,
  Input,
  Signal,
  signal,
  SimpleChanges,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IProduct } from '../../models/product.model';
import { ProductComponent } from '../../../products/components/product/product.component';
import { ShoppingCardComponent } from '../shopping-card/shopping-card.component';
import { CartService } from '../../services/cart.service';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ProductComponent,
    ShoppingCardComponent,
    RouterLinkWithHref,
    RouterLinkActive
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private cartService = inject(CartService);

  productsInCart: Signal<Array<IProduct>> = this.cartService.cart;

  showCart = signal<boolean>(true);

  toogleSideMenu() {
    console.log('toogleSideMenu');
    this.showCart.update((prevState) => !prevState);
  }
}
