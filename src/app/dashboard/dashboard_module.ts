import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MainLayoutModule } from '../layouts/main/main.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard_routing.modulet';

@NgModule({
  declarations:[DashboardComponent],
  imports:[
    CommonModule,
    IonicModule.forRoot(),
    DashboardRoutingModule,
    MainLayoutModule

  ]
})
export class DashboardModule{

}
