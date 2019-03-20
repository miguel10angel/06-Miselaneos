import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanio">
      Hola mundo.. esta es una etiqueta
    </p>

    <button class="btn btn-success" (click)="tamanio = tamanio + 5">mas</button><br>
    <button class="btn btn-success" (click)="tamanio = tamanio -5 ">menos</button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

    tamanio:number=10;
  constructor() { }

  ngOnInit() {
  }

}
