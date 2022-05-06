import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { PayNowComponent } from './pay-now/pay-now.component';
import { PaymentDoneComponent } from './payment-done/payment-done.component';


const routes: Routes = [
  {path:'',component:PaymentComponent},
  {path:'paynow',component:PayNowComponent},
  {path:'paymentdone',component:PaymentDoneComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
