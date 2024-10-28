import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/partial/header/header.component';
import { FooterComponent } from './view/partial/footer/footer.component';
import { HomeComponent } from './view/pages/home/home.component';
import { LayoutComponent } from './view/partial/layout/layout.component';
import { ContactUsComponent } from './view/pages/contact-us/contact-us.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './view/pages/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LayoutComponent,
    AboutComponent,
    ContactUsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
