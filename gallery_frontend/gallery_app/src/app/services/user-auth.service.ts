import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRegister } from '../Models/i-user-register';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { IUserLogin } from '../Models/i-user-login';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  httpOption: {};
  token: any;
  private isLoggedSubject!: BehaviorSubject<boolean>;
  constructor(private httpClient: HttpClient) {
    this.token = localStorage.getItem('token');
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //Authorization: 'my-auth-token',
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

  register(user: IUserRegister): Observable<any> {
    return this.httpClient
      .post<any>(
        `http://127.0.0.1:8000/api/auth/register`,
        JSON.stringify(user),
        this.httpOption
      )
      .pipe(catchError(this.handleError));
  }

  login(user: IUserLogin): Observable<any> {
    return this.httpClient
      .post<any>(
        `http://127.0.0.1:8000/api/auth/login`,
        JSON.stringify(user),
        this.httpOption
      )
      .pipe(catchError(this.handleError));
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('cartId');
  }

  isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  /* isUserLoggedSubject() {
    return this.isLoggedSubject.asObservable();
  }*/
}
