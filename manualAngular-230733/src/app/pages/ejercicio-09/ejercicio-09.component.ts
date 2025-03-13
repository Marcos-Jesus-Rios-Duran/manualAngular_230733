// archivo: ejercicio-09.component.ts
import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-ejercicio-09',
  standalone: true,
  templateUrl: './ejercicio-09.component.html',
  imports:[ChildComponent],
  styleUrls: ['./ejercicio-09.component.css']
})
export class Ejercicio09Component {
  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }
}
