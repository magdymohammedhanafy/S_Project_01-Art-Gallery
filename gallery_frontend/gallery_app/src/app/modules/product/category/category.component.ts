import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/i-category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categList: ICategory[];
  selectedCategoryId: number = 0;
  constructor(private CategoryService: CategoryService) {
    this.categList = CategoryService.getAllCategories();
  }
}
