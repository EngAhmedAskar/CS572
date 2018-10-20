import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrstr',
  template: `
    <p>
      Visibilty works!
      <input [Myvisibility]="v" type='text'  name="strarr"      value="{{strarr}}"  />
     <button (click)="toggle()">clickme</button>
    </p>
    <p>
      New Color works!
      <input  Mynewcolor  type='text'  name="test" />
    
    </p>
    <ul>
    <li *ngFor="let item of strarr"  (colorEmitter)="updateColor($event)" >{{item}}</li>
    </ul>
  `,
  styles: []
})
export class ArrstrComponent implements OnInit {
  v = true;

  colorValue:string = "Black";
  strarr: number[];
  constructor() {
    this.strarr = [1, 2, 3, 4, 5]
  }
  toggle() {
    switch (this.v) {
      case false: this.v = true; break;
      case true: this.v = false; break;


    }
    console.log(this.v)
  }
  updateColor(color){
    this.colorValue = color;
  }
  ngOnInit() {
  }

}
