import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { p5Component } from './p5.component';
import { JoshComponent } from './josh.component';
import { p5WrapperComp } from './p5Wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    JoshComponent,
    p5WrapperComp,
    p5Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
