import { Component, EventEmitter, Output } from '@angular/core';
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

  login() {
    if (this.name.trim()) {
      this.loginSuccess.emit(this.name);
    }
  }
}
