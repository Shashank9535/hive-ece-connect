
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const mockAssignments = [
  {
    id: 1,
    subject: "Digital Signal Processing",
    title: "FFT Algorithm Implementation",
    dueDate: "2023-05-25",
    status: "in-progress",
    description: "Implement FFT algorithm in MATLAB or Python and analyze its performance."
  },
  {
    id: 2,
    subject: "Computer Networks",
    title: "Network Protocols Analysis",
    dueDate: "2023-05-28",
    status: "in-progress",
    description: "Analyze and compare TCP, UDP, and SCTP protocols with practical examples."
  },
  {
    id: 3,
    subject: "VLSI Design",
    title: "CMOS Layout Design",
    dueDate: "2023-06-02",
    status: "not-started",
    description: "Design a simple CMOS circuit layout using industry-standard EDA tools."
  },
  {
    id: 4,
    subject: "Embedded Systems",
    title: "Arduino-based IoT Project",
    dueDate: "2023-06-10",
    status: "not-started",
    description: "Develop an IoT application using Arduino and demonstrate its functionality."
  }
];

const subjects = [
  "All Subjects",
  "Digital Signal Processing",
  "Computer Networks",
  "VLSI Design", 
  "Embedded Systems"
];

export default function Assignments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  
  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'completed':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
    }
  };

  // Filter assignments based on search, status, and subject
  const filteredAssignments = mockAssignments.filter(assignment => {
    const matchesSearch = 
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesStatus = statusFilter === 'all' || assignment.status === statusFilter;
    
    const matchesSubject = 
      subjectFilter === 'All Subjects' || 
      assignment.subject === subjectFilter;
    
    return matchesSearch && matchesStatus && matchesSubject;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-emerald-700 dark:text-emerald-500">Assignments</h2>
          <p className="text-muted-foreground">
            Manage and track your course assignments
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="border-emerald-200 dark:border-emerald-800">
            <Link to="/students" className="flex items-center gap-2">
              View Students
            </Link>
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Assignment
          </Button>
        </div>
      </div>
      
      <Card className="bg-emerald-50/50 dark:bg-emerald-900/5 border-emerald-100 dark:border-emerald-900/30">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="flex-grow flex max-w-md items-center gap-2">
              <Input
                type="text"
                placeholder="Search assignments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-emerald-200 dark:border-emerald-800"
              />
              <Button variant="outline" size="icon" className="shrink-0 border-emerald-200 dark:border-emerald-800">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Select 
                value={statusFilter} 
                onValueChange={setStatusFilter}
              >
                <SelectTrigger className="w-[180px] border-emerald-200 dark:border-emerald-800">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="not-started">Not Started</SelectItem>
                </SelectContent>
              </Select>
              
              <Select 
                value={subjectFilter} 
                onValueChange={setSubjectFilter}
              >
                <SelectTrigger className="w-[180px] border-emerald-200 dark:border-emerald-800">
                  <SelectValue placeholder="Filter by subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <Card key={assignment.id} className="border-emerald-100 dark:border-emerald-900/30 transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold text-emerald-700 dark:text-emerald-400">{assignment.title}</CardTitle>
                  <span className={`rounded px-2 py-1 text-xs ${getStatusBadgeClass(assignment.status)}`}>
                    {assignment.status === 'in-progress' ? 'In Progress' : 
                     assignment.status === 'completed' ? 'Completed' : 'Not Started'}
                  </span>
                </div>
                <CardDescription className="text-emerald-600 dark:text-emerald-400/70">{assignment.subject}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">{assignment.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Due Date:</span>
                    <span className="font-medium text-emerald-700 dark:text-emerald-400">{formatDate(assignment.dueDate)}</span>
                  </div>
                  <Button variant="outline" className="w-full border-emerald-200 dark:border-emerald-800 hover:border-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center p-8 border rounded-lg border-dashed border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
            No assignments found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}
