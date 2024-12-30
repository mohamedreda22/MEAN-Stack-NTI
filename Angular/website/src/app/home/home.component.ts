import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private _productS: ProductService) {}
  products!: any[];
  imageURL = '';

  ngOnInit(): void {
    this.imageURL = this._productS.uploadURL;
    this._productS.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
