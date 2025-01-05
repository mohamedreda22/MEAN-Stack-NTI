import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../customvalidators/password.validator';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-rf',
  standalone: false,
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {

  constructor(private _authS:AuthService) { }

  joinUsForm!: FormGroup;

  ngOnInit(): void {
    this.joinUsForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        PasswordValidator.passwordStrength(),
      ]),
      retypepassword: new FormControl('', [Validators.required]),
      languages: new FormArray([
        new FormControl('')
      ]),
      // userType: new FormControl('676a9cdbd3eb32316fbc03b6'),
    }, {
      validators: PasswordValidator.passwordMatch('password', 'retypepassword'),
    });
  }

  get languages(): FormArray{
    return this.joinUsForm.get('languages') as FormArray;
  }

  addNewLanguage() {
    let myArray = this.joinUsForm.get('languages') as FormArray;
    myArray.push(new FormControl(''));
  }

/*   signUp() {
    this._authS.register(this.joinUsForm.value).subscribe({
      next: (data) => {
        console.log("Data: ", data);
      },
      error: (err) => {
        console.error("Error: ", err);
      }
    });
  } */

  signUp() {
    if(this.joinUsForm.valid){
      console.log("Form: ", this.joinUsForm.value);
      this._authS.register(this.joinUsForm.value).subscribe({
        next: (data) => {
          console.log("Data: ", data);
        },
        error: (err) => {
          console.error("Error: ", err);
        }
      });}}


  passwordDismatch(){
    const password = this.joinUsForm.get('password')?.value;
    const confirmPassword = this.joinUsForm.get('retypepassword')?.value;
    return password !== confirmPassword;
  }
}
