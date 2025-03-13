import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnChanges {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() loading: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title'] || changes['description']) {
      this.loading = false;
    }
  }
}
