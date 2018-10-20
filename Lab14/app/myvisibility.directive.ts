import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[Myvisibility]',
})
export class MyvisibilityDirective implements OnChanges {
  @Input() Myvisibility:boolean;
  // either input with same name or differ name but in the host we use Myvisibility [differinput] = 'value'
  constructor(private e: ElementRef, private r: Renderer2) {

  }
  ngOnChanges(){
  console.log('here')
    let displayValue = "block";
    if(!this.Myvisibility){
      displayValue = "none";
    }
    this.r.setStyle(this.e.nativeElement, 'display', displayValue);
  
  }
  

}
