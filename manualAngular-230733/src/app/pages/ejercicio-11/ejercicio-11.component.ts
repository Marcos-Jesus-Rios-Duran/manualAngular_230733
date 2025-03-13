import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-ejercicio-11',
  imports: [NgOptimizedImage],
  templateUrl: './ejercicio-11.component.html',
  styleUrl: './ejercicio-11.component.css'
})
export class Ejercicio11Component {
  logoUrl = './image.png';
  logoAlt = 'Angular logo';
  username = 'Marcos';
}
