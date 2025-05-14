
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar as CalendarIcon, BookOpen } from "lucide-react";

// Mock events data
const mockEvents = [
  {
    id: 1,
    title: "DSP Assignment Due",
    date: new Date(2023, 4, 25), // May 25, 2023
    type: "assignment",
    time: "23:59",
    details: "Submit FFT Algorithm Implementation assignment"
  },
  {
    id: 2,
    title: "Computer Networks Lab",
    date: new Date(2023, 4, 26), // May 26, 2023
    type: "class",
    time: "14:00",
    details: "Network simulation practical session in Lab 3"
  },
  {
    id: 3,
    title: "VLSI Mid-term Exam",
    date: new Date(2023, 5, 2), // June 2, 2023
    type: "exam",
    time: "10:00",
    details: "Mid-term examination covering modules 1-3"
  },
  {
    id: 4,
    title: "Project Progress Review",
    date: new Date(2023, 5, 5), // June 5, 2023
    type: "meeting",
    time: "15:30",
    details: "Progress review meeting with project guide"
  }
];

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  // Filter events for the selected date
  const eventsForSelectedDay = selectedDate 
    ? mockEvents.filter(
        event => 
          event.date.getDate() === selectedDate.getDate() &&
          event.date.getMonth() === selectedDate.getMonth() &&
          event.date.getFullYear() === selectedDate.getFullYear()
      )
    : [];
  
  // Function to check if a date has events
  const hasEventsOnDay = (day: Date) => {
    return mockEvents.some(
      event => 
        event.date.getDate() === day.getDate() &&
        event.date.getMonth() === day.getMonth() &&
        event.date.getFullYear() === day.getFullYear()
    );
  };
  
  // Function to render event type badge
  const getEventBadge = (type: string) => {
    switch(type) {
      case 'assignment':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Assignment</Badge>;
      case 'exam':
        return <Badge className="bg-red-500 hover:bg-red-600">Exam</Badge>;
      case 'class':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Class</Badge>;
      case 'meeting':
        return <Badge className="bg-purple-500 hover:bg-purple-600">Meeting</Badge>;
      default:
        return <Badge>Event</Badge>;
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Academic Calendar</h2>
        <p className="text-muted-foreground">
          View your schedule and important academic dates
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-[1fr_1.5fr]">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
              modifiers={{
                hasEvent: (date) => hasEventsOnDay(date),
              }}
              modifiersStyles={{
                hasEvent: { 
                  fontWeight: 'bold', 
                  textDecoration: 'underline', 
                  textDecorationColor: 'var(--primary)' 
                },
              }}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedDate ? (
                <>Events for {selectedDate.toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}</>
              ) : (
                <>Select a date to view events</>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {eventsForSelectedDay.length > 0 ? (
              <div className="space-y-4">
                {eventsForSelectedDay.map((event) => (
                  <div key={event.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{event.title}</h3>
                      {getEventBadge(event.type)}
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <p className="text-sm">{event.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
                <CalendarIcon className="h-10 w-10 mb-2" />
                <p>No events scheduled for this day</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
