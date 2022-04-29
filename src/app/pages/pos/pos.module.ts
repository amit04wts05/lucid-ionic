import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { PosRoutingModule } from "./pos-routing.module";
import { PosComponent } from "./pos.component";
import { ProductModalComponent } from "../modal/product-modal/product-modal.component";
import { MainLayoutModule } from "src/app/layouts/main/main.module";

@NgModule({
  declarations: [PosComponent,ProductModalComponent],
  imports: [CommonModule, MainLayoutModule, PosRoutingModule, SharedModule],
  exports: [SharedModule],
})
export class PosModule {}
