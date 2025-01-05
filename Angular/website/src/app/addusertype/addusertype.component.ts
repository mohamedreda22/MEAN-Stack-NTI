import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-addusertype',
  standalone: false,
  
  templateUrl: './addusertype.component.html',
  styleUrl: './addusertype.component.css'
})
export class AddusertypeComponent {
  constructor(private _userS:UserService) { }
  // reactive form
  userTypesForm: FormGroup = new FormGroup({
    name : new FormControl(''),
    desc : new FormControl('')
  });

  addNewType() { //we use next to handle the data that we received from the server and error to handle the error that we received from the server
    this._userS.addUserType(this.userTypesForm.value).subscribe({
      next: (data) => {
      console.log("Data: ", data);
      },
      error: (err) => {
      console.error("Error: ", err);
      }
    });
  }
}
