import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  httpOption: {};
  token: any;
  constructor(
    private httpClient: HttpClient,
    private UserAuthService: UserAuthService
  ) {
    this.token = this.UserAuthService.token;
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      }),
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getCartById(cartId: number): Observable<any> {
    return this.httpClient
      .get<any>(
        `http://127.0.0.1:8000/api/carts/${cartId}`,
        (this.httpOption = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }),
        })
      )
      .pipe(catchError(this.handleError));
  }

  deleteItemFromCart(data: any): Observable<any> {
    return this.httpClient
      .post<any>(
        `http://127.0.0.1:8000/api/carts/remove-item`,
        JSON.stringify(data),
        this.httpOption
      )
      .pipe(catchError(this.handleError));
  }

  addItemToCart(data: any): Observable<any> {
    return this.httpClient
      .post<any>(
        `http://127.0.0.1:8000/api/carts/add-item`,
        JSON.stringify(data),
        (this.httpOption = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }),
        })
      )
      .pipe(catchError(this.handleError));
  }
}
