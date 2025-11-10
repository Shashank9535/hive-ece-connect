
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminHeader from '@/components/admin/AdminHeader';
import AdminStats from '@/components/admin/AdminStats';
import NoticesManagement from '@/components/admin/NoticesManagement';
import AssignmentsManagement from '@/components/admin/AssignmentsManagement';
import AttendanceMonitoring from '@/components/admin/AttendanceMonitoring';
import FeesManagement from '@/components/admin/FeesManagement';
import UserManagement from '@/components/admin/UserManagement';
import HiveBot from '@/components/chatbot/HiveBot';

const AdminDashboard = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <AdminHeader />

        <AdminStats 
          pendingLeavesCount={pendingLeaves.filter(l => l.status === 'pending').length}
          assignmentsCount={assignments.length}
          noticesCount={notices.length}
          studentsCount={students.filter(s => s.role === 'student').length}
        />

        <Tabs defaultValue="notices" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="notices">Post/Update Notices</TabsTrigger>
            <TabsTrigger value="assignments">Manage Assignments</TabsTrigger>
            <TabsTrigger value="attendance">Monitor Attendance</TabsTrigger>
            <TabsTrigger value="fees">Manage Fee Records</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
          </TabsList>

          <TabsContent value="notices" className="mt-6">
            <NoticesManagement notices={notices} setNotices={setNotices} />
          </TabsContent>

          <TabsContent value="assignments" className="mt-6">
            <AssignmentsManagement assignments={assignments} setAssignments={setAssignments} />
          </TabsContent>

          <TabsContent value="attendance" className="mt-6">
            <AttendanceMonitoring />
          </TabsContent>

          <TabsContent value="fees" className="mt-6">
            <FeesManagement />
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <UserManagement students={students} setStudents={setStudents} />
          </TabsContent>
        </Tabs>
      </div>
      
      <HiveBot />
    </div>
  );
};

export default AdminDashboard;
