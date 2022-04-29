import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing.modulet';

@NgModule({
  declarations:[SharedComponent],
  imports:[
    CommonModule,
    IonicModule.forRoot(),
    SharedRoutingModule
  ]
})
export class SharedModule{

}
