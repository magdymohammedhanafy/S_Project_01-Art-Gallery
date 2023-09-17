import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/i-product';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges {
  prdList: IProduct[] = [];
  data: {} = {};
  cartId: any = 0;
  @Input() sentCategoryID: number = 0;

  constructor(
    private ProductService: ProductService,
    private router: Router,
    private CartService: CartService
  ) {
    this.ProductService.getAllProducts().subscribe((products) => {
      this.cartId = localStorage.getItem('cartId');
      this.prdList = products.data;
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(): void {
    this.ProductService.getProductByCategoryID(this.sentCategoryID).subscribe(
      (products) => {
        this.prdList = products.data.products;
        console.log(this.prdList);
      }
    );
  }
  addItemToCart(prdId: number) {
    this.data = {
      cart_id: this.cartId,
      product_id: prdId,
    };
    this.CartService.addItemToCart(this.data).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        // Handle error
        console.log('An error occurred :', error);
      }
    );
  }

  navigateToPrdDetails(prdId: number) {
    console.log(prdId);
    this.router.navigate(['/products/details', prdId]);
  }
}
