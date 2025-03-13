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
    this.updateSidebar.emit({
      title: 'Anatomy of a Component',
      description: `
        Aprendí que los componentes son los pilares fundamentales de cualquier aplicación Angular. Cada componente consta de tres partes: <br>
        Clase: <br>
          *TypeScript<br>
          *Plantilla HTML y <br>
          *Estilos CSS<br>
        Aprendí a como actualizar la plantilla de un componente, así mismo de actualizar sus estilos del componente. <br>
        Aprendi a configurar tailwindcss para poder dar estilo desde el html usando clases en taiwlind, así mismo 
      `
    });   
  }
}
