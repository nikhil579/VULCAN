import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AccountComponent } from "./account.component";
import { AccountRoutingModule } from "./account-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    FormsModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [AccountComponent],
})
export class AccountModule {}
