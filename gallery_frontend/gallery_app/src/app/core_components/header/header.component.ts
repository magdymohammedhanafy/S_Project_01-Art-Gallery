import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ICategory } from 'src/app/Models/i-category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  icon = faCoffee;
  categList: ICategory[];
  constructor(private CategoryService: CategoryService) {
    this.categList = CategoryService.getAllCategories();
  }
}
