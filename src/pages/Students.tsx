
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Student data from the uploaded list
const studentData = [
  { id: 1, name: "ABDULLAH FURKHAN", usn: "3VY22UE001" },
  { id: 2, name: "ABHISHEK", usn: "3VY22UE002" },
  { id: 3, name: "ABHISHEK S B", usn: "3VY22UE003" },
  { id: 4, name: "ADITYA", usn: "3VY22UE004" },
  { id: 5, name: "AISHWARYA", usn: "3VY22UE005" },
  { id: 6, name: "AJAYKUMAR", usn: "3VY22UE006" },
  { id: 7, name: "AKHILESH", usn: "3VY22UE007" },
  { id: 8, name: "AKSHATA", usn: "3VY22UE008" },
  { id: 9, name: "ARCHANA", usn: "3VY22UE009" },
  { id: 10, name: "ARUNKUMAR", usn: "3VY22UE010" },
  { id: 11, name: "ASIYA", usn: "3VY22UE011" },
  { id: 12, name: "BHAGYASHREE", usn: "3VY22UE012" },
  { id: 13, name: "BHUVANESHWARI", usn: "3VY22UE013" },
  { id: 14, name: "DARSHAN", usn: "3VY22UE014" },
  { id: 15, name: "DYANESHWAR", usn: "3VY22UE015" },
  { id: 16, name: "GEETA", usn: "3VY22UE017" },
  { id: 17, name: "GURUKIRAN", usn: "3VY22UE018" },
  { id: 18, name: "JAGADISH", usn: "3VY22UE019" },
  { id: 19, name: "KARTIK", usn: "3VY22UE020" },
  { id: 20, name: "KASTURI A M", usn: "3VY22UE021" },
  { id: 21, name: "KAVYA", usn: "3VY22UE022" },
  { id: 22, name: "KIRAN", usn: "3VY22UE023" },
  { id: 23, name: "KOUSHIK", usn: "3VY22UE024" },
  { id: 24, name: "LAXMIKANT", usn: "3VY22UE025" },
  { id: 25, name: "MADIVALAMMA", usn: "3VY22UE026" },
  { id: 26, name: "MD FURQAN", usn: "3VY22UE029" },
  { id: 27, name: "MD AYAN OWAIS", usn: "3VY22UE032" },
  { id: 28, name: "MD HUSSAIN", usn: "3VY22UE033" },
  { id: 29, name: "MOHAMMED KAIF", usn: "3VY22UE034" },
  { id: 30, name: "MOHAMMED KAIF", usn: "3VY22UE035" },
  { id: 31, name: "MOHAMMED SOFI", usn: "3VY22UE036" },
  { id: 32, name: "MOHD MOHIUDDIN", usn: "3VY22UE037" },
  { id: 33, name: "NANDINI", usn: "3VY22UE038" },
  { id: 34, name: "POOJA", usn: "3VY22UE039" },
  { id: 35, name: "PREETHAM", usn: "3VY22UE040" },
  { id: 36, name: "PRERANA", usn: "3VY22UE041" },
  { id: 37, name: "RAHUL", usn: "3VY22UE042" },
  { id: 38, name: "RAJESH", usn: "3VY22UE043" },
  { id: 39, name: "RUCHI S M", usn: "3VY22UE044" },
  { id: 40, name: "S SANJEEVA", usn: "3VY22UE045" },
  { id: 41, name: "SAI KIRAN", usn: "3VY22UE046" },
  { id: 42, name: "SHAHJAHAN", usn: "3VY22UE048" },
  { id: 43, name: "SHASHANK", usn: "3VY22UE050" },
  { id: 44, name: "SHREEKANT", usn: "3VY22UE051" },
  { id: 45, name: "SHREYARANI", usn: "3VY22UE052" },
  { id: 46, name: "SHRUSTI S M", usn: "3VY22UE053" },
  { id: 47, name: "SHRUTI", usn: "3VY22UE054" },
  { id: 48, name: "SHWETA", usn: "3VY22UE055" },
  { id: 49, name: "SUDEEP", usn: "3VY22UE056" },
  { id: 50, name: "SUPRIYA", usn: "3VY22UE057" },
  { id: 51, name: "SYED OWAIS", usn: "3VY22UE058" },
  { id: 52, name: "SYEDA ASMA", usn: "3VY22UE059" },
  { id: 53, name: "VAISHNAVI", usn: "3VY22UE060" },
  { id: 54, name: "VRUKSHA", usn: "3VY22UE061" },
  { id: 55, name: "Y VAISHNAVI", usn: "3VY22UE062" },
  { id: 56, name: "GURUGOVIND", usn: "3VY23UE400" },
  { id: 57, name: "GURURAJ", usn: "3VY23UE401" },
  { id: 58, name: "HARISH", usn: "3VY23UE402" },
  { id: 59, name: "SANIYA", usn: "3VY23UE403" },
  { id: 60, name: "SHARANABASAPPA", usn: "3VY23UE404" },
  { id: 61, name: "SUDEEP", usn: "3VY23UE405" },
  { id: 62, name: "SYED ASIF", usn: "3VY23UE406" },
];

export default function Students() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredStudents = studentData.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.usn.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <CardTitle className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Student Directory</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-emerald-100 dark:bg-emerald-900/30 text-left">
                  <th className="p-3 font-medium">Sl No</th>
                  <th className="p-3 font-medium">Student Name</th>
                  <th className="p-3 font-medium">USN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100 dark:divide-emerald-800/30">
                {filteredStudents.map((student) => (
                  <tr 
                    key={student.id} 
                    className="hover:bg-emerald-50 dark:hover:bg-emerald-900/10"
                  >
                    <td className="p-3">{student.id}</td>
                    <td className="p-3 font-medium">{student.name}</td>
                    <td className="p-3 font-mono">{student.usn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
