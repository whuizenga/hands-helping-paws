import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';
import { NewseventspageComponent } from './newseventspage/newseventspage.component';
import { VolunteerpageComponent } from './volunteerpage/volunteerpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent },
  { path: 'aboutus', component: AboutuspageComponent},
  { path: 'news', component: NewseventspageComponent},
  { path: 'volunteer', component: VolunteerpageComponent},
  

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
