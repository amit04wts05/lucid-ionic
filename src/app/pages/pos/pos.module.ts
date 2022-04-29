import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { PosRoutingModule } from "./pos-routing.module";
import { PosComponent } from "./pos.component";
import { MainLayoutModule } from "src/app/layouts/main/main.module";

@NgModule({
  declarations: [PosComponent],
  imports: [CommonModule, MainLayoutModule, PosRoutingModule, SharedModule],
  exports: [SharedModule],
})
export class PosModule {}
