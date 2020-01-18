import { Component, Input } from '@angular/core';

// template: `<p5-component [xx]="'300'"></p5-component>`,
@Component({
  selector: 'app-p5-wrapper',
  template: `<p5-component [xx]="'400'"></p5-component>`,
  styleUrls: []
})
export class p5WrapperComp {

  public x: 400;
  @Input() public y: number;

}
