import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }
  // property to save token
  userData: any;

  // Method to decode user
  saveUserData() {
    if (localStorage.getItem('eToken') != null) {
      let encodeToken: any = localStorage.getItem('eToken');
      let decodeToken = jwtDecode(encodeToken);
      this.userData = decodeToken;
      console.log(decodeToken);

    }
  }


  // Method to register a user
  setRegister(userData: object): Observable<any> {
    return this._HttpClient.post(`https://lightgray-duck-186253.hostingersite.com/api/register`, userData)
  }

  // Method to login a user
  setLogin(userData: object): Observable<any> {
    return this._HttpClient.post(`https://lightgray-duck-186253.hostingersite.com/api/login`, userData)
  }
}

