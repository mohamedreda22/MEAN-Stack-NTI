import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Product 1' , desc: 'Product 1 description' , price: 100 ,isActive: false, imageURL: 'imgs/img1.png'},
    { id: 2, name: 'Product 2' , desc: 'Product 2 description' , price: 200 ,isActive: true, imageURL: 'imgs/img2.png'},
    { id: 3, name: 'Product 3' , desc: 'Product 3 description' , price: 300 ,isActive: false, imageURL: 'imgs/img3.jpg'},
    { id: 4, name: 'Product 4' , desc: 'Product 4 description' , price: 400 ,isActive: true, imageURL: 'imgs/img4.jpg'},
    { id: 5, name: 'Product 5' , desc: 'Product 5 description' , price: 500 ,isActive: true, imageURL: 'imgs/img5.png'}
  ]

  change(id: number) {
    const product = this.products.find(p => p.id === id);
    if (product) product.isActive = !product.isActive;
  }

  delete(id: number) {
    const index = this.products.findIndex(p => p.id === id);
    if (index >= 0) this.products.splice(index, 1);
  }

}
