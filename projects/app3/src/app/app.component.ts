import { Component } from '@angular/core';
import { Lib1, LIB1_CONST } from '../../../lib1/src/lib/lib1.definitions';
import { Lib1Service } from '../../../lib1/src/lib/lib1.service';

@Component({
  selector: 'app-root',
  template: `
  <lib-lib1></lib-lib1>
  `,
})
export class AppComponent {

  lib1Obj: Lib1;

  constructor(private l1Service: Lib1Service) {
    this.lib1Obj = LIB1_CONST;

    console.log('lib1Obj: ' + this.lib1Obj);
  }
}
