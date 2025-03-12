import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-page-container',
  imports: [ContentComponent,NavbarComponent,SidebarComponent,FooterComponent,RouterOutlet,CommonModule],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent {
  isSidebarVisible: boolean = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}