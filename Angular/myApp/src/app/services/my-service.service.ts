// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  products = [
    { id: 1, name: 'Product 1' , desc: 'Product 1 description' , price: 100 ,isActive: false, imageURL: 'imgs/img1.png'},
    { id: 2, name: 'Product 2' , desc: 'Product 2 description' , price: 200 ,isActive: true, imageURL: 'imgs/img2.png'},
    { id: 3, name: 'Product 3' , desc: 'Product 3 description' , price: 300 ,isActive: false, imageURL: 'imgs/img3.jpg'},
    { id: 4, name: 'Product 4' , desc: 'Product 4 description' , price: 400 ,isActive: true, imageURL: 'imgs/img4.jpg'},
    { id: 5, name: 'Product 5' , desc: 'Product 5 description' , price: 500 ,isActive: true, imageURL: 'imgs/img5.png'}
  ]

  deleteProduct(id:number){
    this.products = this.products.filter(p => p.id !== id);
    console.log('Product deleted!',this.products);
  }

  message='';

  newMessage:BehaviorSubject<string> = new BehaviorSubject<string>('');

  changeNewMessage(msg:string){
    this.newMessage.next(msg);
  }
  getNewMessage():Observable<string>{
    return this.newMessage.asObservable();
  }

  changeMessage(msg:string){
    this.message = msg;
  }

  getMessage(){
    return this.message;
  }
}
