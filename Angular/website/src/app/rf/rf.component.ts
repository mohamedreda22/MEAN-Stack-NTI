import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
  });}

  // Create a FormGroup object and bind it to the form in the template file using the formGroup directive.
  joinUsForm! :FormGroup ;

  // Create a method to handle the form submission.
  signUp(){
    console.log(this.joinUsForm.value);
  }

}
