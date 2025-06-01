
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Assignments from "./pages/Assignments";
import Students from "./pages/Students";
import Notes from "./pages/Notes";
import Notices from "./pages/Notices";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Calendar from "./pages/Calendar";
import Attendance from "./pages/Attendance";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import LeaveApplication from "./pages/LeaveApplication";
import Research from "./pages/Research";
import FacultyProfile from "./pages/FacultyProfile";
import Fees from "./pages/Fees";
import { useAuth } from "./hooks/useAuth";

const queryClient = new QueryClient();

// Dashboard router component to handle role-based redirection
const DashboardRouter = () => {
  const { user } = useAuth();
  
  if (user?.role === 'admin') {
    return <Navigate to="/admin-dashboard" replace />;
  }
  
  return <Dashboard />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            {/* Admin-only route */}
            <Route 
              path="/admin-dashboard" 
              element={
                <ProtectedRoute adminOnly>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Protected student/faculty routes */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardRouter />} />
              <Route path="assignments" element={<Assignments />} />
              <Route path="students" element={<Students />} />
              <Route path="notes" element={<Notes />} />
              <Route path="notices" element={<Notices />} />
              <Route path="about" element={<About />} />
              <Route path="profile" element={<Profile />} />
              <Route path="faculty-profile" element={<FacultyProfile />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="leave" element={<LeaveApplication />} />
              <Route path="research" element={<Research />} />
              <Route path="fees" element={<Fees />} />
              <Route path="settings" element={<Profile />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
