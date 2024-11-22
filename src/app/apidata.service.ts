import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private _HttpClient: HttpClient) { }



  getProducts(): Observable<any> {
    return this._HttpClient.get(`https://lightgray-duck-186253.hostingersite.com/api/products`)
  }

  getProductDeials(id: string): Observable<any> {
    return this._HttpClient.get(`https://lightgray-duck-186253.hostingersite.com/api/product/ ${id} `)
  }

  // Get All Categoires
  getCategories(): Observable<any> {
    return this._HttpClient.get(`https://lightgray-duck-186253.hostingersite.com/api/categories`)
  }
}
