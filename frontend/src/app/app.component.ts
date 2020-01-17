import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() name = 'joshua';
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
