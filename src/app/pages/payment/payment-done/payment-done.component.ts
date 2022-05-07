import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service';
import { LoaderService } from 'src/app/services/loader-service';
import { PlaceOrderService } from 'src/app/services/place-order-service';

@Component({
  selector: 'app-payment-done',
  templateUrl: './payment-done.component.html',
  styleUrls: ['./payment-done.component.scss'],
})
export class PaymentDoneComponent implements OnInit,OnDestroy {
  cartReponse: any;
  cartData: any;
  constructor(
    private cart: CartService,
    private loader: LoaderService,
    private _router: Router,
    private order: PlaceOrderService
  ) {}

  async ngOnInit() {
   await this.loader.simpleLoader();
    this.cartReponse = this.cart.showcart().subscribe((data) => {
      this.cartData = data;
     this.loader.dismissLoader();
    },err=>{
      this.loader.dismissLoader();
    });
  }
  ngOnDestroy(): void {
    this.cartReponse.unsubscribe();
  }

}
