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
    this.updateSidebar.emit({ title: 'Component Composition: Control Flow en Componentes', description: ' Implementación de lógica de control de flujo para mostrar el estado del servidor y la autenticación del usuario.Aprendi a como usar el @if dentro de angular para mostrar FrontEnd en base a las estructuras de control' });
  }
}
