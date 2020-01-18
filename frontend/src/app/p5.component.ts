import { Component, Input } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'p5-component',
  template: `
    <h1>p5 in Angular</h1>
    <h2>xx = {{xx}}, yy = {{yy}}</h2>
  `,
  styleUrls: []
})
export class p5Component {

  @Input() public xx: number;
  @Input() public yy: number;

  // =========
  // https://indepth.dev/creating-a-sketchpad-with-angular-and-p5js/
  // https://editor.p5js.org/Janglee123/sketches/HJ2RnrQzN
  private canvas: any;
  private sw = 2;
  private strokeColor = 0;
  // =========
  constructor() { }
  // =========
  ngOnInit() {
    const sketch = s => {
      s.setup = () => {
        const canvas2 = s.createCanvas(400, 200);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');

        s.background(255);
        s.strokeWeight(this.sw);

        s.rect(0, 0, s.width, s.height);

      };

      s.draw = () => {
        if (s.mouseIsPressed) {
          if (s.mouseButton === s.LEFT) {
            s.rect(s.mouseX, s.mouseY, this.xx, this.yy);
          }
        }

      };

      s.mouseReleased = () => {
        // do something when mouse is released
      };

      s.keyPressed = () => {
        if (s.key === 'c') {
          window.location.reload();
        }
      };
    };

    this.canvas = new p5(sketch);
  }

}
