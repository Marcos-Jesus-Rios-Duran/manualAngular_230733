import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../Components/page-container/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = '';
  @Output() loginSuccess: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {} // Inyecta el Router

  login() {
    if (this.name.trim()) {
      this.loginSuccess.emit(this.name);

      // Redirige a la página page0 después de iniciar sesión
      this.router.navigate(['/page0']);
    }
  }
}
