import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient,private _authS: AuthService) { }
  apiURL='http://localhost:3000/userTypes';

  addUserType(data: any):Observable<any>{ 
    let token = '';
    this._authS.getAccessToken().subscribe(data => {
      if(data){
        token = data;
        console.log("Token: ",data);
      }
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this._http.post<any>(this.apiURL, data,{headers: headers});
}

}
