import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // we are using the inject function to inject the AuthService and Router services
  const _authS = inject(AuthService); // injecting the AuthService to get the tokenSubject value to check if the user is authenticated or not
  const _router = inject(Router); // injecting the Router to navigate to the login page if the user is not authenticated
  if(_authS.isAuthanticated()) {
    return true;
  }else{
    _router.navigate(['/login']); // navigating to the login page if the user is not authenticated
    return false;
  }
};
