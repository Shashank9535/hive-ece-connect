import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Users, 
  FileText, 
  Calendar, 
  BookOpen, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  UserPlus,
  Bell,
  BarChart3,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  CreditCard,
  LogOut
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [pendingLeaves, setPendingLeaves] = useState([
    { id: 1, name: "Dr. Rajesh Kumar", type: "Medical Leave", days: 3, date: "2024-01-15", status: "pending" },
    { id: 2, name: "Prof. Anita Sharma", type: "Casual Leave", days: 1, date: "2024-01-18", status: "pending" },
    { id: 3, name: "Dr. Vikram Singh", type: "Academic Leave", days: 7, date: "2024-01-20", status: "pending" }
  ]);

  const [notices, setNotices] = useState([
    { id: 1, title: "Faculty Meeting - Jan 25, 2024", content: "Monthly faculty meeting scheduled", date: "2024-01-20", status: "active" },
    { id: 2, title: "Research Symposium Registration Open", content: "Registration for research symposium", date: "2024-01-18", status: "active" },
    { id: 3, title: "New Course Curriculum Update", content: "Updated curriculum for ECE department", date: "2024-01-15", status: "active" }
  ]);

  const [assignments, setAssignments] = useState([
    { id: 1, title: "Digital Signal Processing Lab", subject: "DSP", deadline: "2024-02-15", class: "6th Sem ECE", status: "active" },
    { id: 2, title: "VLSI Circuit Design", subject: "VLSI", deadline: "2024-02-20", class: "6th Sem ECE", status: "active" },
    { id: 3, title: "Microprocessor Project", subject: "MP", deadline: "2024-02-25", class: "6th Sem ECE", status: "active" }
  ]);

  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", usn: "3VY22UE001", email: "john@example.com", role: "student", status: "active" },
    { id: 2, name: "Jane Smith", usn: "3VY22UE002", email: "jane@example.com", role: "student", status: "active" },
    { id: 3, name: "Dr. Kumar", usn: "FAC001", email: "kumar@example.com", role: "faculty", status: "active" },
    { id: 4, name: "Prof. Sharma", usn: "FAC002", email: "sharma@example.com", role: "faculty", status: "active" }
  ]);

  const [newNotice, setNewNotice] = useState({ title: '', content: '', type: 'academic' });
  const [newAssignment, setNewAssignment] = useState({ title: '', subject: '', deadline: '', class: '6th Sem ECE' });
  const [newStudent, setNewStudent] = useState({ name: '', usn: '', email: '', role: 'student' });

  const handleLeaveAction = (id: number, action: string) => {
    setPendingLeaves(prev => prev.map(leave => 
      leave.id === id ? { ...leave, status: action } : leave
    ));
  };

  const handleCreateNotice = () => {
    if (newNotice.title && newNotice.content) {
      const notice = {
        id: notices.length + 1,
        ...newNotice,
        date: new Date().toISOString().split('T')[0],
        status: 'active'
      };
      setNotices([notice, ...notices]);
      setNewNotice({ title: '', content: '', type: 'academic' });
    }
  };

  const handleCreateAssignment = () => {
    if (newAssignment.title && newAssignment.subject && newAssignment.deadline) {
      const assignment = {
        id: assignments.length + 1,
        ...newAssignment,
        status: 'active'
      };
      setAssignments([assignment, ...assignments]);
      setNewAssignment({ title: '', subject: '', deadline: '', class: '6th Sem ECE' });
    }
  };

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.usn && newStudent.email) {
      const student = {
        id: students.length + 1,
        ...newStudent,
        status: 'active'
      };
      setStudents([student, ...students]);
      setNewStudent({ name: '', usn: '', email: '', role: 'student' });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const stats = [
    { title: "Total Faculty", value: "45", icon: Users, color: "bg-blue-500" },
    { title: "Total Staff", value: "28", icon: Users, color: "bg-green-500" },
    { title: "Pending Leaves", value: pendingLeaves.filter(l => l.status === 'pending').length.toString(), icon: Calendar, color: "bg-yellow-500" },
    { title: "Active Assignments", value: assignments.length.toString(), icon: BookOpen, color: "bg-purple-500" },
    { title: "Active Notices", value: notices.length.toString(), icon: Bell, color: "bg-red-500" },
    { title: "Total Students", value: students.filter(s => s.role === 'student').length.toString(), icon: BarChart3, color: "bg-indigo-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Hive ECE Connect - Human Resource Management System</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="notices" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="notices">Post/Update Notices</TabsTrigger>
            <TabsTrigger value="assignments">Manage Assignments</TabsTrigger>
            <TabsTrigger value="attendance">Monitor Attendance</TabsTrigger>
            <TabsTrigger value="fees">Manage Fee Records</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
          </TabsList>

          <TabsContent value="notices" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Post or Update Notices
                </CardTitle>
                <CardDescription>
                  Create and manage department announcements and notices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Create New Notice Form */}
                  <div className="border rounded-lg p-4 bg-green-50">
                    <h3 className="text-lg font-semibold mb-4">Create New Notice</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="notice-title">Notice Title</Label>
                        <Input
                          id="notice-title"
                          value={newNotice.title}
                          onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                          placeholder="Enter notice title"
                        />
                      </div>
                      <div>
                        <Label htmlFor="notice-type">Notice Type</Label>
                        <Select value={newNotice.type} onValueChange={(value) => setNewNotice({ ...newNotice, type: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="academic">Academic</SelectItem>
                            <SelectItem value="exam">Exam</SelectItem>
                            <SelectItem value="event">Event</SelectItem>
                            <SelectItem value="administrative">Administrative</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="notice-content">Notice Content</Label>
                        <Textarea
                          id="notice-content"
                          value={newNotice.content}
                          onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                          placeholder="Enter notice content"
                          rows={4}
                        />
                      </div>
                    </div>
                    <Button onClick={handleCreateNotice} className="mt-4 bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Post Notice
                    </Button>
                  </div>

                  {/* Existing Notices */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Existing Notices</h3>
                    <div className="space-y-3">
                      {notices.map((notice) => (
                        <div key={notice.id} className="flex items-center justify-between p-4 border rounded-lg bg-white">
                          <div className="flex-1">
                            <h4 className="font-semibold">{notice.title}</h4>
                            <p className="text-sm text-gray-600">{notice.content}</p>
                            <p className="text-xs text-gray-500">Posted on: {notice.date}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={notice.status === 'active' ? 'default' : 'secondary'}>
                              {notice.status}
                            </Badge>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Manage Assignments and Deadlines
                </CardTitle>
                <CardDescription>
                  Create, update, and manage student assignments and deadlines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Create New Assignment Form */}
                  <div className="border rounded-lg p-4 bg-blue-50">
                    <h3 className="text-lg font-semibold mb-4">Create New Assignment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="assignment-title">Assignment Title</Label>
                        <Input
                          id="assignment-title"
                          value={newAssignment.title}
                          onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                          placeholder="Enter assignment title"
                        />
                      </div>
                      <div>
                        <Label htmlFor="assignment-subject">Subject</Label>
                        <Input
                          id="assignment-subject"
                          value={newAssignment.subject}
                          onChange={(e) => setNewAssignment({ ...newAssignment, subject: e.target.value })}
                          placeholder="Enter subject code"
                        />
                      </div>
                      <div>
                        <Label htmlFor="assignment-deadline">Deadline</Label>
                        <Input
                          id="assignment-deadline"
                          type="date"
                          value={newAssignment.deadline}
                          onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="assignment-class">Class</Label>
                        <Select value={newAssignment.class} onValueChange={(value) => setNewAssignment({ ...newAssignment, class: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6th Sem ECE">6th Sem ECE</SelectItem>
                            <SelectItem value="4th Sem ECE">4th Sem ECE</SelectItem>
                            <SelectItem value="2nd Sem ECE">2nd Sem ECE</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button onClick={handleCreateAssignment} className="mt-4 bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Assignment
                    </Button>
                  </div>

                  {/* Existing Assignments */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Existing Assignments</h3>
                    <div className="space-y-3">
                      {assignments.map((assignment) => (
                        <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg bg-white">
                          <div className="flex-1">
                            <h4 className="font-semibold">{assignment.title}</h4>
                            <p className="text-sm text-gray-600">{assignment.subject} - {assignment.class}</p>
                            <p className="text-xs text-gray-500">Deadline: {assignment.deadline}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={assignment.status === 'active' ? 'default' : 'secondary'}>
                              {assignment.status}
                            </Badge>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attendance" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Monitor Student Attendance Reports
                </CardTitle>
                <CardDescription>
                  View and analyze student attendance data across all subjects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Select Class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Classes</SelectItem>
                          <SelectItem value="6th-sem">6th Sem ECE</SelectItem>
                          <SelectItem value="4th-sem">4th Sem ECE</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Select Subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Subjects</SelectItem>
                          <SelectItem value="dsp">DSP</SelectItem>
                          <SelectItem value="vlsi">VLSI</SelectItem>
                          <SelectItem value="mp">Microprocessor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export Report
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-600">87%</p>
                          <p className="text-sm text-gray-600">Overall Attendance</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-yellow-600">12</p>
                          <p className="text-sm text-gray-600">Students Below 75%</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-blue-600">156</p>
                          <p className="text-sm text-gray-600">Total Classes</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Students with Low Attendance</h4>
                    <div className="space-y-2">
                      {['John Doe - 65%', 'Jane Smith - 72%', 'Mike Johnson - 68%'].map((student, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-red-50 rounded">
                          <span className="text-sm">{student}</span>
                          <Button size="sm" variant="outline" className="text-red-600">
                            Send Warning
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fees" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Manage Fee Records and Notifications
                </CardTitle>
                <CardDescription>
                  Monitor fee payments and send notifications to students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-600">₹45,00,000</p>
                          <p className="text-sm text-gray-600">Total Collected</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-red-600">₹8,50,000</p>
                          <p className="text-sm text-gray-600">Pending Amount</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-yellow-600">23</p>
                          <p className="text-sm text-gray-600">Pending Payments</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-blue-600">142</p>
                          <p className="text-sm text-gray-600">Paid Students</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Students with Pending Fees</h4>
                    {['John Doe - ₹75,000 (Due: 2024-06-30)', 'Jane Smith - ₹50,000 (Due: 2024-07-15)', 'Mike Johnson - ₹75,000 (Overdue)'].map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded bg-yellow-50">
                        <span className="text-sm">{student}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Send Reminder
                          </Button>
                          <Button size="sm" variant="outline" className="text-green-600">
                            Mark Paid
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Bell className="h-4 w-4 mr-2" />
                    Send Bulk Fee Reminders
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Add or Remove Students (User Management)
                </CardTitle>
                <CardDescription>
                  Manage student and faculty accounts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Add New User Form */}
                  <div className="border rounded-lg p-4 bg-indigo-50">
                    <h3 className="text-lg font-semibold mb-4">Add New User</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="user-name">Full Name</Label>
                        <Input
                          id="user-name"
                          value={newStudent.name}
                          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                          placeholder="Enter full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="user-usn">USN/ID</Label>
                        <Input
                          id="user-usn"
                          value={newStudent.usn}
                          onChange={(e) => setNewStudent({ ...newStudent, usn: e.target.value })}
                          placeholder="Enter USN or ID"
                        />
                      </div>
                      <div>
                        <Label htmlFor="user-email">Email</Label>
                        <Input
                          id="user-email"
                          type="email"
                          value={newStudent.email}
                          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <Label htmlFor="user-role">Role</Label>
                        <Select value={newStudent.role} onValueChange={(value) => setNewStudent({ ...newStudent, role: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="faculty">Faculty</SelectItem>
                            <SelectItem value="staff">Staff</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button onClick={handleAddStudent} className="mt-4 bg-indigo-600 hover:bg-indigo-700">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add User
                    </Button>
                  </div>

                  {/* Existing Users */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Existing Users</h3>
                    <div className="space-y-3">
                      {students.map((student) => (
                        <div key={student.id} className="flex items-center justify-between p-3 border rounded bg-white">
                          <div className="flex-1">
                            <h4 className="font-semibold">{student.name}</h4>
                            <p className="text-sm text-gray-600">{student.usn} - {student.email}</p>
                            <Badge variant="outline" className="mt-1">{student.role}</Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                              {student.status}
                            </Badge>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
