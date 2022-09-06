import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HeroAppComponent } from './hero-app/hero-app.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgePipe } from './shared/pipes/age.pipe';
import { ExponentPipe } from './shared/pipes/exponent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HeroAppComponent,
    HeroAppComponent,
    HeroAppComponent,
    LoginComponent,
    ExponentPipe,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
