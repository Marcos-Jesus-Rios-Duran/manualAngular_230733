import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageContainerComponent } from './Components/page-container/page-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Cambiado de "styleUrl" a "styleUrls"
})
export class AppComponent {
  title = 'manualAngular-230733';
}
