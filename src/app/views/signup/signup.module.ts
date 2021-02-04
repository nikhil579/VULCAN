import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { SignupComponent } from "./signup.component";
import { SignupRoutingModule } from "./signup-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    FormsModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [SignupComponent],
})
export class SignupModule {}
