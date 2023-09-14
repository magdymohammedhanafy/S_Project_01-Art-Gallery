import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/i-product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges {
  prdList: IProduct[];
  @Input() sentCategoryID: number = 0;
  constructor(
    private ProductService: ProductService,
    private CategoryService: CategoryService
  ) {
    this.prdList = this.ProductService.getAllProducts();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(): void {
    this.prdList = this.CategoryService.getProductByCategoryID(
      this.sentCategoryID
    );
  }
}
