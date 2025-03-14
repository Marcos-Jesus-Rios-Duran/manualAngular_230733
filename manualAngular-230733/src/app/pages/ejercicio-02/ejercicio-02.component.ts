import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-02',
  templateUrl: './ejercicio-02.component.html',
  styleUrls: ['./ejercicio-02.component.css']
})
export class Ejercicio02Component implements OnInit {
  city = 'La ceiba';

  @Output() updateSidebar = new EventEmitter<{ title: string, description: string }>();

  ngOnInit(): void {
    this.updateSidebar.emit({
      title: 'Updating the component',
      description: `
      En este ejercicio, agregué una propiedad llamada \`city\` a la clase del componente. Esta propiedad de tipo cadena puede usarse en la clase del componente y referenciarse en la plantilla del componente utilizando la sintaxis de interpolación \`{{ }}\`.

      Actualicé la plantilla del componente para mostrar el nombre de la ciudad.

      Por último, configuré TailwindCSS para estilizar desde el HTML usando clases. Así, podemos dar estilo de manera eficiente y mantener el código limpio y modular.
      `
    });
  }
}
