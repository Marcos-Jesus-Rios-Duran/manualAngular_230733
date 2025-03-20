import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sessions-table',
  templateUrl: './sessions-table.component.html',
  styleUrls: ['./sessions-table.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class SessionsTableComponent implements OnInit {
  data: any[] = []; // Datos completos de la API
  filteredData: any[] = []; // Datos filtrados
  paginatedData: any[] = []; // Datos paginados
  pageSize = 5; // Cantidad de datos a mostrar por defecto
  currentPage = 1; // Página actual
  showActiveOnly = false; // Checkbox para mostrar solo sesiones activas
  sortDirection: { [key: string]: 'asc' | 'desc' | 'none' } = {
    nickname: 'none',
    email: 'none',
    status: 'none',
    createdAt: 'none',
    lastAccessed: 'none',
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData(); // Obtener datos iniciales
    setInterval(() => this.fetchData(), 5000); // Actualizar cada 3 segundos
  }

  // Obtener datos de la API
  fetchData() {
    const url = this.showActiveOnly
      ? 'http://10.10.62.28:3000/allCurrentSessions'
      : 'http://10.10.62.28:3000/allSessions';

    this.http.get(url).subscribe((response: any) => {
      this.data = response.sessions;
      this.filteredData = this.data.slice();
      this.paginateData();
    });
  }

  // Filtra la tabla según el texto ingresado
  filterTable(event: Event) {
    const input = event.target as HTMLInputElement;
    const filter = input.value.toLowerCase();
    this.filteredData = this.data.filter(
      (item) =>
        item.nickname.toLowerCase().includes(filter) ||
        item.email.toLowerCase().includes(filter) ||
        item.status.toLowerCase().includes(filter)
    );
    this.currentPage = 1; // Reinicia a la primera página después de filtrar
    this.paginateData(); // Actualiza los datos paginados
  }

  // Ordena la tabla según la columna seleccionada
  sortTable(column: string) {
    if (this.sortDirection[column] === 'none' || this.sortDirection[column] === 'desc') {
      this.filteredData.sort((a, b) => {
        const aValue = a[column];
        const bValue = b[column];
        if (aValue === null || bValue === null) return 0;
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return aValue.localeCompare(bValue);
        }
        return (aValue as number) - (bValue as number);
      });
      this.sortDirection[column] = 'asc';
    } else if (this.sortDirection[column] === 'asc') {
      this.filteredData.sort((a, b) => {
        const aValue = a[column];
        const bValue = b[column];
        if (aValue === null || bValue === null) return 0;
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return bValue.localeCompare(aValue);
        }
        return (bValue as number) - (aValue as number);
      });
      this.sortDirection[column] = 'desc';
    } else {
      this.filteredData = this.data.slice(); // Restablece al orden original
      this.sortDirection[column] = 'none';
    }
    this.currentPage = 1; // Reinicia a la primera página después de ordenar
    this.paginateData(); // Actualiza los datos paginados
  }

  // Cambia la cantidad de datos a mostrar
  changePageSize(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.pageSize = parseInt(select.value);
    this.currentPage = 1; // Reinicia a la primera página después de cambiar el tamaño
    this.paginateData(); // Actualiza los datos paginados
  }

  // Pagina los datos según el tamaño de página seleccionado
  paginateData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.filteredData.slice(startIndex, endIndex);
  }

  // Navega a la página anterior
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateData();
    }
  }

  // Navega a la página siguiente
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateData();
    }
  }

  // Calcula el número total de páginas
  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  // Alternar entre mostrar solo sesiones activas o todas
  toggleActiveSessions() {
    this.showActiveOnly = !this.showActiveOnly;
    this.fetchData(); // Vuelve a obtener los datos según el estado del checkbox
  }
}