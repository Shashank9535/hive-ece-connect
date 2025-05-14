
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { User, Mail, Phone, Book, Calendar } from "lucide-react";

// Mock student data
const mockStudent = {
  name: "John Doe",
  rollNumber: "01FB16ECE123",
  email: "john.doe@example.com",
  phone: "+91 9876543210",
  department: "Electronics and Computer Engineering",
  semester: "6th Semester",
  batch: "2019-2023",
  attendance: 85,
  cgpa: 8.7,
  profileImage: "" // Empty for now
};

export default function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">My Profile</h2>
        <p className="text-muted-foreground">
          View and manage your profile information
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <Card>
          <CardContent className="pt-6 flex flex-col items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src={mockStudent.profileImage} />
              <AvatarFallback className="text-xl">
                {mockStudent.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <h3 className="mt-4 text-xl font-semibold">{mockStudent.name}</h3>
            <p className="text-muted-foreground">{mockStudent.rollNumber}</p>
            
            <div className="w-full mt-6 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Attendance</span>
                <span className="text-sm">{mockStudent.attendance}%</span>
              </div>
              <Progress value={mockStudent.attendance} />
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-medium">CGPA</span>
                <span className="text-sm">{mockStudent.cgpa}/10</span>
              </div>
              <Progress value={mockStudent.cgpa * 10} />
            </div>
            
            <Button variant="outline" className="w-full mt-6">
              Edit Profile
            </Button>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">{mockStudent.name}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{mockStudent.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{mockStudent.phone}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Academic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Book className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Department</p>
                  <p className="font-medium">{mockStudent.department}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Batch</p>
                  <p className="font-medium">{mockStudent.batch}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Book className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Current Semester</p>
                  <p className="font-medium">{mockStudent.semester}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
