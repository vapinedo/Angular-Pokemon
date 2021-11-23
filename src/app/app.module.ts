import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

const components = [
  AppComponent
];

const modules = [
  BrowserModule,
  AppRoutingModule,
  CoreModule,
];

@NgModule({
  declarations: [components],
  imports: [modules],
  bootstrap: [AppComponent]
})
export class AppModule { }
