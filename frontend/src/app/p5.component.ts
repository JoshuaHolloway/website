import { Component } from '@angular/core';
import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'p5-component',
  template: `
    <h1>p5 in Angular</h1>
  `,
  styleUrls: []
})
export class p5Component implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {

    new p5(p => {
      const x = 401;
      const y = 100;

      p.setup = () => {
        p.createCanvas(700, 410);
      };

      p.draw = () => {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 50, 50);
      };
    }, this.el.nativeElement);

  }
}
