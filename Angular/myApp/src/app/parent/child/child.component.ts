import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { MyServiceService } from '../../services/my-service.service';

@Component({
  selector: 'app-child',
  standalone: false,
  
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {

@Input()  myproduct !: IProduct
@Output() like :EventEmitter<void> = new EventEmitter<void>(); // 1. Create an EventEmitter object with a type of string to emit the like event to the parent component 
@Output() getData :EventEmitter<void> = new EventEmitter<void>(); 
 constructor(private _myS:MyServiceService){
  // dependency injection
 }


doLike(){
  this.like.emit( ); // 2. Emit the like event with the product name as the argument to the parent component 
}

delete(){
  this._myS.deleteProduct(this.myproduct.id);
  this.getData.emit( ); 
}

}
