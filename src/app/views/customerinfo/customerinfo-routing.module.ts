import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomerinfoComponent } from "./customerinfo.component";

const routes: Routes = [
  {
    path: "",
    component: CustomerinfoComponent,
    data: {
      title: "Customerinfo",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerinfoRoutingModule {}
