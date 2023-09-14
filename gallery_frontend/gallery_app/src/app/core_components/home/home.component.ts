import { Component } from '@angular/core';
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
  prdList: IProduct[];
  categList: ICategory[];
  serList: IService[];
  constructor(
    private ProductService: ProductService,
    private CategoryService: CategoryService,
    private ServiceService: ServiceService
  ) {
    this.prdList = this.ProductService.getAllProducts();
    this.categList = this.CategoryService.getAllCategories();
    this.serList = this.ServiceService.getAllServices();
  }
}
