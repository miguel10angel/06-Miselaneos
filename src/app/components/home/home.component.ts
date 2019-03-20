import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
        AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <p>Hola mundo desde app miselania</p>
  <app-clases></app-clases>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
        AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
      console.log("constructor");
  }

  ngOnInit() {
      console.log("ngOnInit");
  }

  ngOnChanges (){
      console.log("ngOnChanges");
  }
  ngDoCheck(){
      console.log("ngDoChec");
  }
  ngAfterContentInit(){
      console.log("ngAfterCont");
  }
  ngAfterContentChecked(){
      console.log("ngAfterCont");
  }
  ngAfterViewInit(){
      console.log("ngAfterView");
  }
  ngAfterViewChecked(){
      console.log("ngAfterView");
  }
  ngOnDestroy(){
      console.log("ngOnDestro");
  }


}
