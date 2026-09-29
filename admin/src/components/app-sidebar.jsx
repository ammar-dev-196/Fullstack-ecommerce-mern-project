"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  LayoutBottomIcon,
  AudioWave01Icon,
  CommandIcon,
  ComputerTerminalIcon,
  RoboticIcon,
  BookOpen02Icon,
  Settings05Icon,
  CropIcon,
  PieChartIcon,
  MapsIcon,
  DashboardSquare01Icon,
  DashboardSquareRemoveIcon,
  BoxIcon,
  ShoppingBag01Icon,
} from "@hugeicons/core-free-icons";

const data = {
  user: {
    name: "User",
    email: "user@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  // teams: [
  //   {
  //     name: "Acme Inc",
  //     logo: <HugeiconsIcon icon={LayoutBottomIcon} strokeWidth={2} />,
  //     plan: "Enterprise",
  //   },
  //   {
  //     name: "Acme Corp.",
  //     logo: <HugeiconsIcon icon={AudioWave01Icon} strokeWidth={2} />,
  //     plan: "Startup",
  //   },
  //   {
  //     name: "Evil Corp.",
  //     logo: <HugeiconsIcon icon={CommandIcon} strokeWidth={2} />,
  //     plan: "Free",
  //   },
  // ],
  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} />,
      isActive: true,
    },
  ],
  navMain: [
    {
      title: "Products",
      url: "#",
      icon: <HugeiconsIcon icon={BoxIcon} strokeWidth={2} />,
      // isActive: true,
      items: [
        {
          title: "Product List",
          url: "/product",
        },
        {
          title: "Add Products",
          url: "product/add-product",
        },
      ],
    },
    {
      title: "Category",
      url: "#",
      icon: <HugeiconsIcon icon={DashboardSquareRemoveIcon} strokeWidth={2} />,
      // isActive: true,
      items: [
        {
          title: "Category List",
          url: "/category",
        },
        {
          title: "Add Category",
          url: "category/add-category",
        },
      ],
    },
    {
      title: "Orders",
      url: "#",
      icon: <HugeiconsIcon icon={ShoppingBag01Icon} strokeWidth={2} />,
      // isActive: true,
      items: [
        {
          title: "Order List",
          url: "/order",
        },
        // {
        //   title: "Add Order",
        //   url: "/order/add-order",
        // },
      ],
    },
    // {
    //   title: "Models",
    //   url: "#",
    //   icon: <HugeiconsIcon icon={RoboticIcon} strokeWidth={2} />,
    //   items: [
    //     {
    //       title: "Genesis",
    //       url: "#",
    //     },
    //     {
    //       title: "Explorer",
    //       url: "#",
    //     },
    //     {
    //       title: "Quantum",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: <HugeiconsIcon icon={BookOpen02Icon} strokeWidth={2} />,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: <HugeiconsIcon icon={Settings05Icon} strokeWidth={2} />,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="border-b py-3 flex flex-row items-center justify-center gap-3">
          <img src="./admin-logo.png" width={40} />
          <h2 className="text-[18px] mt-2">Classy Shop</h2>
        </div>
        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
