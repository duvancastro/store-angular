import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [ReactiveFormsModule ,FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() totalItems!: number; // Total de ítems
  @Input() itemsPerPage!: number; // Ítems por página
  @Input() maxVisiblePages!: number; // Máximo número de páginas visibles a la vez
  @Input() showItems!: Array<number>; // cantid de los items por página

  @Output() pageChange = new EventEmitter<number>(); // Emite la página seleccionada
  @Output() showing = new EventEmitter<number>(); // Emite la página seleccionada


  currentPage: number = 1;
  totalPages: number = 0;
  visiblePages: number[] = [];

  ngOnInit(): void {
    this.calculateTotalPages()
    this.updateVisiblePages();
  }
  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  }

  updateVisiblePages(): void {
    const half = Math.floor(this.maxVisiblePages / 2);
    let start = Math.max(1, this.currentPage - half);
    let end = Math.min(this.totalPages, start + this.maxVisiblePages - 1);

    if (end - start + 1 < this.maxVisiblePages) {
      start = Math.max(1, end - this.maxVisiblePages + 1);
    }

    this.visiblePages = Array.from(
      { length: end - start + 1 },
      (_, i) => i + start
    );
    console.log('visiblePages :>> ', this.visiblePages);
  }

  goToPage(page: number): void {
    console.log('page :>> ', page);
    this.currentPage = page;
    console.log('currentPage :>> ', this.currentPage);

    this.updateVisiblePages();
    this.pageChange.emit(this.currentPage);
  }
  showingItems(showing:number): void {

    this.itemsPerPage = showing;
    this.currentPage = 1; // Reiniciar a la primera página
    this.calculateTotalPages();
    this.updateVisiblePages();
    this.showing.emit(this.itemsPerPage);
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateVisiblePages();
      this.pageChange.emit(this.currentPage);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateVisiblePages();
      this.pageChange.emit(this.currentPage);
    }
  }
}
