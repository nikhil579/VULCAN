import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PropertyInfoComponent } from "./property-info.component";

const routes: Routes = [
  {
    path: "",
    component: PropertyInfoComponent,
    data: {
      title: "PropertyInfo",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyInfoRoutingModule {}
