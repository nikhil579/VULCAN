import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { SellerinfoComponent } from "./sellerinfo.component";
import { SellerinfoRoutingModule } from "./sellerinfo-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    FormsModule,
    SellerinfoRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [SellerinfoComponent],
})
export class SellerinfoModule {}
