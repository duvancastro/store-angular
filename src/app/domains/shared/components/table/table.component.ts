import { Component, signal } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  data = [
    { id: 1, nombre: 'Juan Pérez', correo: 'juan@example.com' },
    { id: 2, nombre: 'María López', correo: 'maria@example.com' },
    { id: 3, nombre: 'Carlos García', correo: 'carlos@example.com' },
    { id: 4, nombre: 'Ana Torres', correo: 'ana@example.com' },
    { id: 5, nombre: 'Luis Fernández', correo: 'luis@example.com' },
    { id: 6, nombre: 'Sofía Ramírez', correo: 'sofia@example.com' },
    { id: 7, nombre: 'José Díaz', correo: 'jose@example.com' },
    { id: 8, nombre: 'Elena Vega', correo: 'elena@example.com' },
    { id: 9, nombre: 'Pedro Ruiz', correo: 'pedro@example.com' },
    { id: 10, nombre: 'Laura Jiménez', correo: 'laura@example.com' },
    { id: 1, nombre: 'Juan Pérez', correo: 'juan@example.com' },
    { id: 2, nombre: 'María López', correo: 'maria@example.com' },
    { id: 3, nombre: 'Carlos García', correo: 'carlos@example.com' },
    { id: 4, nombre: 'Ana Torres', correo: 'ana@example.com' },
    { id: 5, nombre: 'Luis Fernández', correo: 'luis@example.com' },
    { id: 6, nombre: 'Sofía Ramírez', correo: 'sofia@example.com' },
    { id: 7, nombre: 'José Díaz', correo: 'jose@example.com' },
    { id: 8, nombre: 'Elena Vega', correo: 'elena@example.com' },
    { id: 9, nombre: 'Pedro Ruiz', correo: 'pedro@example.com' },
    { id: 10, nombre: 'Laura Jiménez', correo: 'laura@example.com' },
  ];

  itemsPerPage =signal<number>(6); 
  currentPage = 1; 
  paginatedData:Array<Usuario> = [];

  ngOnInit(): void {
    this.updatePaginatedData();
  }

  updatePaginatedData(): void {
    console.log('this.itemsPerPage() :>> ', this.itemsPerPage());
    const start = (this.currentPage - 1) * this.itemsPerPage();
    const end = start + (+this.itemsPerPage())
    this.paginatedData = this.data.slice(start, end);
    console.log('this.paginatedData :>> ', this.paginatedData);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePaginatedData();
  }
  showingItems(showing:number){
  this.itemsPerPage.set(showing)
  this.updatePaginatedData();

  }
}


interface Usuario {
  id: number;
  nombre: string;
  correo: string;
}
