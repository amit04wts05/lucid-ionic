import { Component, OnInit } from '@angular/core';
import {  ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {

  constructor(private modalController: ModalController,
    private navParams: NavParams) { }
    
    async closeModal() {
      const onClosedData: string = "Wrapped Up!";
      await this.modalController.dismiss(onClosedData);
    }

  ngOnInit() {}

}
