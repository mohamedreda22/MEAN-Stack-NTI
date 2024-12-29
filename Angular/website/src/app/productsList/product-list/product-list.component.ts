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
  ngOnInit():void{ // this is the method that will be called when the component is loaded
    this._productS.getProducts().subscribe(
      data=>{
        console.log(data);
      }
    )
  }
}
