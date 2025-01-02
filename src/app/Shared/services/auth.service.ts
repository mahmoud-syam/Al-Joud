import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}
  // property to save token
  userData: any;

  // Method to decode user
  saveUserData(userData: any) {
    if (localStorage.getItem('eToken') != null) {
      const Token: any = sessionStorage.getItem('eToken');
      if (Token) {
        this.userData = userData;
        sessionStorage.setItem('user', JSON.stringify(userData));
      }
    }
  }
  // Method to register a user
  setRegister(userData: object): Observable<any> {
    return this._HttpClient.post(
      `https://paleturquoise-locust-233443.hostingersite.com/api/register`,
      userData
    );
  }

  // Method to login a user
  setLogin(userData: object): Observable<any> {
    return this._HttpClient.post(
      `https://paleturquoise-locust-233443.hostingersite.com/api/login`,
      userData
    );
  }
}
