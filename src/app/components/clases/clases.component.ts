import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
    alerta:string="alert-danger";
    clase:Object={
        'danger':false
    }
  constructor() { }

  ngOnInit() {
  }

}
