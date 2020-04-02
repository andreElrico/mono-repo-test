import { NgModule, Injectable } from '@angular/core';
import { Lib1Component } from './lib1.component';



@Injectable()
@NgModule({
  declarations: [Lib1Component],
  imports: [
  ],
  exports: [Lib1Component]
})
export class Lib1Module { }
