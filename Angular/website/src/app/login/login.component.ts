import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _authS:AuthService, private _router:Router) { }

  login(loginForm:NgForm) {
    this._authS.login(loginForm.value).subscribe({
      next: () => {
        this._router.navigate(['/dashboard']); // array of routes that we want to navigate to after the user logs in successfully
        console.log(this._authS.decodeAccessToken()); // decoding the token that we received from the server after the user logs in
      },
      error: (err: any) => {
        console.log('error :>> ', err.message);
      }
    });
    // console.log(loginForm.value);
  }
}
