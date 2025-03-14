import { Component, HostListener, EventEmitter, Output, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
  @Output() ejercicioSeleccionado = new EventEmitter<{ titulo: string, descripcion: string }>();

  @Input() userName: string = '';

  isSubmenuVisible = false;
  ejercicios = Array.from({ length: 12 }, (_, index) => index + 1);
  ejercicioSelecion = [
    { titulo: 'Ejercicio 1', descripcion: 'Descripción del ejercicio 1' },
    { titulo: 'Ejercicio 2', descripcion: 'Descripción del ejercicio 2' },
    { titulo: 'Ejercicio 3', descripcion: 'Descripción del ejercicio 3' },
    { titulo: 'Ejercicio 4', descripcion: 'Descripción del ejercicio 4' },
    { titulo: 'Ejercicio 5', descripcion: 'Descripción del ejercicio 5' },
    { titulo: 'Ejercicio 6', descripcion: 'Descripción del ejercicio 6' },
    { titulo: 'Ejercicio 7', descripcion: 'Descripción del ejercicio 7' },
    { titulo: 'Ejercicio 8', descripcion: 'Descripción del ejercicio 8' },
    { titulo: 'Ejercicio 9', descripcion: 'Descripción del ejercicio 9' },
    { titulo: 'Ejercicio 10', descripcion: 'Descripción del ejercicio 10' },
    { titulo: 'Ejercicio 11', descripcion: 'Descripción del ejercicio 11' },
    { titulo: 'Ejercicio 12', descripcion: 'Descripción del ejercicio 12' }
  ];

  constructor(private router: Router) {} // Inyecta el Router

  toggleSubmenu(event: Event) {
    event.stopPropagation();
    this.isSubmenuVisible = !this.isSubmenuVisible;
  }

  onEjercicioClick(event: Event, ejercicio: { titulo: string, descripcion: string }) {
    event.stopPropagation();
    this.ejercicioSeleccionado.emit(ejercicio);
    this.isSubmenuVisible = false;
  }


  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.relative')) {
      this.isSubmenuVisible = false;
    }
  }

  onLogout() {
    this.logout.emit(); // Emitir el evento para que el AppComponent lo capture
    this.router.navigate(['/page0']); // Redirige a la página page0
  }
  
}
