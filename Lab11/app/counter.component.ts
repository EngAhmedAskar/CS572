import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <input type='text'  name="counter" (change)="counterNewVal($event)"   value="{{counter}}" (input)="counter=$event.target.value" />
  
  <p>
  <button (click)="decrease()">-</button>
  {{counterValue}}
  <button (click)="increase()">+</button>      
</p>
<span>Component Counter Value = {{componentCounterValue}}</span>
  `,
  styleUrls: ['./counter.component.css'],
  inputs : ['counter','componentCounterValue'],
  outputs : ['counterchange']
})
export class CounterComponent implements OnInit {
  counterValue: number = 0;
  counter : number = 0;
  componentCounterValue : number;
  counterchange : EventEmitter<number>;
  constructor() {
    this.counterValue = 1;
    this.counterchange = new EventEmitter();
  }
increase(){
this.counterValue++;
this.componentCounterValue = this.counterValue;
this.counterchange.emit(this.counterValue);
return false;

}
decrease(){
  this.counterValue--;
  this.componentCounterValue = this.counterValue;
  this.counterchange.emit(this.counterValue);
  return false;
}
counterNewVal(e){
  this.counterValue=e.target.value;
  this.componentCounterValue = this.counterValue;
  this.counterchange.emit(this.counterValue);
}
  ngOnInit() {

  }

}
