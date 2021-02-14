import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { CustomerinfoComponent } from "./customerinfo.component";
import { CustomerinfoRoutingModule } from "./customerinfo-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    FormsModule,
    CustomerinfoRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [CustomerinfoComponent],
})
export class CustomerinfoModule {}
