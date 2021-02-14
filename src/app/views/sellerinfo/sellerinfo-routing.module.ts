import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SellerinfoComponent } from "./sellerinfo.component";

const routes: Routes = [
  {
    path: "",
    component: SellerinfoComponent,
    data: {
      title: "Sellerinfo",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerinfoRoutingModule {}
