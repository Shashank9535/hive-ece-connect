

import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Home, BookOpen, Calendar, Bell, FileText, User, Settings, Users } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

// CampusHive logo component - based on your provided logo
function CampusHiveLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center rounded-md">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-5 w-5"
        >
          <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6 8 8 0 0 0 12 13" />
          <path d="M6 8h12" />
          <path d="M8 12h8" />
          <path d="M9 16h6" />
        </svg>
      </div>
      <span className="font-bold text-lg text-emerald-700 dark:text-emerald-400">CampusHive</span>
    </div>
  );
}

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b border-emerald-100 dark:border-emerald-800/50">
            <div className="flex items-center px-4 py-2">
              <div className="flex flex-col">
                <CampusHiveLogo />
                <p className="text-xs text-muted-foreground">ECE 6th Semester</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Dashboard">
                    <Link to="/">
                      <Home className="h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Assignments">
                    <Link to="/assignments">
                      <FileText className="h-4 w-4" />
                      <span>Assignments</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Students">
                    <Link to="/students">
                      <Users className="h-4 w-4" />
                      <span>Students</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Notes">
                    <Link to="/notes">
                      <BookOpen className="h-4 w-4" />
                      <span>Notes</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Calendar">
                    <Link to="/calendar">
                      <Calendar className="h-4 w-4" />
                      <span>Calendar</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Notices">
                    <Link to="/notices">
                      <Bell className="h-4 w-4" />
                      <span>Notices</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>User</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Profile">
                    <Link to="/profile">
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Settings">
                    <Link to="/settings">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-4 flex justify-between items-center">
              <span className="text-xs text-muted-foreground">v1.0.0</span>
              <ThemeToggle />
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <main className="flex-1 overflow-hidden">
          <div className="flex items-center justify-between border-b border-emerald-100 dark:border-emerald-800/30 p-4 bg-white dark:bg-gray-950">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="font-semibold text-emerald-700 dark:text-emerald-400">Campus Hive</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">John Doe</span>
              <div className="h-8 w-8 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                JD
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-64px)] overflow-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
