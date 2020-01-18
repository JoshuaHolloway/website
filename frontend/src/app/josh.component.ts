import { Component, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import * as p5 from 'p5';
// import '../../node_modules/p5/lib/addons/p5.sound';

@Component({
  selector: 'app-josh',
  // templateUrl: './app.component.html',
  template: `
    <div class="container">
      <!-- ==== -->
      {{name}}

      <div class="row" style="border: red solid 4px;">
        <div class="col">
          <h4>{{x}}</h4>

          <!-- Event Binding: How to listen to events -->
          <!-- (input)="onInput($event)" -->
          <!--  -->
          <!-- String Interpolation: How to output text in template -->
          <!-- value="{{x}}" -->
          <!--  -->
          <!-- Set the value attribute of the html-element to some text -->
          <input type="text" (input)="onInput_x($event)" value="{{x}}">
        </div>
      </div>
      <!-- ==== -->
      <div class="row" style="border: blue solid 4px;">
        <div class="col">
          <h4>{{y}}</h4>

          <!-- Property Binding: How to pass data to element properties -->
          <!-- [value]="x" -->
          <!--  -->
          <!-- Bind to the value property of the input element object -->
          <!-- Advantages:
            There are cases where you don't have a value attribute
            representation of an element property we want to bind to. -->
          <input type="text" (input)="onInput_y($event)" [value]="y">
        </div>
      </div>
      <!-- ==== -->
      <div class="row" style="border: green solid 4px;">
        <div class="col">
          <h4>{{z}}</h4>

          <!-- Shorthand of previous method -->
          <!-- Two-way Binding: Both listen to input event and also bind the value -->
          <!-- Angular Directive: ngModel -->
          <!-- Can only use on element that has a value-property to bind to and eventually emits and input event. -->
          <input type="text" [(ngModel)]="z">
        </div>
      </div>
      <!-- ==== -->
      <div class="row">
        <div class="col">
          <div class="sketch-container">
            <div id="sketch-holder"></div>
          </div>
        </div>
      </div>
      <!-- ==== -->
      <p5-component [xx]=x></p5-component>
      <!-- ==== -->
    </div>
    <!-- /container -->
  `,
  styleUrls: ['./app.component.css']
})
export class JoshComponent implements OnInit {
  @Input() name: string;
  // =========
  public x = 100;
  public y = 2;
  public z = 3;
  // =========
  onInput_x(event): void {
    this.x = event.target.value;

    // this.update_p5(this.x, this.y);
    //this.canvas.rect(this.x, this.y, 400, 100);
  }
  // =========
  onInput_y(event): void {
    this.y = event.target.value;
  }
  // =========
  // https://indepth.dev/creating-a-sketchpad-with-angular-and-p5js/
  canvas: any;
  sw = 2;
  c = [];
  strokeColor = 0;

  constructor() { }

  ngOnInit() {
    // this sketch was modified from the original
    // https://editor.p5js.org/Janglee123/sketches/HJ2RnrQzN
    const sketch = s => {
      s.setup = () => {
        // let canvas2 = s.createCanvas(s.windowWidth - 200, s.windowHeight - 200);
        let canvas2 = s.createCanvas(400, 200);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');

        s.background(255);
        s.strokeWeight(this.sw);

        this.c[0] = s.color(148, 0, 211);
        this.c[1] = s.color(75, 0, 130);
        this.c[2] = s.color(0, 0, 255);
        this.c[3] = s.color(0, 255, 0);
        this.c[4] = s.color(255, 255, 0);
        this.c[5] = s.color(255, 127, 0);
        this.c[6] = s.color(255, 0, 0);

        s.rect(0, 0, s.width, s.height);

        s.stroke(this.c[this.strokeColor]);
      };

      s.draw = () => {
        if (s.mouseIsPressed) {
          if (s.mouseButton === s.LEFT) {
            s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
          } else if (s.mouseButton === s.CENTER) {
            s.background(255);
          }
        }
      };

      s.mouseReleased = () => {
        // modulo math forces the color to swap through the array provided
        this.strokeColor = (this.strokeColor + 1) % this.c.length;
        s.stroke(this.c[this.strokeColor]);
        console.log(`color is now ${this.c[this.strokeColor]}`);
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
