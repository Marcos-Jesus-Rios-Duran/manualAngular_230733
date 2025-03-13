import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-01',
  template: `
    <div class="hello-universe">
      <h1>Hello Universe</h1>
    </div>
  `,
  styles: [`
    :host {
      color: #a144eb;
    }

    .hello-universe {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh; /* Reduce la altura del div */
      background-color:rgb(253, 236, 0);
    }

    h1 {
      font-size: 4em;
      text-align: center;
    }
  `]
})
export class Ejercicio01Component implements OnInit {
  @Output() updateSidebar = new EventEmitter<{ title: string, description: string }>();

  ngOnInit(): void {
    this.updateSidebar.emit({ title: 'Ejercicio 01', description: 'Descripción del ejercicio 01' });
  }
}
