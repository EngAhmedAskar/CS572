import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MyvisibilityDirective } from './myvisibility.directive';
import { MynewcolorDirective } from './mynewcolor.directive';
import { ArrstrComponent } from './arrstr.component';

@NgModule({
  declarations: [
    AppComponent,
   
    MyvisibilityDirective,
    MynewcolorDirective,
    ArrstrComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
