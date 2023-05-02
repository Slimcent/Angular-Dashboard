import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { LayoutComponent } from './components/homepage/layout/layout.component';
import { HeaderComponent } from './components/homepage/header/header.component';
import { HomeSidebarComponent } from './components/homepage/home-sidebar/home-sidebar.component';
import { AboutComponent } from './components/homepage/home-menu/about/about.component';
import { RegisterComponent } from './components/homepage/home-menu/register/register.component';
import { LoginComponent } from './components/homepage/home-menu/login/login.component';
import { ContactUsComponent } from './components/homepage/home-menu/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    HomeSidebarComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    RouterModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
