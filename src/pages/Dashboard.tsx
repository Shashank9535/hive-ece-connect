
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, Calendar, AlertCircle, BookOpen } from "lucide-react";

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

const mockAssignments = [
  {
    id: 1,
    subject: "Digital Signal Processing",
    title: "FFT Algorithm Implementation",
    dueDate: "2023-05-25",
    status: "in-progress"
  },
  {
    id: 2,
    subject: "Computer Networks",
    title: "Network Protocols Analysis",
    dueDate: "2023-05-28",
    status: "in-progress"
  },
  {
    id: 3,
    subject: "VLSI Design",
    title: "CMOS Layout Design",
    dueDate: "2023-06-02",
    status: "not-started"
  }
];

const mockNotices = [
  {
    id: 1,
    title: "End Semester Exam Schedule",
    date: "2023-05-15",
    type: "exam",
    link: "#"
  },
  {
    id: 2,
    title: "Project Submission Deadline",
    date: "2023-05-18",
    type: "academic",
    link: "#"
  },
  {
    id: 3,
    title: "Technical Symposium Registration",
    date: "2023-05-20",
    type: "event",
    link: "#"
  }
];

export default function Dashboard() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Welcome, {mockStudent.name}</h2>
        <p className="text-muted-foreground">
          Roll Number: {mockStudent.rollNumber} | {mockStudent.department} | {mockStudent.semester}
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Status</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStudent.attendance}%</div>
            <Progress value={mockStudent.attendance} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {mockStudent.attendance >= 75 ? "Good standing" : "Attendance below requirement"}
            </p>
          </CardContent>
        </Card>
        
        <Card>
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
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockAssignments.length}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Next due: {formatDate(mockAssignments[0].dueDate)}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Notices</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockNotices.length}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Latest: {formatDate(mockNotices[0].date)}
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Assignments</CardTitle>
            <CardDescription>
              Your recent assignment tasks and deadlines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center space-x-4">
                  <div className={`rounded-full p-1 ${
                    assignment.status === 'completed' ? 'bg-green-500' :
                    assignment.status === 'in-progress' ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {assignment.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {assignment.subject} • Due {formatDate(assignment.dueDate)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Notices</CardTitle>
            <CardDescription>
              Latest updates and announcements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockNotices.map((notice) => (
                <div key={notice.id} className="flex items-start space-x-4">
                  <span className={`rounded px-2 py-1 text-xs ${
                    notice.type === 'exam' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                    notice.type === 'academic' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' : 
                    'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                  }`}>
                    {notice.type.charAt(0).toUpperCase() + notice.type.slice(1)}
                  </span>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      <a href={notice.link} className="hover:underline">
                        {notice.title}
                      </a>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Posted on {formatDate(notice.date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
