import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { PipesComponent } from './pipes/pipes.component';
import { NoSpacePipe } from './customPipes/noSpace.pipe';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { NewComponent } from './new/new.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductsComponent,
    PipesComponent,
    NoSpacePipe,
    ChildComponent,
    ParentComponent,
    OneComponent,
    TwoComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
