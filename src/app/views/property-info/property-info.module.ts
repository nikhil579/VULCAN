import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { PropertyInfoComponent } from "./property-info.component";
import { PropertyInfoRoutingModule } from "./property-info-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    FormsModule,
    PropertyInfoRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [PropertyInfoComponent],
})
export class PropertyInfoModule {}
