import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Http Client
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './pages/routing.module';
import { AppComponent } from './app.component';

//Modules
import { PagesModule } from './pages/pages.module';

//Components
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
