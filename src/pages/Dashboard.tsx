
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, AlertCircle, BookOpen, Users, Bell, ExternalLink, GraduationCap, Clock, CheckCircle, XCircle, CreditCard, Sync, Settings } from "lucide-react";

// Mock data - replace with real data later
const mockStudent = {
  name: "John Doe",
  rollNumber: "3VY22UE001",
  department: "Electronics and Computer Engineering",
  semester: "6th Semester",
  attendance: 85,
  cgpa: 8.7,
  fees: {
    deadline: "2025-06-30",
    status: "Paid",
    amount: "₹75,000",
    dueAmount: "₹0"
  }
};

// Format date for display
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};

// Quick access modules matching the user flow
const quickAccessModules = [
  {
    title: "View and Track Assignments",
    description: "Submit and track all your assignments",
    icon: <FileText className="h-6 w-6" />,
    link: "/assignments",
    color: "bg-green-50 border-green-200 text-green-700"
  },
  {
    title: "View Attendance Records",
    description: "Check your attendance across all subjects",
    icon: <Clock className="h-6 w-6" />,
    link: "/attendance",
    color: "bg-blue-50 border-blue-200 text-blue-700"
  },
  {
    title: "Check Fee Payment Status",
    description: "View fee status and upcoming deadlines",
    icon: <CreditCard className="h-6 w-6" />,
    link: "/fees",
    color: "bg-purple-50 border-purple-200 text-purple-700"
  },
  {
    title: "Important Notices",
    description: "Latest announcements and updates",
    icon: <Bell className="h-6 w-6" />,
    link: "/notices",
    color: "bg-red-50 border-red-200 text-red-700"
  },
  {
    title: "Profile & Notification Settings",
    description: "Manage your profile and sync with Google Calendar",
    icon: <Settings className="h-6 w-6" />,
    link: "/profile",
    color: "bg-indigo-50 border-indigo-200 text-indigo-700"
  },
  {
    title: "Academic Calendar", 
    description: "Important dates and events",
    icon: <Calendar className="h-6 w-6" />,
    link: "/calendar",
    color: "bg-orange-50 border-orange-200 text-orange-700"
  }
];

// Recent activities
const recentActivities = [
  {
    title: "Assignment Submitted",
    description: "Digital Signal Processing Lab Report",
    time: "2 hours ago",
    status: "success",
    icon: <CheckCircle className="h-4 w-4 text-green-600" />
  },
  {
    title: "New Notice Posted",
    description: "End Semester Exam Schedule Released",
    time: "5 hours ago", 
    status: "info",
    icon: <Bell className="h-4 w-4 text-blue-600" />
  },
  {
    title: "Attendance Updated",
    description: "Computer Networks - Present",
    time: "1 day ago",
    status: "success", 
    icon: <CheckCircle className="h-4 w-4 text-green-600" />
  },
  {
    title: "Fee Payment Reminder",
    description: "Next semester fee due in 30 days",
    time: "2 days ago",
    status: "warning",
    icon: <AlertCircle className="h-4 w-4 text-yellow-600" />
  }
];

// Important notices from official college website
const importantNotices = [
  {
    title: "End Semester Examination Schedule",
    description: "The examination schedule for 6th semester has been released. Please check the academic calendar for detailed timings.",
    date: "2025-05-15",
    type: "exam",
    source: "Academic Office"
  },
  {
    title: "Technical Symposium 2025",
    description: "Registration open for the annual technical symposium. Submit your projects before the deadline.",
    date: "2025-05-18",
    type: "event",
    source: "ECE Department"
  },
  {
    title: "Library Book Return Reminder",
    description: "All borrowed books must be returned before the semester end. Check your library account for details.",
    date: "2025-05-20",
    type: "reminder",
    source: "Central Library"
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-6 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome to CampusHive</h1>
            <p className="text-green-100 mt-2">
              {mockStudent.name} | {mockStudent.rollNumber} | {mockStudent.department}
            </p>
            <p className="text-green-100">
              {mockStudent.semester} | Academic Year 2024-25
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{mockStudent.cgpa}</div>
              <div className="text-sm text-green-100">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{mockStudent.attendance}%</div>
              <div className="text-sm text-green-100">Attendance</div>
            </div>
            <Button variant="outline" className="text-green-700 border-green-200 bg-white hover:bg-green-50">
              <Sync className="h-4 w-4 mr-2" />
              Sync Calendar
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats - Dashboard Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Records</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{mockStudent.attendance}%</div>
            <Progress value={mockStudent.attendance} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {mockStudent.attendance >= 75 ? "✓ Meets requirement" : "⚠ Below requirement"}
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assignment Tracker</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">3</div>
            <p className="text-xs text-muted-foreground mt-2">
              Pending submissions
            </p>
            <p className="text-xs text-green-600 mt-1">Next due: May 25, 2025</p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fee Payment Status</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{mockStudent.fees.status}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Amount: {mockStudent.fees.amount}
            </p>
            <p className="text-xs text-purple-600 mt-1">Due: {formatDate(mockStudent.fees.deadline)}</p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Important Notices</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{importantNotices.length}</div>
            <p className="text-xs text-muted-foreground mt-2">
              New announcements
            </p>
            <p className="text-xs text-red-600 mt-1">Latest: {formatDate(importantNotices[0].date)}</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access Modules - Student User Flow */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Dashboard - Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickAccessModules.map((module, index) => (
            <Card key={index} className={`hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${module.color}`}>
              <a href={module.link} className="block h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-3 rounded-lg bg-white shadow-sm">
                    {module.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold">{module.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {module.description}
                  </CardDescription>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activities
            </CardTitle>
            <CardDescription>Your latest academic activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                {activity.icon}
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-blue-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Upcoming Deadlines
            </CardTitle>
            <CardDescription>Important dates approaching</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border-l-4 border-l-yellow-500 bg-yellow-50 rounded">
              <div>
                <p className="font-medium">Digital Signal Processing</p>
                <p className="text-sm text-muted-foreground">Lab Report Submission</p>
              </div>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                2 days left
              </Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border-l-4 border-l-orange-500 bg-orange-50 rounded">
              <div>
                <p className="font-medium">VLSI Design</p>
                <p className="text-sm text-muted-foreground">Circuit Simulation</p>
              </div>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                5 days left
              </Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border-l-4 border-l-red-500 bg-red-50 rounded">
              <div>
                <p className="font-medium">Next Semester Fee</p>
                <p className="text-sm text-muted-foreground">Payment Deadline</p>
              </div>
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                30 days left
              </Badge>
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              <Calendar className="h-4 w-4 mr-2" />
              Sync with Google Calendar
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Important Notices Section - Auto-scraped from official college website */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Important Notices (Auto-scraped from Official College Website)
          </CardTitle>
          <CardDescription>Latest announcements from college administration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {importantNotices.map((notice, index) => (
              <div key={index} className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-900">{notice.title}</h4>
                    <p className="text-sm text-blue-700 mt-1">{notice.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <p className="text-xs text-blue-600">Posted on {formatDate(notice.date)}</p>
                      <p className="text-xs text-blue-600">Source: {notice.source}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className="bg-blue-100 text-blue-800 capitalize">{notice.type}</Badge>
                  </div>
                </div>
              </div>
            ))}
            
            <Button variant="ghost" className="w-full text-green-600 hover:text-green-700 hover:bg-green-50">
              View All Notices
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
