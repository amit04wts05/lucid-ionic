import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { PosRoutingModule } from "./pos-routing.module";
import { PosComponent } from "./pos.component";
import { ProductModalComponent } from "../modal/product-modal/product-modal.component";
import { MainLayoutModule } from "src/app/layouts/main/main.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomerModalComponent } from "../modal/customer-modal/customer-modal.component";

@NgModule({
  declarations: [PosComponent,ProductModalComponent,CustomerModalComponent],
  imports: [CommonModule, MainLayoutModule, PosRoutingModule, SharedModule,FormsModule,ReactiveFormsModule],
  exports: [SharedModule],
})
export class PosModule {}
