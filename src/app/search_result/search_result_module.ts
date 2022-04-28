import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchResultComponent } from './search_result.component';
import { SearchResultRoutingModule } from './search_result_routing.modulet';

@NgModule({
  declarations:[SearchResultComponent],
  imports:[
    CommonModule,
    IonicModule.forRoot(),
    SearchResultRoutingModule
  ]
})
export class SearchResultModule{

}
