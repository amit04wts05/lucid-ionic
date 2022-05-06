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
    private modalController: ModalController,
    private navParams: NavParams,
    private http: CartService,
    private loader: LoaderService
  ) {}
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
  onSlideMoved(event) {
    // this.slides.slideTo(i);
    event.target.isEnd().then((isEnd) => {
      console.log('End of slide', isEnd);
    });

    event.target.isBeginning().then((istrue) => {
      console.log('End of slide', istrue);
    });
  }
  addCart(productId) {
    this.loader.startLoading();
    this.http.addCart(productId._id, this.qty, this.size).subscribe((data) => {
      console.log(data);
      this.closeModal();
      this.loader.dismissLoader();
    }),
      (err) => {
        console.log(err);
      };
  }
  ngOnInit() {}
}
