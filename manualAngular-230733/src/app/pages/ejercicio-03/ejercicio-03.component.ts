import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-03',
  templateUrl: './ejercicio-03.component.html',
  styleUrls: ['./ejercicio-03.component.css']
})
export class Ejercicio03Component implements OnInit {
  username = 'Marcos Jesús Ríos Duran';
  
  @Output() updateSidebar = new EventEmitter<{ title: string, description: string }>();

  ngOnInit(): void {
    this.updateSidebar.emit({ title: 'Ejercicio 03', description: 'Descripción del ejercicio 03' });
  }
}
