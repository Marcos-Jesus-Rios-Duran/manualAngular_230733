import { Component } from '@angular/core';
import {ChartComponent} from '../chart/chart.component'
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-content-dashboard',
  standalone: true,
  imports: [ChartComponent,MapComponent],
  templateUrl: './content-dashboard.component.html',
  styleUrl: './content-dashboard.component.css'
})
export class ContentDashboardComponent {

}
