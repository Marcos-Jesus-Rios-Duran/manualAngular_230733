import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-04',
  templateUrl: './ejercicio-04.component.html',
  styleUrls: ['./ejercicio-04.component.css']
})
export class Ejercicio04Component implements OnInit {
  isServerRunning = false;
  isLoggedIn = false;

  @Output() updateSidebar = new EventEmitter<{ title: string, description: string }>();

  ngOnInit(): void {
    this.updateSidebar.emit({ title: 'Ejercicio 04', description: 'Descripción del ejercicio 04' });
  }
}
