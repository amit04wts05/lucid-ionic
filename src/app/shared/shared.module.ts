import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing.modulet';
import { CartComponent } from './cart/cart.component';
import { CategoryTileComponent } from './category-tile/category-tile.component';
import { ProductTileComponent } from './product-tile/product-tile.component';

@NgModule({
  declarations:[SharedComponent,CartComponent,CategoryTileComponent,ProductTileComponent],
  imports:[
    CommonModule,
    IonicModule.forRoot(),
    SharedRoutingModule
  ],
  exports:[CartComponent,CategoryTileComponent,ProductTileComponent]
})
export class SharedModule{

}
