
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

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

export default function Assignments() {
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
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Assignments</h2>
          <p className="text-muted-foreground">
            Manage and track your course assignments
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Assignment
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mockAssignments.map((assignment) => (
          <Card key={assignment.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{assignment.title}</CardTitle>
                <span className={`rounded px-2 py-1 text-xs ${getStatusBadgeClass(assignment.status)}`}>
                  {assignment.status === 'in-progress' ? 'In Progress' : 
                   assignment.status === 'completed' ? 'Completed' : 'Not Started'}
                </span>
              </div>
              <CardDescription>{assignment.subject}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">{assignment.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Due Date:</span>
                  <span className="font-medium">{formatDate(assignment.dueDate)}</span>
                </div>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
