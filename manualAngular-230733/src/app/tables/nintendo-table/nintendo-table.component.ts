import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-nintendo-table',
  templateUrl: './nintendo-table.component.html',
  styleUrls: ['./nintendo-table.component.css'],
  imports: [CommonModule],
  standalone: true, // Si estás usando Angular 17+ con standalone components
})
export class NintendoTableComponent implements OnInit {
  data: any[] = []; // Almacena los datos del CSV
  filteredData: any[] = []; // Datos filtrados
  paginatedData: any[] = []; // Datos paginados
  pageSize = 10; // Cantidad de datos a mostrar por defecto
  currentPage = 1; // Página actual
  totalPages = 1; // Total de páginas
  showMetaScore = true; // Mostrar u ocultar la columna meta_score
  showTitle = true; // Mostrar u ocultar la columna title

  sortDirection: { [key: string]: 'asc' | 'desc' | 'none' } = {
    meta_score: 'none',
    title: 'none',
    platform: 'none',
    date: 'none',
    user_score: 'none',
    esrb_rating: 'none',
    developers: 'none',
    genres: 'none',
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadCSVData();
  }

  // Carga los datos del archivo CSV
  loadCSVData() {
    this.http.get('/assets/NintendoGames.csv', { responseType: 'text' }).subscribe(
      (csvData) => {
        Papa.parse(csvData, {
          header: true, // Usa la primera fila como nombres de columnas
          skipEmptyLines: true,
          complete: (result) => {
            this.data = result.data.slice(0, 200); // Limita a 200 registros
            this.filteredData = this.data.slice(); // Inicializa los datos filtrados
            this.calculateTotalPages(); // Calcula el total de páginas
            this.paginateData(); // Pagina los datos
          },
        });
      },
      (error) => {
        console.error('Error al cargar el archivo CSV:', error);
      }
    );
  }

  // Filtra la tabla según el texto ingresado
  filterTable(event: Event) {
    const input = event.target as HTMLInputElement;
    const filter = input.value.toLowerCase();
    this.filteredData = this.data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(filter)
  );
    this.calculateTotalPages(); // Recalcula el total de páginas
    this.currentPage = 1; // Reinicia a la primera página
    this.paginateData(); // Actualiza los datos paginados
  }

  // Ordena la tabla según la columna seleccionada
  sortTable(column: string) {
    if (this.sortDirection[column] === 'none' || this.sortDirection[column] === 'desc') {
      this.filteredData.sort((a, b) => (a[column] || '').localeCompare(b[column] || ''));
      this.sortDirection[column] = 'asc';
    } else if (this.sortDirection[column] === 'asc') {
      this.filteredData.sort((a, b) => (b[column] || '').localeCompare(a[column] || ''));
      this.sortDirection[column] = 'desc';
    } else {
      this.filteredData = this.data.slice(); // Restablece al orden original
      this.sortDirection[column] = 'none';
    }
    this.paginateData(); // Actualiza los datos paginados
  }

  // Cambia la cantidad de datos a mostrar
  changePageSize(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.pageSize = parseInt(select.value);
    this.calculateTotalPages(); // Recalcula el total de páginas
    this.currentPage = 1; // Reinicia a la primera página
    this.paginateData(); // Actualiza los datos paginados
  }

  // Calcula el total de páginas
  calculateTotalPages() {
    this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
  }

  // Cambia a la página seleccionada
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginateData();
    }
  }

  // Pagina los datos según el tamaño de página seleccionado
  paginateData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.filteredData.slice(startIndex, endIndex);
  }

  // Oculta o muestra la columna meta_score
  toggleMetaScore() {
    this.showMetaScore = !this.showMetaScore;
  }

  // Oculta o muestra la columna title
  toggleTitle() {
    this.showTitle = !this.showTitle;
  }
}