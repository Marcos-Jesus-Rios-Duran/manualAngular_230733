import { Component ,Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejercicio-06',
  templateUrl: './ejercicio-06.component.html',
  styleUrls: ['./ejercicio-06.component.css']
})
export class Ejercicio06Component {
  isEditable = false;

  toggleEditable() {
    this.isEditable = !this.isEditable;
  }
  @Output() updateSidebar = new EventEmitter<{ title: string, description: string }>();

  ngOnInit(): void {
    this.updateSidebar.emit({ title: 'Ejercicio 06', description: 'Descripción del ejercicio 06' });
  }
}
