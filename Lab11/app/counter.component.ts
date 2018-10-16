import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <input type='text'  name="counter" (change)="counterNewVal($event)"   value="{{counter}}" (input)="counter=$event.target.value" />
  
  <p>
  <button (click)="decrease()">-</button>
  {{counterValue}}
  <button (click)="increase()">+</button>      
</p>

  `,
  styleUrls: ['./counter.component.css'],
  inputs: ['counter'],
  outputs: ['counterchange']
})
export class CounterComponent implements OnInit {
  counterValue: number = 0;
  counter: number = 0;

  counterchange: EventEmitter<number>;
  constructor() {
    this.counterValue = 1;
    this.counterchange = new EventEmitter();
  }
  increase() {
    this.counterValue++;

    this.counterchange.emit(this.counterValue);
    return false;

  }
  decrease() {
    this.counterValue--;

    this.counterchange.emit(this.counterValue);
    return false;
  }
  counterNewVal(e) {
    this.counterValue = e.target.value;

    this.counterchange.emit(this.counterValue);
  }
  ngOnInit() {

  }

}
