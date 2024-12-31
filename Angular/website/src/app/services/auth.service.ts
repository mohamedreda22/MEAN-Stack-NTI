import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  apiURL = 'http://localhost:3000/users/login';
  // loginData is the data that we are sending to the server to login the user 
  login(loginData:any): Observable<any> { 
    // tap is used to perform some action after the data is received from the server and before it is sent to the component that called this method 
    return this._http.post<any>(this.apiURL, loginData).pipe(tap(res => { 
      console.log("Token: ",res.token);
    })
    );
  }

  logout() {
    console.log('Logout successful');
  }
}
