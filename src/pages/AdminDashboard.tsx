
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  BarChart3
} from "lucide-react";

const AdminDashboard = () => {
  const [pendingLeaves, setPendingLeaves] = useState([
    { id: 1, name: "Dr. Rajesh Kumar", type: "Medical Leave", days: 3, date: "2024-01-15", status: "pending" },
    { id: 2, name: "Prof. Anita Sharma", type: "Casual Leave", days: 1, date: "2024-01-18", status: "pending" },
    { id: 3, name: "Dr. Vikram Singh", type: "Academic Leave", days: 7, date: "2024-01-20", status: "pending" }
  ]);

  const handleLeaveAction = (id: number, action: string) => {
    setPendingLeaves(prev => prev.map(leave => 
      leave.id === id ? { ...leave, status: action } : leave
    ));
  };

  const stats = [
    { title: "Total Faculty", value: "45", icon: Users, color: "bg-blue-500" },
    { title: "Total Staff", value: "28", icon: Users, color: "bg-green-500" },
    { title: "Pending Leaves", value: "8", icon: Calendar, color: "bg-yellow-500" },
    { title: "Research Projects", value: "23", icon: BookOpen, color: "bg-purple-500" },
    { title: "Active Notices", value: "5", icon: Bell, color: "bg-red-500" },
    { title: "This Month Attendance", value: "92%", icon: BarChart3, color: "bg-indigo-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Hive ECE Connect - Human Resource Management System</p>
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
        <Tabs defaultValue="leaves" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="leaves">Leave Management</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="notices">Notice Board</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="leaves" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Pending Leave Requests
                </CardTitle>
                <CardDescription>
                  Review and approve leave applications from faculty and staff
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingLeaves.map((leave) => (
                    <div key={leave.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{leave.name}</h4>
                        <p className="text-sm text-gray-600">{leave.type} - {leave.days} days</p>
                        <p className="text-xs text-gray-500">Applied on: {leave.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={leave.status === 'pending' ? 'outline' : 'default'}>
                          {leave.status}
                        </Badge>
                        {leave.status === 'pending' && (
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="text-green-600 border-green-600 hover:bg-green-50"
                              onClick={() => handleLeaveAction(leave.id, 'approved')}
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="text-red-600 border-red-600 hover:bg-red-50"
                              onClick={() => handleLeaveAction(leave.id, 'rejected')}
                            >
                              <AlertCircle className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  User Management
                </CardTitle>
                <CardDescription>
                  Manage faculty and staff accounts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">All Users</h3>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add New User
                  </Button>
                </div>
                <div className="space-y-3">
                  {['Dr. Rajesh Kumar (Faculty)', 'Prof. Anita Sharma (Faculty)', 'Mr. Suresh Patel (Staff)', 'Ms. Priya Joshi (Staff)'].map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded">
                      <span>{user}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm" variant="outline" className="text-red-600">Delete</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notices" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notice Board Management
                </CardTitle>
                <CardDescription>
                  Post and manage department announcements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="mb-4 bg-green-600 hover:bg-green-700">
                  <FileText className="h-4 w-4 mr-2" />
                  Create New Notice
                </Button>
                <div className="space-y-3">
                  {['Faculty Meeting - Jan 25, 2024', 'Research Symposium Registration Open', 'New Course Curriculum Update'].map((notice, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded">
                      <span>{notice}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm" variant="outline" className="text-red-600">Archive</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Reports & Analytics
                </CardTitle>
                <CardDescription>
                  Generate and view system reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <Calendar className="h-6 w-6 mb-2" />
                    Attendance Report
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <Users className="h-6 w-6 mb-2" />
                    Faculty Report
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <BookOpen className="h-6 w-6 mb-2" />
                    Research Report
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <FileText className="h-6 w-6 mb-2" />
                    Leave Report
                  </Button>
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
