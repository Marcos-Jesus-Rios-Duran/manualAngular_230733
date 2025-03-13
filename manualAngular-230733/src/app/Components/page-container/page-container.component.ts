import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { SidebarComponent } from '../../Components/page-container/sidebar/sidebar.component';
import { FooterComponent } from '../../Components/page-container/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-page-container',
  imports: [ NavbarComponent, SidebarComponent, FooterComponent, RouterOutlet, CommonModule, BreadcrumbComponent],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent {
  isSidebarVisible: boolean = true;

  @Input() userName: string = ''; // Recibe el nombre de usuario
  @Output() logout = new EventEmitter<void>(); // Propaga el evento de logout

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  onLogout() {
    this.logout.emit(); // Dispara el evento cuando se haga logout
  }
}
