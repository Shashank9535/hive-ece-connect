import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Plus, Edit, Eye, Trash2 } from "lucide-react";

interface Assignment {
  id: number;
  title: string;
  subject: string;
  deadline: string;
  class: string;
  status: string;
}

interface AssignmentsManagementProps {
  assignments: Assignment[];
  setAssignments: React.Dispatch<React.SetStateAction<Assignment[]>>;
}

const AssignmentsManagement: React.FC<AssignmentsManagementProps> = ({ assignments, setAssignments }) => {
  const [newAssignment, setNewAssignment] = useState({ title: '', subject: '', deadline: '', class: '6th Sem ECE' });

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

  return (
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
  );
};

export default AssignmentsManagement;
