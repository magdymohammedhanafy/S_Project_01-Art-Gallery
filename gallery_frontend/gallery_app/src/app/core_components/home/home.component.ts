import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/i-category';
import { IProduct } from 'src/app/Models/i-product';
import { IService } from 'src/app/Models/i-service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  prdList: IProduct[] = [];
  categList: ICategory[] = [];
  serList: IService[];
  prd: any;
  constructor(
    private ProductService: ProductService,
    private CategoryService: CategoryService,
    private ServiceService: ServiceService,
    private router: Router
  ) {
    this.ProductService.getAllProducts().subscribe((products) => {
      this.prdList = products;
      this.prd = products;
      this.prdList = this.prd.data;
    });

    this.CategoryService.getAllCategories().subscribe((categories) => {
      this.categList = categories.data;
    });

    this.serList = this.ServiceService.getAllServices();
  }

  navigateToPrdDetails(prdId: number) {
    console.log(prdId);
    this.router.navigate(['/products/details', prdId]);
  }
}
