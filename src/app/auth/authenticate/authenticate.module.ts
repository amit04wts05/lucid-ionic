import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthenticateComponent } from './authenticate.component';
import { AuthenticateRoutingModule } from './authenticate-routing.modulet';

@NgModule({
  declarations:[AuthenticateComponent],
  imports:[
    CommonModule,
    IonicModule.forRoot(),
    AuthenticateRoutingModule
  ]
})
export class AuthenticateModule{

}
