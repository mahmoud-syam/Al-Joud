import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}

  private baseUrl: string =
    'https://lightgray-duck-186253.hostingersite.com/api/';
  // Done
  addToCart(prodId: string): Observable<any> {
    return this._HttpClient
      .post(`${this.baseUrl}cart/add`, {
        product_id: prodId,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('An error occurred:', error);
          return throwError(
            () =>
              new Error(
                'Failed to add product to cart. Please try again later.'
              )
          );
        })
      );
  }
  // Done
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
  // Done
  removeFromCart(prodId: string): Observable<any> {
    console.log('removeFromCart', prodId);
    return this._HttpClient
      .delete(`${this.baseUrl}cart/remove`, {
        body: {
          product_id: prodId,
        },
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('An error occurred:', error);
          return throwError(
            () =>
              new Error(
                'Failed to remove product from cart. Please try again later.'
              )
          );
        })
      );
  }
  // Not Done
  UpdateCartItem(prodId: string, countNum: number): Observable<any> {
    return this._HttpClient
      .post(`${this.baseUrl}cart`, {
        body: {
          product_id: prodId,
        },
        count: countNum,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(
            'An error occurred while trying to update the item:',
            error
          );
          return throwError(
            () => new Error('Failed to fetch cart. Please try again later.')
          );
        })
      );
  }
  // Not Done
  clearCart(): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}cart/remove`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(
          'An error occurred while trying to remove the item:',
          error
        );
        return throwError(
          () => new Error('Failed to fetch cart. Please try again later.')
        );
      })
    );
  }

  // checkOut(cartId: string, checkoutData: any): Observable<any> {
  //   return this._HttpClient
  //     .post(`${this.baseUrl}cart/orders/${cartId}`, checkoutData)
  //     .pipe(
  //       catchError((error: HttpErrorResponse) => {
  //         console.error('An error occurred:', error);
  //         return throwError(
  //           () => new Error('Failed to check out. Please try again later.')
  //         );
  //       })
  //     );
  // }
  checkOut(cartId: string, checkoutData: any): Observable<any> {
    console.log('checkoutDataFrom Service', checkoutData);
    return this._HttpClient
      .post(`${this.baseUrl}orders`, checkoutData) 
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('An error occurred:', error);
          return throwError(
            () => new Error('Failed to check out. Please try again later.') 
          );
        })
      );
  }
}
