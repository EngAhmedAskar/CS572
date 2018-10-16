import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab 11';
  componentCounterValue = 0;

  counterUpdated(event){
   
    this.componentCounterValue = event;
  }

}