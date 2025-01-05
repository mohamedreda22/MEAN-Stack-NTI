import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { 
    const token = localStorage.getItem('accessToken');
    if(token) {
      this.tokenSubject.next(token); // if token is present in the local storage then we are setting the tokenSubject to that token
  }}

  // generage a new BehaviorSubject with the type of string or null and setting it to null initially
  // tokenSubject is a BehaviorSubject that is used to store the token that we received from the server after the user logs in
  // BehaviorSubject is a type of Subject that stores the current value and emits it to the new subscribers
  // BehaviorSubject is used to store the token that we received from the server after the user logs in
  private tokenSubject: BehaviorSubject <string | null> = new BehaviorSubject<string | null>(null); //private to prevent direct access to the tokenSubject from the component


  apiURL = 'http://localhost:3000/users/login';
  // loginData is the data that we are sending to the server to login the user 
  login(loginData:any): Observable<any> { 
    // observable is used to handle the asynchronous data that we are receiving from the server
    // tap is used to perform some action after the data is received from the server and before it is sent to the component that called this method 
    return this._http.post<any>(this.apiURL, loginData).pipe(tap(res => { 
      const token = res.token; // getting the token from the response that we received from the server
      // console.log("res token: ",res.token);
      if(token) {
        localStorage.setItem('accessToken', token); // setting the token in the local storage
        // console.log("Token: ",token);
        this.tokenSubject.next(token); // setting the tokenSubject to the token that we received from the server
      }
    })
    );
  }

  register(registerData:any): Observable<any> {
    return this._http.post<any>('http://localhost:3000/users', registerData);
  }

  // getAccessToken() method is used to get the tokenSubject as an observable so that the component can subscribe to it and get the token
  getAccessToken() :Observable<string | null> {
    return this.tokenSubject.asObservable(); // returning the tokenSubject as an observable so that the component can subscribe to it and get the token
  }

  logout(){
    this.tokenSubject.next(null); // setting the tokenSubject to null
    localStorage.removeItem('accessToken'); // removing the token from the local storage
  }

  isAuthanticated(): boolean { 
  return this.tokenSubject.value !== null; // checking if the tokenSubject is not null then the user is authenticated and returning true else returning false
  }

  // decodeToken() method is used to decode the token that we received from the server
  // it's not safe to use <any> in the production code as it can cause security issues so we should use the type of the token that we are expecting
  // in this case, we are expecting the token to be of type any so we are using <any> to decode the token
  // but we should use interface or type to define the type of the token that we are expecting and use that type to decode the token
  decodeAccessToken():any {
    const token = this.tokenSubject.value; // getting the token from the tokenSubject
    if(token) {
      return jwtDecode<any>(token); // decoding the token that we received from the server
    }else{
      return null;
    }
}

}
