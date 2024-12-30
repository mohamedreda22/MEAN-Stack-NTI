import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  implements OnInit {

  constructor(private _productS:ProductService) { 
    // dependency injection 
  }
  imageURL =''
  products!: any[]; // ! means that this variable will be initialized later
  // products?: any[]; // ? means that this variable can be null
  // products : any[]= []; // this is the array that will store the data that we get from the server
  ngOnInit():void{ // this is the method that will be called when the component is loaded
    this.imageURL = this._productS.uploadURL;
    this._productS.getProducts().subscribe(
      data=>{
        this.products = data; // here we are storing the data that we get from the server in the products array
      }
    )
  }
}
