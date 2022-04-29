import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing.modulet';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations:[SharedComponent,CartComponent],
  imports:[
    CommonModule,
    IonicModule.forRoot(),
    SharedRoutingModule
  ],
  exports:[CartComponent]
})
export class SharedModule{

}
