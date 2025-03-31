// barcatable.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Player {
  name: string;
  age: number;
  position: string;
  nationality: string;
  years_in_club: string;
  goals: number;
}

interface SortDirection {
  name: 'asc' | 'desc' | 'none';
  age: 'asc' | 'desc' | 'none';
  position: 'asc' | 'desc' | 'none';
  nationality: 'asc' | 'desc' | 'none';
  years_in_club: 'asc' | 'desc' | 'none';
  goals: 'asc' | 'desc' | 'none';
}

@Component({
  selector: 'app-barcatable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barcatable.component.html',
  styleUrls: ['./barcatable.component.css']
})
export class BarcatableComponent implements OnInit {
  data: Player[] = [
    {
      name: "Lionel Messi",
      age: 36,
      position: "Forward",
      nationality: "Argentina",
      years_in_club: "2000-2021",
      goals: 672
    },
    {
      name: "Ronaldinho",
      age: 44,
      position: "Midfielder",
      nationality: "Brazil",
      years_in_club: "2003-2008",
      goals: 94
    },
    {
      name: "Luis Suárez",
      age: 37,
      position: "Forward",
      nationality: "Uruguay",
      years_in_club: "2014-2020",
      goals: 198
    },
    {
      name: "Neymar Jr.",
      age: 32,
      position: "Forward",
      nationality: "Brazil",
      years_in_club: "2013-2017",
      goals: 105
    },
    {
      name: "Andrés Iniesta",
      age: 39,
      position: "Midfielder",
      nationality: "Spain",
      years_in_club: "2002-2018",
      goals: 57
    },
    {
      name: "Xavi Hernández",
      age: 44,
      position: "Midfielder",
      nationality: "Spain",
      years_in_club: "1998-2015",
      goals: 85
    }
  ];

  filteredData: Player[] = [];
  paginatedData: Player[] = [];
  pageSize = 5;
  currentPage = 1;
  disabledRows: string[] = [];
  sortDirection: SortDirection = {
    name: 'none',
    age: 'none',
    position: 'none',
    nationality: 'none',
    years_in_club: 'none',
    goals: 'none'
  };

  ngOnInit(): void {
    this.filteredData = [...this.data];
    this.paginateData();
  }

  filterTable(event: Event): void {
    const input = event.target as HTMLInputElement;
    const filter = input.value.toLowerCase();
    this.filteredData = this.data.filter(item =>
      item.name.toLowerCase().includes(filter) ||
      item.age.toString().includes(filter) ||
      item.position.toLowerCase().includes(filter) ||
      item.nationality.toLowerCase().includes(filter) ||
      item.years_in_club.toLowerCase().includes(filter) ||
      item.goals.toString().includes(filter)
    );
    this.currentPage = 1;
    this.paginateData();
  }

  sortTable(column: keyof SortDirection): void {
    if (this.sortDirection[column] === 'none' || this.sortDirection[column] === 'desc') {
      this.filteredData.sort((a, b) => {
        const aValue = a[column];
        const bValue = b[column];
        
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return aValue - bValue;
        }
        return String(aValue).localeCompare(String(bValue));
      });
      this.sortDirection[column] = 'asc';
    } else {
      this.filteredData.sort((a, b) => {
        const aValue = a[column];
        const bValue = b[column];
        
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return bValue - aValue;
        }
        return String(bValue).localeCompare(String(aValue));
      });
      this.sortDirection[column] = 'desc';
    }
    this.currentPage = 1;
    this.paginateData();
  }

  changePageSize(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.pageSize = parseInt(select.value);
    this.currentPage = 1;
    this.paginateData();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateData();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateData();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  toggleRow(name: string): void {
    if (this.disabledRows.includes(name)) {
      this.disabledRows = this.disabledRows.filter(n => n !== name);
    } else {
      this.disabledRows.push(name);
    }
  }

  isRowDisabled(name: string): boolean {
    return this.disabledRows.includes(name);
  }

  private paginateData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.filteredData.slice(startIndex, endIndex);
  }
}