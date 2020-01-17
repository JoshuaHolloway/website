import { Component } from '@angular/core';
import { p5Component } from './p5.component';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div class="container">
      <!-- ==== -->
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
      <div class="row" style="border: blue solid 4px;">
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
      <p5-component></p5-component>

    </div>
    <!-- /container -->

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // =========
  public x = 1;
  public y = 2;
  public z = 3;
  // =========
  onInput_x(event): void {
    this.x = event.target.value;
  }
  // =========
  onInput_y(event): void {
    this.y = event.target.value;
  }
  // =========
}
