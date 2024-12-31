import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _authS:AuthService) { }

  login(loginForm:NgForm) {
    this._authS.login(loginForm.value).subscribe({
      next: () => {
        console.log('success');
      },
      error: (err: any) => {
        console.log('error :>> ', err.message);
      }
    });
    console.log(loginForm.value);
  }
}
