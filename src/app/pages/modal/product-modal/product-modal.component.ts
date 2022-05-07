import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides, ModalController, NavParams } from '@ionic/angular';
import { CartService } from 'src/app/services/cart-service';
import { LoaderService } from 'src/app/services/loader-service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {
  @ViewChild('sliderIndex', { read: false, static: false }) viewer: ElementRef;
  qty: any = 1;
  size: any = null;
  product: any;
  activeThumb: 0;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    showBackdrop: false,
    autoplay: false,
    pagination: false,
  };

  constructor(
    public cartService: CartService,
    private modalController: ModalController,
    private loader: LoaderService,
    private navParams: NavParams,
    private http: CartService
  ) { }

  ngOnInit() { }

  toChange(i) {
    this.viewer.nativeElement?.slideTo(i + 1, 500);
    this.activeThumb = i;
  }

  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

  qtyIncrease() {
    this.qty = this.qty + 1;
  }

  qtyDecriment() {
    if (this.qty > 1) {
      this.qty = this.qty - 1;
    }
  }

  addCart(productId) {
    this.loader.simpleLoader();
    this.http.addCart(productId._id, this.qty, this.size).subscribe(async (data) => {
      console.log(data);

      await this.loader.dismissLoader();
      this.cartService.refreshCart.next('');
      this.closeModal();
    }, err => {
      this.loader.dismissLoader();
      console.log(err);
    })

  }
}
