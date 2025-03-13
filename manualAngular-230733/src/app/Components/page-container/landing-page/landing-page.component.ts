import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  @Output() updateSidebar = new EventEmitter<{ title: string, description: string }>();

  ngOnInit(): void {
    this.updateSidebar.emit({ 
      title: 'Manual Angular', 
      description: 'Este proyecto presenta los ejercicios del manual de prácticas de Angular 🅰️. Abarca desde conceptos básicos hasta técnicas avanzadas, proporcionando ejemplos prácticos que me ayudarán a entender y aplicar los principios de Angular en mis propios proyectos. ¡Es una gran oportunidad para mejorar mis habilidades en desarrollo web con Angular y avanzar en mi aprendizaje!' 
    });
    
  }
}
