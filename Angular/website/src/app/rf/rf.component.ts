import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../customvalidators/password.validator';

@Component({
  selector: 'app-rf',
  standalone: false,
  
  templateUrl: './rf.component.html',
  styleUrl: './rf.component.css'
})
export class RfComponent implements OnInit {

  constructor() { 
    // the code in the constructor is executed when the component is created. 
  }


  ngOnInit(): void {
    //get data from service and bind to form control 
    // Create a FormGroup object and bind it to the form in the template file using the formGroup directive.
    this .joinUsForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.minLength(5)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, PasswordValidator.passwordStrength()]),
      confirmPassword: new FormControl('',[Validators.required, PasswordValidator.passwordMatch('password','confirmPassword')]),
  });}

  // Create a FormGroup object and bind it to the form in the template file using the formGroup directive.
  joinUsForm! :FormGroup ;

  // Create a method to handle the form submission.
  signUp(){
    console.log(this.joinUsForm.value);
  }

  passwordMismatch(){
    const password = this.joinUsForm.get('password')?.value;
    const confirmPassword = this.joinUsForm.get('confirmPassword')?.value;
    return password !== confirmPassword;
  }

}
