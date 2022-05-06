import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PaymentComponent } from './payment/payment.component';
import { PayNowComponent } from './pay-now/pay-now.component';
import { PaymentRoutingModule } from './payment_routing.module';

@NgModule({
  declarations:[PaymentComponent],
  imports:[
    CommonModule,
    IonicModule.forRoot(),
    PaymentRoutingModule
  ]
})
export class PaymentModule{

}
