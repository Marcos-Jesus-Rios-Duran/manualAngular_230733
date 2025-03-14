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

  @Input() userName: string = '';

  isSubmenuVisible = false;
  ejercicios = Array.from({ length: 12 }, (_, index) => index + 1);

  constructor(private router: Router) {} // Inyecta el Router

  toggleSubmenu(event: Event) {
    event.stopPropagation();
    this.isSubmenuVisible = !this.isSubmenuVisible;
  }

  onEjercicioClick(event: Event) {
    event.stopPropagation();
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
