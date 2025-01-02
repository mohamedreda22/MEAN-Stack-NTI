import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './productsList/product-list/product-list.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { RfComponent } from './rf/rf.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',pathMatch: 'full'
  },
  {
    path: 'home' ,
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    // we use the canActivate property to protect the dashboard route from unauthorized access by using the authGuard
    // we use authGuard to check if the user is authenticated or not and if the user is authenticated then we allow the user to access the dashboard route
    path: 'dashboard',
    component:DashboardComponent,canActivate: [authGuard]
  },{
    path: 'rf',
    component:RfComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
