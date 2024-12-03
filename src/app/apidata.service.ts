import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private _HttpClient: HttpClient) { }


  baseUrl:string = `https://lightgray-duck-186253.hostingersite.com/api/`
  getProducts(pageNum:number=1): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `products?page=${pageNum}`)
  }

  getProductDeials(id: string): Observable<any> {
    return this._HttpClient.get(`https://lightgray-duck-186253.hostingersite.com/api/product/ ${id} `)
  }

  // Get All Categoires
  getCategories(): Observable<any> {
    return this._HttpClient.get(`https://lightgray-duck-186253.hostingersite.com/api/categories`)
  }
}
