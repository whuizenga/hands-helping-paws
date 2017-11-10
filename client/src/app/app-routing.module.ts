import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';
import { NewseventspageComponent } from './newseventspage/newseventspage.component';
import { VolunteerpageComponent } from './volunteerpage/volunteerpage.component';
import { AdoptionspageComponent} from './adoptionspage/adoptionspage.component';
import { DonatepageComponent } from './donatepage/donatepage.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent },
  { path: 'aboutus', component: AboutuspageComponent},
  { path: 'news', component: NewseventspageComponent},
  { path: 'volunteer', component: VolunteerpageComponent},
  { path: 'adoptions', component: AdoptionspageComponent},
  { path: 'donate', component: DonatepageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
