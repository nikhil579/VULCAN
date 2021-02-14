import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { ProfileComponent } from "./profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    FormsModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
