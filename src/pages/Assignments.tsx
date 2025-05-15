
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  FileText, 
  Calendar, 
  BookOpen, 
  Inbox, 
  Bell, 
  CheckCircle, 
  Clock, 
  ExternalLink 
} from "lucide-react";

export default function Assignments() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Feature cards data
  const featureCards = [
    {
      title: "Assignment Submission",
      description: "Upload and submit your assignments before the deadline",
      icon: <FileText className="h-10 w-10 text-green-500" />,
      link: "#"
    },
    {
      title: "Assignment Calendar",
      description: "Track all due dates and upcoming deadlines",
      icon: <Calendar className="h-10 w-10 text-green-500" />,
      link: "#"
    },
    {
      title: "Course Materials",
      description: "Access lecture notes and course resources",
      icon: <BookOpen className="h-10 w-10 text-green-500" />,
      link: "#"
    },
    {
      title: "Pending Tasks",
      description: "View your pending assignments and tasks",
      icon: <Inbox className="h-10 w-10 text-green-500" />,
      link: "#"
    },
    {
      title: "Notifications",
      description: "Get notified about new assignments and deadlines",
      icon: <Bell className="h-10 w-10 text-green-500" />,
      link: "#"
    },
    {
      title: "Submission Status",
      description: "Check the status of your submitted assignments",
      icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      link: "#"
    },
    {
      title: "Deadline Tracker",
      description: "Keep track of upcoming submission deadlines",
      icon: <Clock className="h-10 w-10 text-green-500" />,
      link: "#"
    },
    {
      title: "Assignment Portal",
      description: "Central hub for all assignment-related activities",
      icon: <ExternalLink className="h-10 w-10 text-green-500" />,
      link: "#"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-500">Assignments</h2>
        <p className="text-muted-foreground mt-2">
          Manage and track all your course assignments in one place
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 pb-6">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search assignments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <FileText className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        
        <Button variant="default" className="bg-green-600 hover:bg-green-700">
          New Assignment
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureCards.map((card, index) => (
          <Card key={index} className="border border-green-100 dark:border-green-900/30 hover:shadow-md transition-shadow duration-300 group">
            <a href={card.link} className="block h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="rounded-full p-2 bg-green-50 dark:bg-green-900/20">
                  {card.icon}
                </div>
                <div>
                  <CardTitle className="text-xl text-green-700 dark:text-green-400 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors">
                    {card.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {card.description}
                </CardDescription>
              </CardContent>
            </a>
          </Card>
        ))}
      </div>
      
      <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-6 mt-6 border border-green-100 dark:border-green-900/30">
        <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">Recent Assignments</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-50 dark:border-green-900/20">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <FileText className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">Digital Signal Processing: Lab Report</h4>
                <p className="text-sm text-muted-foreground">Due on May 25, 2025</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50 dark:hover:bg-green-900/20">
              View
            </Button>
          </div>
          
          <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-50 dark:border-green-900/20">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <FileText className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">VLSI Design: Circuit Simulation</h4>
                <p className="text-sm text-muted-foreground">Due on May 28, 2025</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50 dark:hover:bg-green-900/20">
              View
            </Button>
          </div>
          
          <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-50 dark:border-green-900/20">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <FileText className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">Computer Networks: Socket Programming</h4>
                <p className="text-sm text-muted-foreground">Due on June 2, 2025</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50 dark:hover:bg-green-900/20">
              View
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
