
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
import { Home, BookOpen, Calendar, Bell, FileText, User, Settings, Users, Clock, CreditCard, LogOut } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

// CampusHive logo component based on the uploaded image
function CampusHiveLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50,0L93.3,25v50L50,100L6.7,75V25L50,0z" fill="#059669" />
          <path d="M35,35c0-8.3,6.7-15,15-15s15,6.7,15,15v10c0,1.7-1.3,3-3,3h-4v-13c0-4.4-3.6-8-8-8s-8,3.6-8,8v13h-4c-1.7,0-3-1.3-3-3V35z" fill="white" />
          <path d="M50,75c-8.3,0-15-6.7-15-15h8c0,3.9,3.1,7,7,7s7-3.1,7-7h8C65,68.3,58.3,75,50,75z" fill="white" />
        </svg>
      </div>
      <span className="font-bold text-xl text-green-700 dark:text-green-400">CampusHive</span>
    </div>
  );
}

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b border-green-100 dark:border-green-800/50">
            <div className="flex items-center px-4 py-3">
              <div className="flex flex-col">
                <CampusHiveLogo />
                <p className="text-xs text-muted-foreground">ECE 6th Semester</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Academic</SidebarGroupLabel>
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
                  <SidebarMenuButton asChild tooltip="Attendance">
                    <Link to="/attendance">
                      <Clock className="h-4 w-4" />
                      <span>Attendance</span>
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
                  <SidebarMenuButton asChild tooltip="Fee Payment">
                    <Link to="/fees">
                      <CreditCard className="h-4 w-4" />
                      <span>Fee Payment</span>
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
                  <SidebarMenuButton asChild tooltip="Notes">
                    <Link to="/notes">
                      <BookOpen className="h-4 w-4" />
                      <span>Notes</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Community</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Students">
                    <Link to="/students">
                      <Users className="h-4 w-4" />
                      <span>Students</span>
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
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
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
          <div className="flex items-center justify-between border-b border-green-100 dark:border-green-800/30 p-4 bg-white dark:bg-gray-950">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="font-semibold text-green-700 dark:text-green-400">CampusHive</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">{user?.email?.split('@')[0] || 'User'}</span>
              <div className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                {user?.email?.charAt(0).toUpperCase() || 'U'}
              </div>
              <Button onClick={handleLogout} size="sm" variant="outline" className="ml-2">
                <LogOut className="h-4 w-4" />
              </Button>
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
