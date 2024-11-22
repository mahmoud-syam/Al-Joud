import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {

  constructor(private _HttpClient: HttpClient) { }

  baseUrl: string = 'https://lightgray-duck-186253.hostingersite.com/api/';
  forgetPassword(userEmail: object): Observable<any> {
    return this._HttpClient.post('https://lightgray-duck-186253.hostingersite.com/api/forgot-password', userEmail)
  }
  resetCode(resetCode: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'reset-password', resetCode)
  }


}
