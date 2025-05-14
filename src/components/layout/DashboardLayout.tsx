
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
import { Home, BookOpen, Calendar, Bell, FileText, User, Settings } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b border-border/50">
            <div className="flex items-center px-4 py-2">
              <div className="flex flex-col">
                <h2 className="text-lg font-bold">CampusHive</h2>
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
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="font-semibold">Campus Hive</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">John Doe</span>
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                JD
              </div>
            </div>
          </div>
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
