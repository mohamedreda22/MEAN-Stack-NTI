import { Component } from '@angular/core';

@Component({
  selector: 'app-first', // <app-first></app-first>
  standalone: false, 
  templateUrl: './first.component.html',  // HTML file
  styleUrl: './first.component.css',  // CSS file 
})
export class FirstComponent{
  title = 'First Component';  // Variable
  name = 'Angular';  // Variable
  imageURL ="imgs/img1.png"
  show = true;  // Variable
  color = 'pink';  // Variable
  fontSize = '50px';  // Variable
  fruits = ['Apple', 'Banana', 'Cherry'];  // Array
  names = ['Ali', 'Ahmed', 'Omar'];  // Array
  obj = {name: 'Angular', version: 11};  // Object
  today = new Date();  // Date
  message = '';  // Variable
  count = 0;  // Variable
  isDisabled = false;  // Variable
  isActive = true;  // Variable
  x="MOhamed";
  onClick(){
    this.message = 'Button Clicked';
  }
  onCount(){
    this.count++;
  }
  doSomething(){
    alert('Button Clicked');
  }
//   do(event:any){
//     console.log(event);
//     if(this.name === 'Angular'){
//     this.name = 'Angular 11';
//   }else{
//     this.name = 'Angular';
//   }
// }
//  do(event:any){
//     if(this.x === 'Ali'){
//     this.name = 'Angular 11';
//   }else{
//     this.name = 'Angular';
//   }
//  }
}