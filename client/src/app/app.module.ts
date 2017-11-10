import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';
import { NewseventspageComponent } from './newseventspage/newseventspage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutuspageComponent,
    NewseventspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
