import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  standalone:false,
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  addProductForm: FormGroup;
  imgURL= "http://localhost:3000/images/"
  constructor(private productService: ProductService) {
    this.addProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      productImage: new FormControl('', Validators.required),
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      this.addProductForm.patchValue({
        productImage: file, // Assign the file to the form control
      });
    }
  }

  addProduct(): void {
    if (this.addProductForm.valid) {
      // Use the form data (including file) to submit the product
      const formData = new FormData();
      formData.append('name', this.addProductForm.get('name')?.value);
      formData.append('description', this.addProductForm.get('description')?.value);
      formData.append('price', this.addProductForm.get('price')?.value);
      formData.append('productImage', this.addProductForm.get('productImage')?.value);

      this.productService.addProduct(formData).subscribe(response => {
        console.log(response);
      });
    }
  }
}
