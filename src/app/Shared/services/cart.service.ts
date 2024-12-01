import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}

  private baseUrl: string = 'https://lightgray-duck-186253.hostingersite.com/api/';

  addToCart(prodId: string): Observable<any> {
    return this._HttpClient
      .post(`${this.baseUrl}cart/add`, {
        product_id: prodId,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('An error occurred:', error);
          return throwError(
            () => new Error('Failed to add product to cart. Please try again later.')
          );
        })
      );
  }

  getCartUser(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}cart`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error);
        return throwError(
          () => new Error('Failed to fetch cart. Please try again later.')
        );
      })
    );
  }
}
  // addToCart(prodId: string): Observable<any> {

  //   return this._HttpClient.post(
  //     `https://lightgray-duck-186253.hostingersite.com/api/cart/add`,

  //     {
  //       product_id: prodId,
  //     },
  //     {
  //       headers:
  //         {Authorization: 'Bearer' + localStorage.getItem('token'),}
  //         // {token:JSON.stringify(localStorage.getItem('etoken'))}
  //     },
  //   );
  // }
  // addToCart(prodId: string): Observable<any> {
  //   let headers = { Authorization: `Bearer token` };
  //   return this._HttpClient.post(
  //     'https://lightgray-duck-186253.hostingersite.com/api/cart/add',
  //     { product_id: prodId },
  //     { headers }
  //   );
  // }

