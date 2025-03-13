import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-ejercicio-10',
  standalone: true,
  imports: [CommonModule, CommentsComponent],
  templateUrl: './ejercicio-10.component.html',
  styleUrls: ['./ejercicio-10.component.css'],
})
export class Ejercicio10Component {}
