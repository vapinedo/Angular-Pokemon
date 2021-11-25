import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';

const components = [
  AppComponent,
  NavbarComponent
];

const modules = [
  BrowserModule,
  AppRoutingModule,
  CoreModule
];

@NgModule({
  declarations: [components],
  imports: [modules],
  bootstrap: [AppComponent]
})
export class AppModule { }
