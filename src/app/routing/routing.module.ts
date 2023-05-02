import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/homepage/home/home.component';
import { AboutComponent } from '../components/homepage/home-menu/about/about.component';
import { LoginComponent } from '../components/homepage/home-menu/login/login.component';
import { RegisterComponent } from '../components/homepage/home-menu/register/register.component';
import { ContactUsComponent } from '../components/homepage/home-menu/contact-us/contact-us.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
