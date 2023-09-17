import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [CartListComponent],
  imports: [CommonModule, CartRoutingModule, FormsModule, HttpClientModule],
})
export class CartModule {}
