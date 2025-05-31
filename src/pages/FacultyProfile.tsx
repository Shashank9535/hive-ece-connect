
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, BookOpen, Award, Upload, Save, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FacultyProfile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: "Dr. Rajesh Kumar",
    email: "rajesh.kumar@college.edu",
    phone: "+91 98765 43210",
    designation: "Professor",
    department: "Electronics & Communication Engineering",
    qualification: "Ph.D. in Signal Processing",
    experience: "15 years",
    researchAreas: "Machine Learning, Signal Processing, IoT",
    address: "Faculty Quarters, College Campus",
    joinDate: "2010-08-15",
    employeeId: "ECE001"
  });

  const [publications] = useState([
    {
      title: "Machine Learning Applications in 5G Networks",
      journal: "IEEE Transactions on Communications",
      year: "2024",
      impact: "4.2"
    },
    {
      title: "IoT-based Smart City Infrastructure",
      journal: "Elsevier Computer Networks",
      year: "2023",
      impact: "3.8"
    },
    {
      title: "Deep Learning for Signal Processing",
      journal: "IEEE Signal Processing Magazine",
      year: "2023",
      impact: "5.1"
    }
  ]);

  const [achievements] = useState([
    "Best Faculty Award 2023",
    "Research Excellence Award 2022",
    "Outstanding Teacher Award 2021",
    "IEEE Senior Member",
    "Principal Investigator - 3 Major Projects"
  ]);

  const handleSave = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated",
    });
    setIsEditing(false);
  };

  const handleFileUpload = () => {
    toast({
      title: "File Uploaded",
      description: "Your CV has been uploaded successfully",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Faculty Profile</h1>
          <p className="text-gray-600">Manage your academic profile and information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Summary Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="/api/placeholder/150/150" alt="Profile" />
                  <AvatarFallback className="text-lg">RK</AvatarFallback>
                </Avatar>
                <CardTitle>{profileData.name}</CardTitle>
                <CardDescription>{profileData.designation}</CardDescription>
                <CardDescription>{profileData.department}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <Button size="sm" variant="outline" onClick={handleFileUpload}>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Photo
                  </Button>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Employee ID:</span>
                    <span className="font-medium">{profileData.employeeId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-medium">{profileData.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Joined:</span>
                    <span className="font-medium">{profileData.joinDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Publications:</span>
                  <span className="font-bold text-green-600">25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Citations:</span>
                  <span className="font-bold text-blue-600">450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">H-Index:</span>
                  <span className="font-bold text-purple-600">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Projects:</span>
                  <span className="font-bold text-orange-600">8</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Profile Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <User className="h-5 w-5" />
                          Personal Information
                        </CardTitle>
                        <CardDescription>
                          Manage your personal and professional details
                        </CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        {isEditing ? 'Cancel' : 'Edit'}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="designation">Designation</Label>
                        <Select 
                          value={profileData.designation} 
                          onValueChange={(value) => setProfileData({...profileData, designation: value})}
                          disabled={!isEditing}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Professor">Professor</SelectItem>
                            <SelectItem value="Associate Professor">Associate Professor</SelectItem>
                            <SelectItem value="Assistant Professor">Assistant Professor</SelectItem>
                            <SelectItem value="Lecturer">Lecturer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="qualification">Qualification</Label>
                        <Input
                          id="qualification"
                          value={profileData.qualification}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, qualification: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Experience</Label>
                        <Input
                          id="experience"
                          value={profileData.experience}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      <Label htmlFor="researchAreas">Research Areas</Label>
                      <Textarea
                        id="researchAreas"
                        value={profileData.researchAreas}
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({...profileData, researchAreas: e.target.value})}
                        rows={3}
                      />
                    </div>

                    <div className="mt-6 space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        value={profileData.address}
                        disabled={!isEditing}
                        onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                        rows={2}
                      />
                    </div>

                    {isEditing && (
                      <div className="flex justify-end mt-6 gap-3">
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="publications" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Publications & Research Papers
                    </CardTitle>
                    <CardDescription>
                      List of your published research papers and articles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {publications.map((pub, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                          <h4 className="font-semibold text-lg mb-2">{pub.title}</h4>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span><strong>Journal:</strong> {pub.journal}</span>
                            <span><strong>Year:</strong> {pub.year}</span>
                            <span><strong>Impact Factor:</strong> {pub.impact}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button className="bg-green-600 hover:bg-green-700">
                        Add New Publication
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Awards & Achievements
                    </CardTitle>
                    <CardDescription>
                      Recognition and awards received throughout your career
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                          <Award className="h-5 w-5 text-yellow-500" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button className="bg-green-600 hover:bg-green-700">
                        Add New Achievement
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
