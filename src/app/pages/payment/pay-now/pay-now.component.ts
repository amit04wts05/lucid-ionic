import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service';
import { LoaderService } from 'src/app/services/loader-service';
import { PlaceOrderService } from 'src/app/services/place-order-service';

@Component({
  selector: 'app-pay-now',
  templateUrl: './pay-now.component.html',
  styleUrls: ['./pay-now.component.scss'],
})
export class PayNowComponent implements OnInit ,OnDestroy {
  cartReponse: any;
  cartData: any;
  amount: number;
  navCtr: any;
  ordrId: any;
  constructor(
    private cart: CartService,
    private loader: LoaderService,
    private _router: Router,
    private order: PlaceOrderService
  ) {}

  ngOnInit() {
    this.loader.simpleLoader();
    this.cartReponse = this.cart.showcart().subscribe((data) => {
      this.cartData = data;
      this.loader.dismissLoader();
    },err=>{
      this.loader.dismissLoader();
    },()=>{
      this.loader.dismissLoader();
    });
  }
  placeOrder(cart) {
    this.loader.simpleLoader();
    this.order.placeOrder(cart._id, this.amount, 'cash').subscribe((data) => {
      this.loader.dismissLoader();
      this._router.navigate(['payment/paymentdone']);;
     // this.ordrId = data['data'].orderNumber;
    },err=>{
      this.loader.dismissLoader();
    },()=>{
      this.loader.dismissLoader();
    });

  }
  ngOnDestroy(): void {
    this.cartReponse.unsubscribe();
  }
}
