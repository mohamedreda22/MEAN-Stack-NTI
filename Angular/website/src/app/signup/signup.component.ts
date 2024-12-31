import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = 'Signup';
  constructor() { }

  onSubmit(form: NgForm) {
    console.log("My form data", form);
  }

  usernameOld: string = '';


  onRandomUsername(form: NgForm) {
    const baseUsername = form.value.username?.trim() || 'user'; // Use form value or a default
    const randomSuffix = `${Math.random().toString(36).substring(2, 7)}${Math.floor(Math.random() * 1000)}`;
    
    form.form.patchValue({
      username: `${baseUsername}${randomSuffix}`
    });
  }
  
  
// onRandomUsername(form: NgForm) {
//   const username: string = this.usernameOld;
//   const randomNum = Math.floor(Math.random() * 1000);
//   const randomChars = Math.random().toString(36).substring(2, 7);
//   const randomUsername = `${username}${randomChars}${randomNum}`;
//   form.form.patchValue({
//     username: randomUsername
//   });
// }


}
