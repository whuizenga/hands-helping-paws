import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';
import { NewseventspageComponent } from './newseventspage/newseventspage.component';
import { VolunteerpageComponent } from './volunteerpage/volunteerpage.component';
import { AdoptionspageComponent } from './adoptionspage/adoptionspage.component';
import { DonatepageComponent } from './donatepage/donatepage.component';

import { AdoptionsService } from './adoptions.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutuspageComponent,
    NewseventspageComponent,
    VolunteerpageComponent,
    AdoptionspageComponent,
    DonatepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ AdoptionsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
