// to create a service, we use ng g s services/product
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {
    // dependency injection
  }
  uploadURL = 'http://localhost:3000/images/';
  getProducts(): Observable<any> {
    // this is the method that will be called in the component to get the data from the server
    return this._http.get<any>('http://localhost:3000/products'); // this is the url of the server where the data is stored
  }
}
