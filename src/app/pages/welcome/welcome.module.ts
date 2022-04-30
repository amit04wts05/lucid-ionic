import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { WelcomeComponent } from './welcome.component';
import { WelcomesRoutingModule } from './welcome_routing.modulet';

@NgModule({
  declarations:[WelcomeComponent],
  imports:[
    CommonModule,
    IonicModule.forRoot(),
    WelcomesRoutingModule
  ]
})
export class WelcomeModule{

}
