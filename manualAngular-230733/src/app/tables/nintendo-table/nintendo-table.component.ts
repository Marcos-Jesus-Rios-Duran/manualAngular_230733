import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nintendo-table',
  templateUrl: './nintendo-table.component.html',
  styleUrls: ['./nintendo-table.component.css'],
  imports: [CommonModule],
  standalone: true, // Si estás usando Angular 17+ con standalone components
})
export class NintendoTableComponent implements OnInit {
  data = [
    {
      meta_score: 85,
      title: "Pikmin 3 Deluxe",
      platform: "Switch",
      date: "Oct 30, 2020",
      user_score: 8.7,
      link: "/game/switch/pikmin-3-deluxe",
      esrb_rating: "E",
      developers: ["Nintendo"],
      genres: ["Strategy", "Real-Time", "General"]
    },
    {
      meta_score: null,
      title: "Super Mario RPG",
      platform: "Switch",
      date: "Nov 17, 2023",
      user_score: null,
      link: "/game/switch/super-mario-rpg",
      esrb_rating: "E",
      developers: ["Nintendo"],
      genres: ["Role-Playing", "Japanese-Style"]
    },
    // Añade más datos manualmente o carga desde un JSON
  ];

  filteredData = this.data.slice(); // Datos filtrados
  paginatedData = this.data.slice(); // Datos paginados
  pageSize = 5; // Cantidad de datos a mostrar por defecto
  disabledRows: number[] = []; // Filas desactivadas por checkbox

  sortDirection: { [key: string]: 'asc' | 'desc' | 'none' } = {
    meta_score: 'none',
    title: 'none',
    platform: 'none',
    date: 'none',
    user_score: 'none',
    link: 'none',
    esrb_rating: 'none',
    developers: 'none',
    genres: 'none'
  };

  ngOnInit() {
    this.paginateData(); // Aplica el valor por defecto al inicio
  }

  // Filtra la tabla según el texto ingresado
  filterTable(event: Event) {
    const input = event.target as HTMLInputElement;
    const filter = input.value.toLowerCase();
    this.filteredData = this.data.filter(item =>
      (item.meta_score !== null && item.meta_score.toString().includes(filter)) ||
      (item.title !== null && item.title.toLowerCase().includes(filter)) ||
      (item.platform !== null && item.platform.toLowerCase().includes(filter)) ||
      (item.date !== null && item.date.toLowerCase().includes(filter)) ||
      (item.user_score !== null && item.user_score.toString().includes(filter)) ||
      (item.link !== null && item.link.toLowerCase().includes(filter)) ||
      (item.esrb_rating !== null && item.esrb_rating.toLowerCase().includes(filter)) ||
      (item.developers !== null && item.developers.join(', ').toLowerCase().includes(filter)) ||
      (item.genres !== null && item.genres.join(', ').toLowerCase().includes(filter))
    );
    this.paginateData(); // Actualiza los datos paginados
  }

  // Ordena la tabla según la columna seleccionada
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
      this.filteredData = this.data.slice(); // Restablece al orden original
      this.sortDirection[column] = 'none';
    }
    this.paginateData(); // Actualiza los datos paginados
  }

  // Cambia la cantidad de datos a mostrar
  changePageSize(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.pageSize = parseInt(select.value);
    this.paginateData(); // Actualiza los datos paginados
  }

  // Pagina los datos según el tamaño de página seleccionado
  paginateData() {
    this.paginatedData = this.filteredData.slice(0, this.pageSize);
  }

  // Desactiva o activa una fila
  toggleRow(index: number) {
    if (this.disabledRows.includes(index)) {
      this.disabledRows = this.disabledRows.filter(i => i !== index);
    } else {
      this.disabledRows.push(index);
    }
  }
}