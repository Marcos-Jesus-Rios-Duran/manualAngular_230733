import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zero-config-component',
  templateUrl: './zero-config-component.component.html',
  imports: [CommonModule],
  styleUrls: ['./zero-config-component.component.css']
})
export class ZeroConfigComponentComponent implements OnInit {
  data = [
    { id: 1, nombre: 'Profe Marco', apellido: 'Ramirez', serie: 'Umbrella Academy' },
    { id: 2, nombre: 'Josue', apellido: 'Martinez', serie: 'Ben 10' },
    { id: 3, nombre: 'Daniela', apellido: 'Lopez', serie: 'Anne' },
    { id: 4, nombre: 'Lore', apellido: 'Galindo', serie: 'Malcolm' },
    { id: 5, nombre: 'Daniel', apellido: 'Bravo', serie: 'Breaking Bad' },
    { id: 6, nombre: 'Antonio', apellido: 'Ocpaco', serie: 'The Walking Dead' },
    { id: 7, nombre: 'Dulce', apellido: 'Balderas', serie: 'The Walking Dead' },
    { id: 8, nombre: 'Bryan', apellido: 'Mendoza', serie: 'La Casa de Papel' },
    { id: 9, nombre: 'Amaury', apellido: 'Romero', serie: 'Drake y Josh' },
    { id: 10, nombre: 'Carlos', apellido: 'Fosado', serie: 'América' },
    { id: 11, nombre: 'Zyanya', apellido: 'Zacatenco', serie: 'Transformers Prime' },
    { id: 12, nombre: 'Karen', apellido: 'Negrete', serie: 'Bones' },
    { id: 13, nombre: 'Uriel', apellido: 'Medina', serie: 'Black Clover' },
    { id: 14, nombre: 'Agustín', apellido: 'Jimenez', serie: 'Berlín' },
    { id: 15, nombre: 'Chris', apellido: 'Rodrigez', serie: 'Luis Miguel' },
    { id: 16, nombre: 'Jonathan', apellido: 'Baldemar', serie: 'Bajoterra' },
    { id: 17, nombre: 'Edgar', apellido: 'Cabrera', serie: 'Daredevil' },
    { id: 18, nombre: 'Juvenal', apellido: 'Viveros', serie: 'Final Space' },
    { id: 19, nombre: 'Teco', apellido: 'Teco', serie: 'Euphoria' },
    { id: 20, nombre: 'Tania', apellido: 'Ibarra', serie: 'Hora de Aventura' },
    { id: 21, nombre: 'Brandom', apellido: 'Leon', serie: 'Legends of Tomorrow' },
    { id: 22, nombre: 'Esther', apellido: 'Peralta', serie: 'La Casa de Papel' },
    { id: 23, nombre: 'Abril', apellido: 'Guzman', serie: 'Jóvenes Altezas' },
    { id: 24, nombre: 'Ángel', apellido: 'Rufino', serie: 'Wandavision' },
    { id: 25, nombre: 'Ida', apellido: 'Vargas', serie: 'Rick y Morty' },
    { id: 26, nombre: 'Osvaldo', apellido: 'Osvaldo', serie: 'Tokyo Ghoul' },
    { id: 27, nombre: 'Marcos', apellido: 'Ríos', serie: 'Game of Thrones' }
  ];

  filteredData = this.data.slice(); // Datos filtrados
  paginatedData = this.data.slice(); // Datos paginados
  pageSize = 5; // Cantidad de datos a mostrar por defecto

  sortDirection: { [key: string]: 'asc' | 'desc' | 'none' } = {
    id: 'none',
    nombre: 'none',
    apellido: 'none',
    serie: 'none'
  };

  ngOnInit() {
    this.paginateData(); // Aplica el valor por defecto al inicio
  }

  // Filtra la tabla según el texto ingresado
  filterTable(event: Event) {
    const input = event.target as HTMLInputElement;
    const filter = input.value.toLowerCase();
    this.filteredData = this.data.filter(item => 
      item.id.toString().includes(filter) || // Filtra por ID
      item.nombre.toLowerCase().includes(filter) || 
      item.apellido.toLowerCase().includes(filter)
    );
    this.paginateData(); // Actualiza los datos paginados
  }

  // Ordena la tabla según la columna seleccionada
  sortTable(column: string) {
    if (this.sortDirection[column] === 'none' || this.sortDirection[column] === 'desc') {
      this.filteredData.sort((a, b) => (a[column as keyof typeof a] as string).localeCompare(b[column as keyof typeof b] as string));
      this.sortDirection[column] = 'asc';
    } else if (this.sortDirection[column] === 'asc') {
      this.filteredData.sort((a, b) => (b[column as keyof typeof b] as string).localeCompare(a[column as keyof typeof a] as string));
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
}