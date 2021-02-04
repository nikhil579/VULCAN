import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "icon-speedometer",
    badge: {
      variant: "info",
      text: "NEW",
    },
  },
  {
    name: "Sign-up",
    url: "/signup",
    icon: "icon-user",
  },
  {
    name: "Account",
    url: "/account",
    icon: "icon-user",
  },
  {
    title: true,
    name: "Components",
  },
];
