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
  ngOnInit() {}

  subscribeRefreshCart() {
    this.cartRefreshService = this.cartService.refreshCart.subscribe((data) => {
      this.cartService.showcart().subscribe(
        (data) => {
          this.cartData = data;
        },
        (err) => {
          console.log(err);
          this.cartData = null;
        }
      );
    });
    this.refresh();
  }

  refresh() {
    this.cartService.refreshCart.next('');
  }
  payNow(){
    this._router.navigate(['payment']);

  }

  clearCart() {
    this.cartService.clearCart(localStorage.getItem("employeeId")).subscribe(
      (data) => {
        console.log(`Cart cleared!`);
        this.refresh();
      }
    )
  }
}
