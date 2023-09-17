import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryComponent } from './category/category.component';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from '../auth/login/login.component';
import { AppComponent } from 'src/app/app.component';

const routes: Routes = [
  {
    path: 'products_list',
    component: CategoryComponent,
  },
  {
    path: 'details/:pid',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
