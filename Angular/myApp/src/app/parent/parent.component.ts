import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-parent',
  standalone: false,
  
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  providers: [MyServiceService] // Registering the service in the parent component providers array will create a new instance of the service for the parent component and all its children components.
})
export class ParentComponent implements OnInit{
  constructor(private _myS:MyServiceService) { 
    console.log('Parent component created!');
  }

  products !: IProduct[];
  ngOnInit(): void {  
    this.products = this._myS.products;
  }
  change(){
    this.products[1].name = 'Product 2 changed';
  }

  msg ='';

  getMSG(name:string){
    "I Like "+ (this.msg =name);
  }

  getDataFn(){
    this.products = this._myS.products;
    console.log('Data updated!',this.products);
  }

}
