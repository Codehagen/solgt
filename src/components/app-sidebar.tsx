"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Building,
  LifeBuoy,
  Send,
} from "lucide-react";

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
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Jan Oftedal",
    email: "Jan@solgt.no",
    avatar: "/avatars/solgt.jpg",
  },
  teams: [
    {
      name: "Solgt.no",
      logo: Building,
      plan: "Basic",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: PieChart,
      items: [
        {
          title: "Oversikt",
          url: "/dashboard/oversikt",
        },
        {
          title: "Favoritter",
          url: "/dashboard/favoritter",
        },
        {
          title: "Innstillinger",
          url: "/dashboard/innstillinger",
        },
      ],
    },
    {
      title: "Eiendommer",
      url: "/eiendommer",
      icon: Map,
      items: [
        {
          title: "Søk",
          url: "/eiendommer/sok",
        },
        {
          title: "Til salgs",
          url: "/eiendommer/til-salgs",
        },
        {
          title: "Nylig solgt",
          url: "/eiendommer/nylig-solgt",
        },
      ],
    },
    {
      title: "Verktøy",
      url: "#",
      icon: SquareTerminal,
      items: [
        {
          title: "Prisestimator",
          url: "#",
        },
        {
          title: "Boliglånskalkulator",
          url: "#",
        },
        {
          title: "Markedsanalyse",
          url: "#",
        },
      ],
    },
    {
      title: "Hjelp",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Brukerveiledning",
          url: "#",
        },
        {
          title: "FAQ",
          url: "#",
        },
        {
          title: "Kontakt oss",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Mine annonser",
      url: "#",
      icon: Frame,
    },
    {
      name: "Søkeagenter",
      url: "#",
      icon: Bot,
    },
    {
      name: "Markedsrapporter",
      url: "#",
      icon: GalleryVerticalEnd,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const navMainWithActiveState = data.navMain.map((item) => ({
    ...item,
    isActive: pathname.startsWith(item.url),
  }));

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainWithActiveState} />
        <NavProjects projects={data.projects} />
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="sm">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
