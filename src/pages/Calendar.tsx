
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ExternalLink, AlertCircle, BookOpen, FileText } from "lucide-react";

export default function Calendar() {
  // Mock calendar events
  const events = [
    {
      id: 1,
      title: "Digital Signal Processing Lab",
      date: "2025-05-20",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      type: "class",
      location: "ECE Lab 2"
    },
    {
      id: 2,
      title: "Assignment Submission - VLSI Design",
      date: "2025-05-28",
      startTime: "11:59 PM",
      type: "deadline"
    },
    {
      id: 3,
      title: "Tech Talk - Future of IoT",
      date: "2025-05-30",
      startTime: "2:00 PM",
      endTime: "4:00 PM",
      type: "event",
      location: "Seminar Hall"
    },
    {
      id: 4,
      title: "Mid-Term Examination",
      date: "2025-06-10",
      startTime: "9:00 AM",
      endTime: "12:00 PM",
      type: "exam",
      location: "Examination Hall"
    }
  ];

  // Feature cards data for Calendar related features
  const featureCards = [
    {
      title: "Academic Calendar",
      description: "View the academic calendar for semester events",
      icon: <CalendarIcon className="h-10 w-10 text-green-500" />,
      link: "#"
    },
    {
      title: "Assignment Deadlines",
      description: "Track all your assignment due dates",
      icon: <FileText className="h-10 w-10 text-green-500" />,
      link: "#"
    },
    {
      title: "Exam Schedule",
      description: "Check your upcoming examination dates",
      icon: <AlertCircle className="h-10 w-10 text-green-500" />,
      link: "#"
    },
    {
      title: "Class Timetable",
      description: "View your weekly class schedule",
      icon: <BookOpen className="h-10 w-10 text-green-500" />,
      link: "#"
    }
  ];

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get background color based on event type
  const getEventColor = (type: string) => {
    switch (type) {
      case 'class':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'deadline':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'event':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'exam':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-500">Calendar</h2>
        <p className="text-muted-foreground mt-2">
          View your academic calendar, class schedule, and important dates
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 pb-6">
        <div className="text-lg font-semibold text-green-700 dark:text-green-400">
          <CalendarIcon className="inline-block mr-2 h-5 w-5" />
          May - June 2025
        </div>
        <div>
          <Button variant="default" className="bg-green-600 hover:bg-green-700">
            Subscribe to Calendar
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-green-100 dark:border-green-900/30 p-6 mt-6">
        <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">Upcoming Events</h3>
        <div className="space-y-4">
          {events.map(event => (
            <div key={event.id} className="p-4 rounded-lg border border-green-50 dark:border-green-900/20 bg-green-50/50 dark:bg-green-900/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-lg">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{formatDate(event.date)}</p>
                  {event.startTime && (
                    <p className="text-sm text-muted-foreground">
                      {event.startTime}{event.endTime ? ` - ${event.endTime}` : ''}
                    </p>
                  )}
                  {event.location && (
                    <p className="text-sm text-muted-foreground">
                      Location: {event.location}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getEventColor(event.type)}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                  <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50 dark:hover:bg-green-900/20">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
