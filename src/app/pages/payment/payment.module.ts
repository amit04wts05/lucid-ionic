import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { PayNowComponent } from './pay-now/pay-now.component';
import { PaymentDoneComponent } from './payment-done/payment-done.component';
import { PaymentRoutingModule } from './payment_routing.module';

@NgModule({
  declarations:[PaymentComponent,PayNowComponent,PaymentDoneComponent],
  imports:[
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    PaymentRoutingModule
  ]
})
export class PaymentModule{

}
