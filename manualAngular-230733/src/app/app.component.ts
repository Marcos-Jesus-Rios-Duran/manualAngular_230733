import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { PageContainerComponent } from './Components/page-container/page-container.component';
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
    PageContainerComponent,
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
  isSidebarVisible = true;
  sidebarTitle = '';
  sidebarDescription = '';
  sidebarLoading = true; // Agrega la bandera de carga

  constructor(private router: Router) {
    // Listen to router events to update sidebar content
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Reset the sidebar content on route change
        this.sidebarTitle = '';
        this.sidebarDescription = '';
        this.sidebarLoading = true; // Activa la carga al cambiar de ruta
      }
    });
  }

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
      const storedUserName = localStorage.getItem('userName');
      this.isLoggedIn = storedIsLoggedIn === 'true';
      this.userName = storedUserName || '';
    }
  }

  onLoginSuccess(name: string) {
    this.isLoggedIn = true;
    this.userName = name;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', name);
  }

  onLogout() {
    this.isLoggedIn = false;
    this.userName = '';
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  onRouteChange(componentInstance: any) {
    if (componentInstance.updateSidebar) {
      componentInstance.updateSidebar.subscribe((data: { title: string, description: string }) => {
        this.sidebarTitle = data.title;
        this.sidebarDescription = data.description;
        this.sidebarLoading = false; // Desactiva la carga al recibir los datos
      });
    }
  }
}
