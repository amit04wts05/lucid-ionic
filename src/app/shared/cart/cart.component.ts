import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartRefreshService: Subscription;
  cartData: any;
  constructor(private cartService: CartService,private _router: Router) {
    this.subscribeRefreshCart();
  }
  subscribeRefreshCart() {
    this.cartRefreshService = this.cartService.refreshCart.subscribe((data) => {
      this.cartService.showcart().subscribe(
        (data) => {
          console.log(data);
          this.cartData = data;
        },
        (err) => {
          console.log(err);
        }
      );
    });
    this.cartService.refreshCart.next('');
  }
  clearCart() {
    let empData = JSON.parse(localStorage.getItem('empData'));
    if (empData.token) {
      this.cartService
        .clearCart(empData.employeeId)
        .subscribe((data) => {});
    }
  }
  payNow(){
    this._router.navigate(['payment']);

  }
  ngOnInit() {}
}
