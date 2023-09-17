import { Injectable } from '@angular/core';
import { IProduct } from '../Models/i-product';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //prdList: IProduct[];
  httpOption: {};
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //Authorization: 'my-auth-token',
      }),
    };

    /* this.prdList = [
      {
        id: 1,
        name: 'product 1',
        descreption:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit',
        price: 1000,
        stock: 10,
        image: 'https://picsum.photos/200/300',
        categoryID: 1,
      },
      {
        id: 2,
        name: 'product 2',
        descreption:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit',
        price: 1000,
        stock: 20,
        image: 'https://picsum.photos/200/300',
        categoryID: 2,
      },
      {
        id: 3,
        name: 'product 3',
        descreption:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit',
        price: 1000,
        stock: 3,
        image: 'https://picsum.photos/200/300',
        categoryID: 3,
      },
      {
        id: 4,
        name: 'product 4',
        descreption:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit',
        price: 1000,
        stock: 7,
        image: 'https://picsum.photos/200/300',
        categoryID: 4,
      },
    ];*/
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

  getAllProducts(): Observable<any> {
    return this.httpClient
      .get<any>(`http://127.0.0.1:8000/api/products`, this.httpOption)
      .pipe(catchError(this.handleError));
  }

  getProductByCategoryID(categId: number): Observable<any> {
    return this.httpClient
      .get<any>(`http://127.0.0.1:8000/api/categories/products/${categId}`)
      .pipe(catchError(this.handleError));
  }

  getProductById(prdId: number): Observable<any> {
    return this.httpClient.get<any>(
      `http://127.0.0.1:8000/api/products/${prdId}`
    );
  }

  /* addProduct(prd: IProduct): Observable<any> {
    return this.httpClient
      .post<any>(
        `${environment.APIURL}/products`,
        JSON.stringify(prd),
        this.httpOption
      )
      .pipe(catchError(this.handleError));
  }*/

  /* getAllProducts(): IProduct[] {
    return this.prdList;
  }
  getProductByCategoryID(categID: number): IProduct[] {
    if (categID == 0) {
      return this.prdList;
    } else {
      return this.prdList.filter((product) => categID == product.categoryID);
    }
  }
  getProductById(prdID: number): IProduct | null {
    let foundProduct = this.prdList.find((product) => prdID == product.id);
    return foundProduct ? foundProduct : null;
  }

  addNewProduct(prd: IProduct): void {
    this.prdList.push(prd);
  }

  getProductsId(): number[] {
    let ids: number[] = this.prdList.map((product) => product.id);
    return ids;
  }*/
}
