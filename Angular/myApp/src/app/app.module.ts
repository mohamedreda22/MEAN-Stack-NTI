import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { PipesComponent } from './pipes/pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductsComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add this line to import FormsModule for Two-Way Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
