import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TwoComponent } from '../two/two.component';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-one',
  standalone: false,
  
  templateUrl: './one.component.html',
  styleUrl: './one.component.css',
  providers: [MyServiceService]
})
export class OneComponent implements AfterViewInit{

  constructor(private _myS:MyServiceService) { 
    console.log('Parent component created!');
  }
ngAfterViewInit(): void {
  this.myChild.msg = 'Hello from parent'; // Accessing the child component properties and methods using the reference variable.
  throw new Error('Method not implemented.');
}



@ViewChild(TwoComponent) myChild!: TwoComponent; // This is the child component reference variable that we will use to access the child component properties and methods.

send() {
  this.myChild.msg = 'Hello from parent'; // Accessing the child component properties and methods using the reference variable.
  this.myChild.hello(); // Accessing the child component properties and methods using the reference variable.
}
alarm() {
  this.myChild.msg = 'Congrats from parent'; // Accessing the child component properties and methods using the reference variable.
  this.myChild.Congrats(); // Accessing the child component properties and methods using the reference variable.
}
}
