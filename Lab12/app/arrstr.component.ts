import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrstr',
  template: `
    <p>
      arrstr works!
      <input [Myvisibility]="v" type='text'  name="strarr"    value="{{strarr}}"  />
     <button (click)="toggle()">clickme</button>
    </p>
    <ul>
    <li *ngFor="let item of strarr">{{item}}</li>
    </ul>
  `,
  styles: []
})
export class ArrstrComponent implements OnInit {
  v = true;
  strarr: number[];
  constructor() {
    this.strarr = [1, 2, 3, 4, 5]
  }
  toggle(){
    switch(this.v) {
case false: this.v= true; break;
case true: this.v=false; break;
    }
    
    console.log(this.v)
  }
  ngOnInit() {
  }

}
