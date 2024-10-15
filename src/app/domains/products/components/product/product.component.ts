import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../../shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ReversePipe, TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!:IProduct

  @Output() addToCart = new EventEmitter();
ngOnChanges(changes: SimpleChanges){
  if(changes['product']){
    console.log('Product changed', this.product);
  }
 
}
  addToCartHandler() {
    console.log('click form child');
    this.addToCart.emit(this.product)}
}
