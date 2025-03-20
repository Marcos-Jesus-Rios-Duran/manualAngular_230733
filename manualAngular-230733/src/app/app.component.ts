import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './Components/page-container/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/page-container/sidebar/sidebar.component';
import { BreadcrumbComponent } from './Components/page-container/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    BreadcrumbComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ManualEjercicios_Angular_230733';
  isLoggedIn: boolean = false;
  userName: string = '';
  isSidebarVisible = false;
  sidebarTitle = '';
  sidebarDescription = '';
  sidebarLoading = true;

  constructor(private router: Router) {
    // Verifica el estado de autenticación en cada cambio de ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkAuthentication();
        this.resetSidebar();
      }
    });
  }

  ngOnInit() {
    this.checkAuthentication();
  }

  // Verifica si el usuario está autenticado
  checkAuthentication() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
      const storedUserName = localStorage.getItem('userName');
      this.isLoggedIn = storedIsLoggedIn === 'true';
      this.userName = storedUserName || '';

      // Si no está autenticado, redirige al login
      if (!this.isLoggedIn && this.router.url !== '/login') {
        this.router.navigate(['/login']);
      }
    }
  }

  // Reinicia el contenido del sidebar
  resetSidebar() {
    this.sidebarTitle = '';
    this.sidebarDescription = '';
    this.sidebarLoading = true;
    this.isSidebarVisible = false;
  }

  onLoginSuccess(name: string) {
    this.isLoggedIn = true;
    this.userName = name;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', name);
    this.router.navigate(['/page0']); // Redirige a la página principal después del login
  }

  onLogout() {
    this.isLoggedIn = false;
    this.userName = '';
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']); // Redirige al login después del logout
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  onRouteChange(componentInstance: any) {
    if (componentInstance.updateSidebar) {
      componentInstance.updateSidebar.subscribe((data: { title: string, description: string }) => {
        this.sidebarTitle = data.title;
        this.sidebarDescription = data.description;
        this.sidebarLoading = false;
      });
    }
  }

  onEjercicioSeleccionado(ejercicio: { titulo: string, descripcion: string }) {
    this.sidebarTitle = ejercicio.titulo;
    this.sidebarDescription = ejercicio.descripcion;
    this.sidebarLoading = false;
  }
}