import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DbService } from './db.service';
import { OlympicsModule } from './olympics/olympics.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';




@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    OlympicsModule,
    AppRoutingModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
