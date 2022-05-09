import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service';
import { LoaderService } from 'src/app/services/loader-service';
import { LoadingController, ModalController } from '@ionic/angular';
import { CustomerModalComponent } from 'src/app/pages/modal/customer-modal/customer-modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartRefreshService: Subscription;
  cartData: any;
  loaderData: any;
  dataReturned: any;
  constructor(
    private cartService: CartService,
    private _router: Router,
    private loadingCtr: LoadingController,
    private loader: LoaderService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.subscribeRefreshCart();
  }

  async subscribeRefreshCart() {
    this.cartRefreshService = this.cartRefreshService =
      this.cartService.refreshCart.subscribe(async (data) => {
        await this.dismissLoader();
        await this.startLoading();
        this.cartService.showcart().subscribe(
          (data) => {
            this.dismissLoader();
            this.cartData = data;
            console.log(data);
          },
          (err) => {
            console.log('error in data');
            this.dismissLoader();

            console.log(err);
            this.cartData = null;
          }
        );
      });
    setTimeout(() => {
      this.refresh();
    }, 100);
  }

  refresh() {
    this.cartService.refreshCart.next('');
  }

  payNow() {
    this._router.navigate(['payment']);
  }

  async startLoading() {
    this.loaderData = await this.loadingCtr.create({
      backdropDismiss: true,
    });
    await this.loaderData.present();
  }
  async dismissLoader() {
    try {
      await this.loaderData.dismiss();
    } catch (e) {}
  }
  clearCart() {
    this.loader.simpleLoader();
    this.cartService.clearCart(localStorage.getItem('employeeId')).subscribe(
      (data) => {
        this.loader.dismissLoader();
        console.log(`Cart cleared!`);
        this.refresh();
      },
      (err) => {
        this.loader.dismissLoader();
      }
    );
  }
  async customer() {
    const modal = await this.modalController.create({
      component: CustomerModalComponent,
      componentProps: {},
      cssClass: 'product-popup',
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
  async showCustomer() {}
  ngOnDestroy(): void {
    this.cartRefreshService.unsubscribe();
  }
}
