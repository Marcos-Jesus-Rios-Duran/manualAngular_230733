import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definimos una interfaz para los jugadores
interface Player {
  name: string;
  age: number;
  position: string;
  nationality: string;
  years_in_club: string;
  goals: number;
}

@Component({
  selector: 'app-barcatable',
  imports: [CommonModule],
  templateUrl: './barcatable.component.html',
  styleUrl: './barcatable.component.css'
})
export class BarcatableComponent implements OnInit {
  // Datos reducidos a los primeros 4 jugadores
  data: Player[] = [
    {
      "name": "Lionel Messi",
      "age": 36,
      "position": "Forward",
      "nationality": "Argentina",
      "years_in_club": "2000-2021",
      "goals": 672
    },
    {
      "name": "Ronaldinho",
      "age": 44,
      "position": "Midfielder",
      "nationality": "Brazil",
      "years_in_club": "2003-2008",
      "goals": 94
    },
    {
      "name": "Luis Suárez",
      "age": 37,
      "position": "Forward",
      "nationality": "Uruguay",
      "years_in_club": "2014-2020",
      "goals": 198
    },
    {
      "name": "Neymar Jr.",
      "age": 32,
      "position": "Forward",
      "nationality": "Brazil",
      "years_in_club": "2013-2017",
      "goals": 105
    }
  ];

  filteredData = this.data.slice();
  paginatedData = this.data.slice();
  pageSize = 5;
  currentPage = 1;
  disabledRows: number[] = [];
  sortDirection: { [key: string]: 'asc' | 'desc' | 'none' } = {
    name: 'none',
    age: 'none',
    position: 'none',
    nationality: 'none',
    years_in_club: 'none',
    goals: 'none'
  };

  ngOnInit(): void {
    this.filteredData = this.data.slice();
    this.paginateData();
  }

  // Función para filtrar la tabla
  filterTable(event: Event) {
    const input = event.target as HTMLInputElement;
    const filter = input.value.toLowerCase();
    this.filteredData = this.data.filter(item =>
      item.name?.toLowerCase().includes(filter) ||
      item.age?.toString().includes(filter) ||
      item.position?.toLowerCase().includes(filter) ||
      item.nationality?.toLowerCase().includes(filter) ||
      item.years_in_club?.toLowerCase().includes(filter) ||
      item.goals?.toString().includes(filter)
    );
    this.currentPage = 1;
    this.paginateData();
  }

  // Función para ordenar la tabla
  sortTable(column: string) {
    if (this.sortDirection[column] === 'none' || this.sortDirection[column] === 'desc') {
      this.filteredData.sort((a, b) => {
        const aValue = a[column as keyof typeof a];
        const bValue = b[column as keyof typeof b];
        if (aValue === null || bValue === null) return 0;
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return aValue.localeCompare(bValue);
        }
        return (aValue as number) - (bValue as number);
      });
      this.sortDirection[column] = 'asc';
    } else if (this.sortDirection[column] === 'asc') {
      this.filteredData.sort((a, b) => {
        const aValue = a[column as keyof typeof a];
        const bValue = b[column as keyof typeof b];
        if (aValue === null || bValue === null) return 0;
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return bValue.localeCompare(aValue);
        }
        return (bValue as number) - (aValue as number);
      });
      this.sortDirection[column] = 'desc';
    } else {
      this.filteredData = this.data.slice();
      this.sortDirection[column] = 'none';
    }
    this.currentPage = 1;
    this.paginateData();
  }

  // Función para cambiar el tamaño de la página
  changePageSize(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.pageSize = parseInt(select.value);
    this.currentPage = 1;
    this.paginateData();
  }

  // Función para ir a la página anterior
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateData();
    }
  }

  // Función para ir a la página siguiente
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateData();
    }
  }

  // Propiedad para calcular el número total de páginas
  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  // Función para desactivar o activar una fila
  toggleRow(index: number) {
    if (this.disabledRows.includes(index)) {
      this.disabledRows = this.disabledRows.filter(i => i !== index);
    } else {
      this.disabledRows.push(index);
    }
  }

  // Función para paginar los datos
  paginateData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.filteredData.slice(startIndex, endIndex);
  }
}