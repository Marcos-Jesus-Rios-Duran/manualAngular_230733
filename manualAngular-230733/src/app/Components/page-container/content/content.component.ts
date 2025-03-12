import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-content',
  imports: [BreadcrumbComponent,RouterOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
