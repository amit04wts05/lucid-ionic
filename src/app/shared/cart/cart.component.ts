import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartRefreshService: Subscription;
  cartData: any;
  constructor(private cartService: CartService) {
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
    if(localStorage.getItem("employeeId")){
    this.cartService.clearCart(localStorage.getItem("employeeId")).subscribe((data)=>{

    })
  }

  }
  ngOnInit() {}
}
