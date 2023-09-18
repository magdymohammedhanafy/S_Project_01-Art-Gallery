import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ICart } from 'src/app/Models/i-cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  cartList: ICart[] = [];
  data: {} = {};
  cart_id: any;
  constructor(private CartService: CartService, private router: Router) {
    this.cart_id = localStorage.getItem('cartId');
    this.CartService.getCartById(this.cart_id).subscribe((data) => {
      this.cartList = data.data.products;
      console.log(data.data.products);
    });
  }
  deleteItem(itemId: number) {
    this.data = {
      cart_id: this.cart_id,
      product_id: itemId,
    };
    alert('are you sure to delete this item from cart');
    this.CartService.deleteItemFromCart(this.data).subscribe((data) => {
      console.log(data);
      window.location.reload();
    });
  }
}
