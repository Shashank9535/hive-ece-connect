
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, AlertCircle, BookOpen, Users, Bell, ExternalLink, GraduationCap, Clock, CheckCircle, XCircle } from "lucide-react";

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
    status: "Paid"
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

// Quick access modules
const quickAccessModules = [
  {
    title: "Course Attendance",
    description: "View attendance records and statistics",
    icon: <Clock className="h-6 w-6" />,
    link: "/attendance",
    color: "bg-blue-50 border-blue-200 text-blue-700"
  },
  {
    title: "Assignment Portal",
    description: "Submit and track assignments",
    icon: <FileText className="h-6 w-6" />,
    link: "/assignments",
    color: "bg-green-50 border-green-200 text-green-700"
  },
  {
    title: "Academic Calendar", 
    description: "Important dates and events",
    icon: <Calendar className="h-6 w-6" />,
    link: "/calendar",
    color: "bg-purple-50 border-purple-200 text-purple-700"
  },
  {
    title: "Student Directory",
    description: "Browse student information",
    icon: <Users className="h-6 w-6" />,
    link: "/students", 
    color: "bg-orange-50 border-orange-200 text-orange-700"
  },
  {
    title: "Notice Board",
    description: "Latest announcements",
    icon: <Bell className="h-6 w-6" />,
    link: "/notices",
    color: "bg-red-50 border-red-200 text-red-700"
  },
  {
    title: "Digital Library",
    description: "Access notes and resources",
    icon: <BookOpen className="h-6 w-6" />,
    link: "/notes",
    color: "bg-indigo-50 border-indigo-200 text-indigo-700"
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
    title: "Assignment Due Soon",
    description: "VLSI Design Circuit Simulation due in 2 days",
    time: "2 days ago",
    status: "warning",
    icon: <AlertCircle className="h-4 w-4 text-yellow-600" />
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
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
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
            <CardTitle className="text-sm font-medium">CGPA</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{mockStudent.cgpa}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Excellent Performance
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">3</div>
            <p className="text-xs text-muted-foreground mt-2">
              Next due: May 25, 2025
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fee Status</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{mockStudent.fees.status}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Due: {formatDate(mockStudent.fees.deadline)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access Modules */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Access</h2>
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
                <p className="font-medium">Computer Networks</p>
                <p className="text-sm text-muted-foreground">Socket Programming</p>
              </div>
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                1 week left
              </Badge>
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              <Calendar className="h-4 w-4 mr-2" />
              View Full Calendar
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Announcements Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Latest Announcements
          </CardTitle>
          <CardDescription>Important notices from administration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-blue-900">End Semester Examination Schedule</h4>
                  <p className="text-sm text-blue-700 mt-1">The examination schedule for 6th semester has been released. Please check the academic calendar for detailed timings.</p>
                  <p className="text-xs text-blue-600 mt-2">Posted on May 15, 2025</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Important</Badge>
              </div>
            </div>
            
            <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-green-900">Technical Symposium 2025</h4>
                  <p className="text-sm text-green-700 mt-1">Registration open for the annual technical symposium. Submit your projects before the deadline.</p>
                  <p className="text-xs text-green-600 mt-2">Posted on May 18, 2025</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Event</Badge>
              </div>
            </div>
            
            <Button variant="ghost" className="w-full text-green-600 hover:text-green-700 hover:bg-green-50">
              View All Announcements
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
