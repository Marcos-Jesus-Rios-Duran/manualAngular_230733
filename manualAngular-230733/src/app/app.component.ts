import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageContainerComponent } from "./Components/page-container/page-container.component";
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PageContainerComponent,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ManualEjercicios_Angular_230733';
  isLoggedIn: boolean = false;
  userName: string = '';

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
}
