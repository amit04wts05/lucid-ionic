import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {
  @ViewChild('sliderIndex',{read:false,static:false}) viewer: ElementRef;
  qty: any = 1;
  size: any;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 2000
    },
    pagination : {
      el: '.swiper-pagination',
      clickable: true,
    }

  }
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {}
  toChange(i){
    console.log(this.viewer);
this.viewer.nativeElement?.slideTo(i, 500);
  }
  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }
  qtyIncrease() {
    this.qty = this.qty + 1;
  }
  qtyDecriment() {
    if (this.qty > 0) {
      this.qty = this.qty - 1;
    }
  }
  onSlideMoved(event) {
   // this.slides.slideTo(i);
   event.target.isEnd().then(isEnd => {
    console.log('End of slide', isEnd);
  });

  event.target.isBeginning().then((istrue) => {
    console.log('End of slide', istrue);
  });
}
    // this.cd.detectChanges();
  ngOnInit() {}
}
