
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus, Search, Calendar } from "lucide-react";

// Mock data
const assignmentsData = [
  {
    id: 1,
    title: "Digital Signal Processing: Lab Report",
    subject: "DSP",
    description: "Complete the FFT implementation and submit with graphs",
    dueDate: "2025-05-25",
    status: "pending"
  },
  {
    id: 2,
    title: "VLSI Design: Circuit Simulation",
    subject: "VLSI",
    description: "Create and test the CMOS inverter circuit in Cadence",
    dueDate: "2025-05-28",
    status: "completed"
  },
  {
    id: 3,
    title: "Computer Networks: Socket Programming",
    subject: "CN",
    description: "Implement a client-server chat application using TCP sockets",
    dueDate: "2025-06-02",
    status: "pending"
  },
  {
    id: 4,
    title: "Embedded Systems: Programming Exercise",
    subject: "ES",
    description: "Program the Arduino board for temperature monitoring system",
    dueDate: "2025-06-05",
    status: "pending"
  },
  {
    id: 5,
    title: "Control Systems: Stability Analysis",
    subject: "CS",
    description: "Analyze the stability of given transfer functions using MATLAB",
    dueDate: "2025-06-10",
    status: "not-started"
  }
];

// Subject options for filter
const subjectOptions = ["All", "DSP", "VLSI", "CN", "ES", "CS"];

// Status options for filter
const statusOptions = ["All", "pending", "completed", "not-started"];

export default function Assignments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  
  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  // Get days remaining
  const getDaysRemaining = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get status badge
  const getStatusBadge = (status: string, daysRemaining: number) => {
    if (status === "completed") {
      return <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>;
    } else if (status === "not-started") {
      return <Badge className="bg-gray-500 hover:bg-gray-600">Not Started</Badge>;
    } else if (daysRemaining < 0) {
      return <Badge className="bg-red-500 hover:bg-red-600">Overdue</Badge>;
    } else if (daysRemaining <= 3) {
      return <Badge className="bg-orange-500 hover:bg-orange-600">Due Soon</Badge>;
    } else {
      return <Badge className="bg-blue-500 hover:bg-blue-600">In Progress</Badge>;
    }
  };

  // Filter assignments
  const filteredAssignments = assignmentsData.filter(assignment => {
    const matchesSearch = 
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSubject = subjectFilter === "All" || assignment.subject === subjectFilter;
    
    const matchesStatus = statusFilter === "All" || assignment.status === statusFilter;
    
    return matchesSearch && matchesSubject && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-500">Assignments</h2>
          <p className="text-muted-foreground">
            Manage and track your course assignments
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" />
          New Assignment
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex items-center space-x-2 flex-1">
          <Input
            type="text"
            placeholder="Search assignments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="shadow-sm w-full"
          />
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-2">
          <Select value={subjectFilter} onValueChange={setSubjectFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by subject" />
            </SelectTrigger>
            <SelectContent>
              {subjectOptions.map(subject => (
                <SelectItem key={subject} value={subject}>{subject}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map(status => (
                <SelectItem key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="border border-green-100 dark:border-green-900/30">
        <CardHeader className="bg-green-50 dark:bg-green-900/20 py-4">
          <CardTitle className="text-xl font-bold text-green-700 dark:text-green-400">Assignment List</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-auto">
            {filteredAssignments.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                No assignments found matching your criteria.
              </div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="bg-green-100 dark:bg-green-900/30 text-left">
                    <th className="p-3 font-medium">Title</th>
                    <th className="p-3 font-medium hidden md:table-cell">Subject</th>
                    <th className="p-3 font-medium hidden lg:table-cell">Description</th>
                    <th className="p-3 font-medium">Due Date</th>
                    <th className="p-3 font-medium">Status</th>
                    <th className="p-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-100 dark:divide-green-800/30">
                  {filteredAssignments.map((assignment) => {
                    const daysRemaining = getDaysRemaining(assignment.dueDate);
                    return (
                      <tr 
                        key={assignment.id} 
                        className="hover:bg-green-50 dark:hover:bg-green-900/10"
                      >
                        <td className="p-3 font-medium">{assignment.title}</td>
                        <td className="p-3 hidden md:table-cell">
                          <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20">
                            {assignment.subject}
                          </Badge>
                        </td>
                        <td className="p-3 hidden lg:table-cell text-sm text-muted-foreground line-clamp-1">
                          {assignment.description}
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-green-600" />
                            <span>{formatDate(assignment.dueDate)}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {daysRemaining > 0 ? `${daysRemaining} days remaining` : 
                             daysRemaining === 0 ? "Due today" : "Overdue"}
                          </div>
                        </td>
                        <td className="p-3">
                          {getStatusBadge(assignment.status, daysRemaining)}
                        </td>
                        <td className="p-3 text-right">
                          <Button variant="outline" size="sm" className="hover:bg-green-100 dark:hover:bg-green-900/20">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only md:not-sr-only md:ml-2">View</span>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
