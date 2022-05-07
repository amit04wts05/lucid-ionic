import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service';
import { LoaderService } from 'src/app/services/loader-service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit, OnDestroy {
  cartReponse: any;
  cartData: any;
  constructor(
    private cart: CartService,
    private loader: LoaderService,
    private _router: Router
  ) {}

  ngOnInit() {

 this.fetchData();
  }
  async fetchData(){
    await this.loader.simpleLoader();
    this.cartReponse =  this.cart.showcart().subscribe((data) => {
      console.log(data);
      this.cartData = data;
     this.loader.dismissLoader();
    },err=>{
      this.loader.dismissLoader();
    });
  }
  payAmount() {
    this._router.navigate(['payment/paynow']);
  }
  ngOnDestroy(): void {
    this.cartReponse.unsubscribe();
  }
}
