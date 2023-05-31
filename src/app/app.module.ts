import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Data1Component } from './data1/data1.component';
import { Data2Component } from './data2/data2.component';

@NgModule({
  declarations: [
    AppComponent,
    Data1Component,
    Data2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
