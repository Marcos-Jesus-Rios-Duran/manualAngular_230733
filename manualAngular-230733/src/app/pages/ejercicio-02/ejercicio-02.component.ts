import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-02',
  templateUrl: './ejercicio-02.component.html',
  styleUrls: ['./ejercicio-02.component.css']
})
export class Ejercicio02Component implements OnInit {
  city = 'La ceiba';
  
  @Output() updateSidebar = new EventEmitter<{ title: string, description: string }>();

  ngOnInit(): void {
    this.updateSidebar.emit({ title: 'Ejercicio 02', description: 'Descripción del ejercicio 02' });
  }
}
