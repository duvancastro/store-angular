import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from '@shared/components/table/table.component';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule,TableComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export default class CreateProductComponent {
  product = {
    title: '',
    price: 0,
    description: '',
    categoryId: 0,
    images: ['']
  };

  onSubmit() {
    console.log('Product Created:', this.product);
    // Aquí puedes enviar el producto a un servicio o API
  }

}
