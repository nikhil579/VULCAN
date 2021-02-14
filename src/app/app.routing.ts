import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";
// import { AccountComponent } from "./views/account/account.component";
// import { CustomerinfoComponent } from "./views/customerinfo/customerinfo.component";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
// import { SignupComponent } from "./views/signup/signup.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404",
    },
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500",
    },
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page",
    },
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page",
    },
  },
  {
    path: "",
    redirectTo: "signup",
    pathMatch: "full",
  },

  {
    path: "",
    redirectTo: "account",
    pathMatch: "full",
  },
  // {
  //   path: "",
  //   component: SignupComponent,
  //   data: {
  //     title: "Sign-Up",
  //   },
  // },
  // {
  //   path: "account",
  //   component: AccountComponent,
  //   data: {
  //     title: "Sign-Up",
  //   },
  // },
  // {
  //   path: "",
  //   redirectTo: "customerinfo",
  //   pathMatch: "full",
  // },
 
  // {
  //   path: "customerinfo",
  //   component: CustomerinfoComponent,
  //   data: {
  //     title: "Customer Information",
  //   },
  // },

  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home",
    },
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "signup",
        loadChildren: () =>
          import("./views/signup/signup.module").then((m) => m.SignupModule),
      },
      {
        path: "account",
        loadChildren: () =>
          import("./views/account/account.module").then((m) => m.AccountModule),
      },
      {
        path: "customerinfo",
        loadChildren: () =>
          import("./views/customerinfo/customerinfo.module").then((m) => m.CustomerinfoModule),
      },
    ],
  },
  { path: "**", component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
