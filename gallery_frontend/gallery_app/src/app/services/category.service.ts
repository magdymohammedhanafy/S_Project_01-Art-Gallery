import { Injectable } from '@angular/core';
import { ICategory } from '../Models/i-category';
import { IProduct } from '../Models/i-product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categList: ICategory[];

  constructor(private ProductService: ProductService) {
    this.categList = [
      { id: 1, name: 'categ1' },
      { id: 2, name: 'categ2' },
      { id: 3, name: 'categ3' },
      { id: 4, name: 'categ4' },
      { id: 5, name: 'categ5' },
      { id: 6, name: 'categ6' },
    ];
  }

  getAllCategories(): ICategory[] {
    return this.categList;
  }

  getCategoryById(prdID: number): ICategory | null {
    let foundProduct = this.categList.find((product) => prdID == product.id);
    return foundProduct ? foundProduct : null;
  }

  addNewCategory(prd: ICategory): void {
    this.categList.push(prd);
  }

  getProductByCategoryID(categID: number): IProduct[] {
    if (categID == 0) {
      return this.ProductService.getAllProducts();
    } else {
      return this.ProductService.getAllProducts().filter(
        (product) => categID == product.categoryID
      );
    }
  }
}
