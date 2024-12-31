import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  title = 'Signup';
  constructor() { }

  onSubmit(form: NgForm) {
    console.log("My form data", form.value);
  }

}
