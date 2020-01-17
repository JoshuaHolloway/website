import { Component } from '@angular/core';
import { p5Component } from './p5.component';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h3>WHAT UP???</h3>

    <h4>{{x}}</h4>
    <input type="text" (input)="onInput($event)">

    <p5-component></p5-component>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // =========
  public x = 0;
  // =========
  onInput(event): void {
    this.x = event.target.value;
  }
}
