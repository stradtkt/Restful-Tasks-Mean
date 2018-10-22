import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CookieModule } from 'ngx-cookie';

import * as fromServices from './services';
import { AppComponent } from './app.component';
import * as fromTasks from './tasks';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ...fromTasks.components,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CookieModule.forRoot(),
    FormsModule
  ],
  providers: [...fromServices.services],
  bootstrap: [AppComponent]
})
export class AppModule { }
