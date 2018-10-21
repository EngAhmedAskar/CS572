import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
  <p>
    Game Not Found Try Agine
  </p>
`,
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
