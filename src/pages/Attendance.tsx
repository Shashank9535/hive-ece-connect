
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  BookOpen,
  TrendingUp,
  Users,
  Download
} from "lucide-react";

export default function Attendance() {
  const [selectedSemester, setSelectedSemester] = useState("6");
  const [selectedSubject, setSelectedSubject] = useState("all");

  // Mock attendance data
  const subjects = [
    {
      code: "18EC61",
      name: "Computer Communication Networks",
      instructor: "Dr. Priya Sharma",
      totalClasses: 45,
      attendedClasses: 38,
      percentage: 84.4,
      status: "good",
      lastAttendance: "2025-05-30"
    },
    {
      code: "18EC62", 
      name: "Digital Signal Processing",
      instructor: "Prof. Rajesh Kumar",
      totalClasses: 42,
      attendedClasses: 32,
      percentage: 76.2,
      status: "warning",
      lastAttendance: "2025-05-29"
    },
    {
      code: "18EC63",
      name: "VLSI Design",
      instructor: "Dr. Anita Reddy",
      totalClasses: 40,
      attendedClasses: 36,
      percentage: 90.0,
      status: "excellent",
      lastAttendance: "2025-05-30"
    },
    {
      code: "18EC64",
      name: "Embedded System Design",
      instructor: "Prof. Suresh Babu",
      totalClasses: 38,
      attendedClasses: 27,
      percentage: 71.1,
      status: "critical",
      lastAttendance: "2025-05-28"
    },
    {
      code: "18EC65",
      name: "Digital Image Processing",
      instructor: "Dr. Meera Nair",
      totalClasses: 36,
      attendedClasses: 32,
      percentage: 88.9,
      status: "good",
      lastAttendance: "2025-05-29"
    }
  ];

  // Mock detailed attendance records
  const attendanceRecords = [
    { date: "2025-05-30", subject: "18EC61", status: "present", time: "09:00 AM" },
    { date: "2025-05-30", subject: "18EC63", status: "present", time: "11:00 AM" },
    { date: "2025-05-29", subject: "18EC62", status: "absent", time: "02:00 PM" },
    { date: "2025-05-29", subject: "18EC65", status: "present", time: "04:00 PM" },
    { date: "2025-05-28", subject: "18EC64", status: "present", time: "10:00 AM" },
    { date: "2025-05-28", subject: "18EC61", status: "present", time: "03:00 PM" },
    { date: "2025-05-27", subject: "18EC63", status: "present", time: "09:00 AM" },
    { date: "2025-05-27", subject: "18EC62", status: "absent", time: "11:00 AM" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-800 border-green-200";
      case "good":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "critical":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
      case "good":
        return <CheckCircle className="h-4 w-4" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4" />;
      case "critical":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const overallAttendance = subjects.reduce((acc, subject) => acc + subject.percentage, 0) / subjects.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Course Attendance</h2>
          <p className="text-gray-600 mt-1">Track your academic attendance across all subjects</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5th Sem</SelectItem>
              <SelectItem value="6">6th Sem</SelectItem>
              <SelectItem value="7">7th Sem</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Overall Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">{overallAttendance.toFixed(1)}%</p>
                <p className="text-sm text-gray-600">Overall Attendance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <BookOpen className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">{subjects.length}</p>
                <p className="text-sm text-gray-600">Active Subjects</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">{subjects.reduce((acc, sub) => acc + sub.totalClasses, 0)}</p>
                <p className="text-sm text-gray-600">Total Classes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <CheckCircle className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">{subjects.reduce((acc, sub) => acc + sub.attendedClasses, 0)}</p>
                <p className="text-sm text-gray-600">Classes Attended</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject-wise Attendance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Subject-wise Attendance Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjects.map((subject, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg text-gray-900">{subject.name}</h3>
                      <Badge className={`${getStatusColor(subject.status)} border`}>
                        {getStatusIcon(subject.status)}
                        <span className="ml-1 capitalize">{subject.status}</span>
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                      <p><span className="font-medium">Code:</span> {subject.code}</p>
                      <p><span className="font-medium">Instructor:</span> {subject.instructor}</p>
                      <p><span className="font-medium">Last Class:</span> {subject.lastAttendance}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{subject.percentage}%</div>
                      <div className="text-sm text-gray-600">Attendance</div>
                    </div>
                    
                    <div className="w-32">
                      <Progress value={subject.percentage} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{subject.attendedClasses}</span>
                        <span>{subject.totalClasses}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-green-600">
                      <CheckCircle className="h-4 w-4 inline mr-1" />
                      Present: {subject.attendedClasses}
                    </span>
                    <span className="text-red-600">
                      <XCircle className="h-4 w-4 inline mr-1" />
                      Absent: {subject.totalClasses - subject.attendedClasses}
                    </span>
                    <span className="text-blue-600">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      Total: {subject.totalClasses}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Attendance Records */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Recent Attendance Records
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Subject Code</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceRecords.map((record, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {new Date(record.date).toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </TableCell>
                  <TableCell>{record.subject}</TableCell>
                  <TableCell>{record.time}</TableCell>
                  <TableCell>
                    <Badge 
                      className={`${record.status === 'present' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {record.status === 'present' ? (
                        <CheckCircle className="h-3 w-3 mr-1" />
                      ) : (
                        <XCircle className="h-3 w-3 mr-1" />
                      )}
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Attendance Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="text-orange-700">Attendance Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Minimum Requirements</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Minimum 75% attendance required for examination eligibility
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  85% and above: Excellent attendance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  75-84%: Good attendance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Below 75%: Attendance shortage
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Important Notes</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Medical certificates must be submitted within 3 days
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Late arrivals (more than 10 minutes) marked as absent
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Attendance updated within 24 hours of class
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Contact faculty for discrepancies
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
