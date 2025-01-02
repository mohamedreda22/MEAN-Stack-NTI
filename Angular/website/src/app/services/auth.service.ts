import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

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
  private tokenSubject: BehaviorSubject <string | null> = new BehaviorSubject<string | null>(null);


  apiURL = 'http://localhost:3000/users/login';
  // loginData is the data that we are sending to the server to login the user 
  login(loginData:any): Observable<any> { 
    // observable is used to handle the asynchronous data that we are receiving from the server
    // tap is used to perform some action after the data is received from the server and before it is sent to the component that called this method 
    return this._http.post<any>(this.apiURL, loginData).pipe(tap(res => { 
      const token = res.accessToken; // getting the token from the response that we received from the server
      if(token) {
        localStorage.setItem('accessToken', token); // setting the token in the local storage
        console.log("Token: ",token);
        this.tokenSubject.next(token); // setting the tokenSubject to the token that we received from the server
      }
    })
    );
  }

  logout() {
    console.log('Logout successful');
  }
}
