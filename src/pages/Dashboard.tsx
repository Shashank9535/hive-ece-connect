
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, AlertCircle, BookOpen, Users, Bell, ExternalLink, GraduationCap } from "lucide-react";

// Mock data - replace with real data later
const mockStudent = {
  name: "John Doe",
  rollNumber: "01FB16ECE123",
  department: "Electronics and Computer Engineering",
  semester: "6th Semester",
  attendance: 85,
  fees: {
    deadline: "2023-06-30",
    status: "Pending"
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

// Mock data for features
const featureCards = [
  {
    title: "Assignments",
    description: "View and submit your course assignments",
    icon: <FileText className="h-10 w-10 text-green-500" />,
    link: "/assignments"
  },
  {
    title: "Students",
    description: "Browse the student directory for your semester",
    icon: <Users className="h-10 w-10 text-green-500" />,
    link: "/students"
  },
  {
    title: "Notes",
    description: "Access lecture notes and study materials",
    icon: <BookOpen className="h-10 w-10 text-green-500" />,
    link: "/notes"
  },
  {
    title: "Notices",
    description: "Stay updated with important announcements",
    icon: <Bell className="h-10 w-10 text-green-500" />,
    link: "/notices"
  },
  {
    title: "Academic Calendar",
    description: "Track important academic dates and events",
    icon: <Calendar className="h-10 w-10 text-green-500" />,
    link: "/calendar"
  },
  {
    title: "Course Portal",
    description: "Access your course materials and resources",
    icon: <GraduationCap className="h-10 w-10 text-green-500" />,
    link: "#"
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-green-100 dark:border-green-900/30 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-500">
              Welcome, {mockStudent.name}
            </h2>
            <p className="text-muted-foreground">
              {mockStudent.rollNumber} | {mockStudent.department} | {mockStudent.semester}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-muted-foreground">
              Last updated: {formatDate(new Date().toISOString())}
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border border-green-100 dark:border-green-900/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Status</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStudent.attendance}%</div>
            <Progress value={mockStudent.attendance} className="mt-2 bg-green-100 dark:bg-green-900/30" />
            <p className="text-xs text-muted-foreground mt-2">
              {mockStudent.attendance >= 75 ? "Good standing" : "Attendance below requirement"}
            </p>
          </CardContent>
        </Card>
        
        <Card className="border border-green-100 dark:border-green-900/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fee Status</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStudent.fees.status}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Deadline: {formatDate(mockStudent.fees.deadline)}
            </p>
          </CardContent>
        </Card>
        
        <Card className="border border-green-100 dark:border-green-900/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-2">
              Next due: May 25, 2025
            </p>
          </CardContent>
        </Card>
        
        <Card className="border border-green-100 dark:border-green-900/30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Notices</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground mt-2">
              Latest: May 15, 2025
            </p>
          </CardContent>
        </Card>
      </div>
      
      <h3 className="text-2xl font-bold tracking-tight text-green-700 dark:text-green-500 mt-8">Features</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureCards.map((card, index) => (
          <Card key={index} className="border border-green-100 dark:border-green-900/30 hover:shadow-md transition-shadow duration-300 group">
            <a href={card.link} className="block h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="rounded-full p-2 bg-green-50 dark:bg-green-900/20">
                  {card.icon}
                </div>
                <div>
                  <CardTitle className="text-xl text-green-700 dark:text-green-400 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors">
                    {card.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {card.description}
                </CardDescription>
              </CardContent>
            </a>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border border-green-100 dark:border-green-900/30">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-400">Upcoming Deadlines</CardTitle>
            <CardDescription>
              Your upcoming assignment deadlines
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="rounded-full p-1 bg-yellow-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Digital Signal Processing: Lab Report
                </p>
                <p className="text-xs text-muted-foreground">
                  Due May 25, 2025
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full p-1 bg-yellow-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  VLSI Design: Circuit Simulation
                </p>
                <p className="text-xs text-muted-foreground">
                  Due May 28, 2025
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full p-1 bg-red-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Computer Networks: Socket Programming
                </p>
                <p className="text-xs text-muted-foreground">
                  Due June 2, 2025
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border border-green-100 dark:border-green-900/30">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-400">Recent Notices</CardTitle>
            <CardDescription>
              Latest announcements from department
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-4">
              <span className="rounded px-2 py-1 text-xs bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                Exam
              </span>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <a href="#" className="hover:underline">
                    End Semester Exam Schedule
                  </a>
                </p>
                <p className="text-xs text-muted-foreground">
                  Posted on May 15, 2025
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="rounded px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                Academic
              </span>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <a href="#" className="hover:underline">
                    Project Submission Deadline
                  </a>
                </p>
                <p className="text-xs text-muted-foreground">
                  Posted on May 18, 2025
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="rounded px-2 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                Event
              </span>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <a href="#" className="hover:underline">
                    Technical Symposium Registration
                  </a>
                </p>
                <p className="text-xs text-muted-foreground">
                  Posted on May 20, 2025
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
