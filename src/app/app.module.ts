import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgePipe } from './shared/pipes/age.pipe';
import { ExponentPipe } from './shared/pipes/exponent.pipe';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoService } from './pages/todo/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent,
    ExponentPipe,
    AgePipe,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
