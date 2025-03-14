import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ejercicio-11',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './ejercicio-11.component.html',
  styleUrls: ['./ejercicio-11.component.css']
})
export class Ejercicio11Component {
  logoUrl = './image.png';
  logoAlt = 'Angular logo';
  username = 'Marcos';
}
