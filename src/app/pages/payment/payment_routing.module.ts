import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { PayNowComponent } from './pay-now/pay-now.component';


const routes: Routes = [
  {path:'',component:PaymentComponent},
  {path:'paynow',component:PayNowComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
