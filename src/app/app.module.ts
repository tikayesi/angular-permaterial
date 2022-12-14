import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HeroAppComponent } from './hero-app/hero-app.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HeroAppComponent,
    HeroAppComponent,
    HeroAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
