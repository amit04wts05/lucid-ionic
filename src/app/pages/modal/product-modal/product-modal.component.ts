import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {  IonSlides, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {
qty:any = 1;
size:any ;
@ViewChild('sliderIndex', { static: false }) slides: IonSlides;


  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

    async closeModal() {
      const onClosedData: string = "Wrapped Up!";
      await this.modalController.dismiss(onClosedData);
    }
qtyIncrease(){

  this.qty+=this.qty;
}
qtyDecriment(){
  if(this.qty>0){
    this.qty-=this.qty;
  }

}
selectedImage(i){
  this.slides.slideTo(i);
  // this.cd.detectChanges();
}
  ngOnInit() {}

}
