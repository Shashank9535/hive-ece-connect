
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Eye } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { studentData, StudentData } from "@/data/studentData";
import StudentDetailModal from "@/components/students/StudentDetailModal";
import { Badge } from "@/components/ui/badge";

interface DetailedStudent extends StudentData {
  department: string;
  semester: string;
  email: string;
  phone: string;
  mentor: string;
}

export default function Students() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<DetailedStudent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  
  const filteredStudents = studentData.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.usn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const canViewDetails = user?.role === 'faculty' || user?.role === 'staff';

  const handleStudentClick = (student: StudentData) => {
    if (canViewDetails) {
      // Generate detailed student info
      const detailedStudent = {
        ...student,
        department: "Electronics and Computer Engineering",
        semester: "7th",
        email: `${student.name.toLowerCase().replace(/\s+/g, '')}@vtu.ac.in`,
        phone: "+91 9876543210",
        mentor: "Prof. Anjali Desai",
      };
      setSelectedStudent(detailedStudent);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-emerald-700 dark:text-emerald-500">Students</h2>
          <p className="text-muted-foreground">
            ECE 6th Semester Student List - Total: {studentData.length} students
          </p>
        </div>
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2 mb-6">
        <Input
          type="text"
          placeholder="Search by name or USN..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="shadow-sm"
        />
        <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <Card className="overflow-hidden border border-emerald-100 dark:border-emerald-900/30">
        <CardHeader className="bg-emerald-50 dark:bg-emerald-900/20 py-4">
          <CardTitle className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
            Student Directory
            {canViewDetails && (
              <span className="text-sm font-normal text-muted-foreground ml-2">
                (Click on a student to view details)
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-emerald-100 dark:bg-emerald-900/30 text-left">
                  <th className="p-3 font-medium">Sl No</th>
                  <th className="p-3 font-medium">Student Name</th>
                  <th className="p-3 font-medium">USN</th>
                  <th className="p-3 font-medium">Attendance</th>
                  <th className="p-3 font-medium">Assignments</th>
                  <th className="p-3 font-medium">Fee Status</th>
                  <th className="p-3 font-medium">CGPA</th>
                  {canViewDetails && <th className="p-3 font-medium">Action</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100 dark:divide-emerald-800/30">
                {filteredStudents.map((student) => (
                  <tr 
                    key={student.id} 
                    className={`hover:bg-emerald-50 dark:hover:bg-emerald-900/10 ${
                      canViewDetails ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => handleStudentClick(student)}
                  >
                    <td className="p-3">{student.id}</td>
                    <td className="p-3 font-medium">{student.name}</td>
                    <td className="p-3 font-mono text-sm">{student.usn}</td>
                    <td className="p-3">
                      <Badge variant={student.attendance >= 85 ? "default" : student.attendance >= 75 ? "secondary" : "destructive"}>
                        {student.attendance}%
                      </Badge>
                    </td>
                    <td className="p-3 text-center">{student.assignmentsCompleted}/5</td>
                    <td className="p-3">
                      <Badge variant={
                        student.feeStatus === "Paid" ? "default" : 
                        student.feeStatus === "Partial" ? "secondary" : 
                        "destructive"
                      }>
                        {student.feeStatus}
                      </Badge>
                    </td>
                    <td className="p-3 font-semibold">{student.cgpa}</td>
                    {canViewDetails && (
                      <td className="p-3">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStudentClick(student);
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <StudentDetailModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        student={selectedStudent}
      />
    </div>
  );
}
