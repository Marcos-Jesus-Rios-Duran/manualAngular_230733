import { Component } from '@angular/core';
import { ZeroConfigComponentComponent } from '../zero-config-component/zero-config-component.component';
import { SessionsTableComponent } from '../sessions-table/sessions-table.component';
@Component({
  selector: 'app-content-tables',
  imports: [ZeroConfigComponentComponent,SessionsTableComponent],
  templateUrl: './content-tables.component.html',
  styleUrl: './content-tables.component.css'
})
export class ContentTablesComponent {

}
