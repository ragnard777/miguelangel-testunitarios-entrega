import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './vistas/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth/auth.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
