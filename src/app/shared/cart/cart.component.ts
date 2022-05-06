import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit,OnDestroy {
  cartRefreshService: Subscription;
  cartData: any = null;
  constructor(private cartService: CartService,private _router: Router) {
    this.subscribeRefreshCart();
  }
  subscribeRefreshCart() {

    this.cartRefreshService = this.cartService.refreshCart.subscribe((data) => {
      console.log(data);
      console.log("refresh cart service");
     this.refreshCart();

  })
}
  refreshCart(){
    this.cartService.showcart().subscribe(
      (data) => {
        console.log("refresh cart service");
        console.log(data);
        this.cartData = data;
      },
      (err) => {
        this.cartData =null
        console.log(err);
      }
    );

  }
  clearCart() {
    let empData = JSON.parse(localStorage.getItem('empData'));
    if (empData.token) {
      this.cartService
        .clearCart(empData.employeeId)
        .subscribe((data) => {
          this.cartService.refreshCart.next('');
        });
    }
  }
  payNow(){
    this._router.navigate(['payment']);

  }
  ngOnInit() {}
  ngOnDestroy(): void {
    this.cartRefreshService.unsubscribe();
  }
}
