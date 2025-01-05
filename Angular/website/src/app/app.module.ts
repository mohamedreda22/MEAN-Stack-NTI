import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductDetailsComponent } from './productsList/product-details/product-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './productsList/product-list/product-list.component';
import {  provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RfComponent } from './rf/rf.component';
import { AddusertypeComponent } from './addusertype/addusertype.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    ProductDetailsComponent,
    DashboardComponent,
    LoginComponent,
    ProductListComponent,
    SignupComponent,
    NotfoundComponent,
    RfComponent,
    AddusertypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // this provides the form module to the application like ngModel, ngForm etc
    ReactiveFormsModule // this provides the reactive form module to the application like formControl, formGroup etc
  ],
  providers: [provideHttpClient()],// this is the place where we can provide services to the module so that they can be used in the components  
  bootstrap: [AppComponent]
})
export class AppModule { }
