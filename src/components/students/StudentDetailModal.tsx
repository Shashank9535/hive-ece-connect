import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User, GraduationCap, Calendar, FileText, CreditCard, TrendingUp, Award } from "lucide-react";

interface StudentDetails {
  name: string;
  usn: string;
  department: string;
  semester: string;
  email: string;
  phone: string;
  mentor: string;
  attendance: number;
  assignmentsCompleted: number;
  feeStatus: string;
  upcomingEvent: string;
  cgpa: number;
  sgpa: {
    sem1: number;
    sem2: number;
    sem3: number;
    sem4: number;
    sem5: number;
    sem6: number;
  };
}

interface StudentDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  student: StudentDetails | null;
}

const StudentDetailModal: React.FC<StudentDetailModalProps> = ({
  open,
  onOpenChange,
  student,
}) => {
  if (!student) return null;

  const attendanceData = [
    { subject: "Data Science", total: 42, attended: Math.round(42 * student.attendance / 100), percentage: student.attendance },
    { subject: "Computer Networks", total: 40, attended: Math.round(40 * (student.attendance - 6) / 100), percentage: student.attendance - 6 },
    { subject: "Internet of Things", total: 38, attended: Math.round(38 * (student.attendance + 3) / 100), percentage: student.attendance + 3 },
    { subject: "Software Engineering", total: 41, attended: Math.round(41 * (student.attendance + 8) / 100), percentage: student.attendance + 8 },
    { subject: "Cloud Computing", total: 39, attended: Math.round(39 * (student.attendance - 2) / 100), percentage: student.attendance - 2 },
  ];

  const assignmentsData = [
    { subject: "Data Science", title: "Predictive Model Task", dueDate: "25 Oct 2025", status: "Submitted", marks: "9/10" },
    { subject: "CN", title: "Routing Simulation", dueDate: "28 Oct 2025", status: student.assignmentsCompleted >= 4 ? "Submitted" : "Pending", marks: student.assignmentsCompleted >= 4 ? "8/10" : "—" },
    { subject: "IoT", title: "Smart Home System", dueDate: "31 Oct 2025", status: "Submitted", marks: "8/10" },
    { subject: "Software Engg.", title: "UML Design Doc", dueDate: "27 Oct 2025", status: "Submitted", marks: "9/10" },
    { subject: "Cloud Computing", title: "AWS Lab Setup", dueDate: "29 Oct 2025", status: student.assignmentsCompleted >= 5 ? "Submitted" : "Pending", marks: student.assignmentsCompleted >= 5 ? "7/10" : "—" },
  ];

  const feeData = [
    { type: "Tuition Fee", amount: "₹45,000", dueDate: "30 Oct 2025", status: student.feeStatus === "Paid" ? "Paid" : "Pending", txnId: student.feeStatus === "Paid" ? "TXN984520" : "—" },
    { type: "Lab Fee", amount: "₹3,000", dueDate: "30 Oct 2025", status: student.feeStatus === "Paid" ? "Paid" : "Pending", txnId: student.feeStatus === "Paid" ? "TXN984521" : "—" },
    { type: "Exam Fee", amount: "₹2,500", dueDate: "10 Nov 2025", status: student.feeStatus === "Partial" ? "Pending" : student.feeStatus, txnId: "—" },
    { type: "Bus/Hostel Fee", amount: "₹20,000", dueDate: "15 Nov 2025", status: "Pending", txnId: "—" },
  ];

  const upcomingEvents = [
    { event: student.upcomingEvent, date: "2 Nov 2025", description: "Hands-on ML & AI sessions" },
    { event: "Project Review 2", date: "6 Nov 2025", description: "Internal project evaluation" },
    { event: "Mid-Term Exam", date: "15 Nov 2025", description: "Covers 3 core subjects" },
    { event: "Hackathon", date: "20 Nov 2025", description: "Department innovation challenge" },
  ];

  const getStatusColor = (status: string) => {
    if (status === "Paid" || status === "Submitted") return "default";
    if (status === "Partial") return "secondary";
    return "destructive";
  };

  const getAttendanceStatus = (percentage: number) => {
    if (percentage >= 90) return { label: "Excellent", color: "default" };
    if (percentage >= 80) return { label: "Good", color: "default" };
    if (percentage >= 75) return { label: "Average", color: "secondary" };
    return { label: "Poor", color: "destructive" };
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <User className="h-6 w-6" />
            Student Profile - {student.name}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="fees">Fees & Events</TabsTrigger>
          </TabsList>

          {/* Basic Information Tab */}
          <TabsContent value="basic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Basic Details
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Name:</span>
                    <span>{student.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">USN:</span>
                    <span className="font-mono">{student.usn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Department:</span>
                    <span>{student.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Semester:</span>
                    <span>{student.semester}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Email:</span>
                    <span className="text-sm">{student.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Phone:</span>
                    <span>{student.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Mentor:</span>
                    <span>{student.mentor}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notes / Remarks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {student.cgpa >= 8.5 && <li>• Strong academic performance across all subjects</li>}
                  {student.attendance >= 85 && <li>• Excellent attendance record</li>}
                  {student.attendance < 80 && <li>• Needs to improve attendance</li>}
                  {student.assignmentsCompleted >= 5 && <li>• Consistently completes assignments on time</li>}
                  {student.feeStatus === "Paid" && <li>• All fee payments up to date</li>}
                  <li>• Actively participates in coding events</li>
                  <li>• Eligible for internal project mentorship</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Academic Performance Tab */}
          <TabsContent value="academic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Attendance Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Total Classes</TableHead>
                      <TableHead>Attended</TableHead>
                      <TableHead>Percentage</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendanceData.map((item, idx) => {
                      const status = getAttendanceStatus(item.percentage);
                      return (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">{item.subject}</TableCell>
                          <TableCell>{item.total}</TableCell>
                          <TableCell>{item.attended}</TableCell>
                          <TableCell>{item.percentage}%</TableCell>
                          <TableCell>
                            <Badge variant={status.color as any}>{status.label}</Badge>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    <TableRow className="font-semibold bg-muted/50">
                      <TableCell>Overall</TableCell>
                      <TableCell>{attendanceData.reduce((sum, a) => sum + a.total, 0)}</TableCell>
                      <TableCell>{attendanceData.reduce((sum, a) => sum + a.attended, 0)}</TableCell>
                      <TableCell>{student.attendance}%</TableCell>
                      <TableCell>
                        <Badge variant={getAttendanceStatus(student.attendance).color as any}>
                          {getAttendanceStatus(student.attendance).label}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Academic Performance (Semester Results)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Semester</TableHead>
                      <TableHead>SGPA</TableHead>
                      <TableHead>Result Status</TableHead>
                      <TableHead>Remarks</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { sem: "1st", sgpa: student.sgpa.sem1, status: "Passed", remarks: "Good foundation" },
                      { sem: "2nd", sgpa: student.sgpa.sem2, status: "Passed", remarks: "Consistent performance" },
                      { sem: "3rd", sgpa: student.sgpa.sem3, status: "Passed", remarks: "Stable progress" },
                      { sem: "4th", sgpa: student.sgpa.sem4, status: "Passed", remarks: "Improved" },
                      { sem: "5th", sgpa: student.sgpa.sem5, status: "Passed", remarks: student.sgpa.sem5 >= 8.5 ? "Excellent" : "Good" },
                      { sem: "6th", sgpa: student.sgpa.sem6, status: "Passed", remarks: student.sgpa.sem6 >= 8.5 ? "Great improvement" : "Satisfactory" },
                      { sem: "7th (Ongoing)", sgpa: student.cgpa, status: "In Progress", remarks: `Current CGPA: ${student.cgpa}` },
                    ].map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{item.sem}</TableCell>
                        <TableCell className="font-semibold">{item.sgpa}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === "In Progress" ? "secondary" : "default"}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{item.remarks}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Assignments Tracker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Assignment Title</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Submission Status</TableHead>
                      <TableHead>Marks</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {assignmentsData.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{item.subject}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.dueDate}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusColor(item.status) as any}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-semibold">{item.marks}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fees & Events Tab */}
          <TabsContent value="fees" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Fee Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fee Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Transaction ID</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feeData.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{item.type}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell>{item.dueDate}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusColor(item.status) as any}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{item.txnId}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingEvents.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{item.event}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{item.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default StudentDetailModal;
