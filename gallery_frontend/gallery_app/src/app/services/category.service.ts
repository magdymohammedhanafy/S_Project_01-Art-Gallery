import { Injectable } from '@angular/core';
import { ICategory } from '../Models/i-category';
import { IProduct } from '../Models/i-product';
import { ProductService } from './product.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  httpOption: {};

  constructor(private httpClient: HttpClient) {
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

  getAllCategories(): Observable<any> {
    return this.httpClient
      .get<any>(`http://127.0.0.1:8000/api/categories`, this.httpOption)
      .pipe(catchError(this.handleError));
  }

  getCategoryById(categId: number): Observable<any> {
    return this.httpClient.get<any>(
      `http://127.0.0.1:8000/api/categories/${categId}`
    );
  }

  /*  getAllCategories(): ICategory[] {
    return this.categList;
  }

  getCategoryById(prdID: number): ICategory | null {
    let foundProduct = this.categList.find((product) => prdID == product.id);
    return foundProduct ? foundProduct : null;
  }

  addNewCategory(prd: ICategory): void {
    this.categList.push(prd);
  }*/
}
