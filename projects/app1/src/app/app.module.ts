import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { Lib1Module } from 'projects/lib1/src/public-api';
import { Lib1Module } from '@lib1';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Lib1Module],
  bootstrap: [AppComponent]
})
export class AppModule { }
