import { Injectable } from '@angular/core';
import { IProduct } from '../Models/i-product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  prdList: IProduct[];
  constructor() {
    this.prdList = [
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
    ];
  }

  getAllProducts(): IProduct[] {
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
  }
}
