import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, UserPlus, Edit, Trash2 } from "lucide-react";

interface Student {
  id: number;
  name: string;
  usn: string;
  email: string;
  role: string;
  status: string;
}

interface UserManagementProps {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

const UserManagement: React.FC<UserManagementProps> = ({ students, setStudents }) => {
  const [newStudent, setNewStudent] = useState({ name: '', usn: '', email: '', role: 'student' });

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

  return (
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
  );
};

export default UserManagement;
