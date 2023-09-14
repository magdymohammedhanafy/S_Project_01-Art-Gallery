import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//import { HeaderComponent } from '../../core_components/header/header.component';
//import { FooterComponent } from '../../core_components/footer/footer.component';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    CategoryComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, FormsModule, HttpClientModule],
})
export class ProductModule {}
