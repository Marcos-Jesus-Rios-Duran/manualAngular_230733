// archivo: ejercicio-09.component.ts
import { Component } from '@angular/core';
@Component({
  selector: 'app-ejercicio-09',
  standalone: true,
  templateUrl: './ejercicio-09.component.html',
  styleUrls: ['./ejercicio-09.component.css']
})
export class Ejercicio09Component {
  items: string[] = [];
  addItem() {
    this.items.push('🐢');
  }
}
