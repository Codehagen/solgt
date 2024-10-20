"use client";

import * as React from "react";
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
      title: "Dashbord",
      url: "/dashboard",
      icon: PieChart,
      isActive: true,
      items: [
        {
          title: "Oversikt",
          url: "#",
        },
        {
          title: "Favoritter",
          url: "#",
        },
        {
          title: "Innstillinger",
          url: "#",
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
          url: "#",
        },
        {
          title: "Til salgs",
          url: "#",
        },
        {
          title: "Nylig solgt",
          url: "#",
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
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
