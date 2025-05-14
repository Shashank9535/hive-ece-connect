
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, FileText, Calendar } from "lucide-react";

const mockNotices = [
  {
    id: 1,
    title: "End Semester Exam Schedule",
    date: "2023-05-15",
    type: "exam",
    content: "The end semester examinations for 6th semester ECE will commence from June 15, 2023. The detailed timetable is available on the university website.",
    source: "VTU Examination Department",
    link: "#"
  },
  {
    id: 2,
    title: "Project Submission Deadline",
    date: "2023-05-18",
    type: "academic",
    content: "All final year projects must be submitted by June 5, 2023. The submission includes project report, code repository, and demonstration video.",
    source: "ECE Department",
    link: "#"
  },
  {
    id: 3,
    title: "Technical Symposium Registration",
    date: "2023-05-20",
    type: "event",
    content: "Registration for the annual technical symposium 'TechVista 2023' is now open. Early bird registration closes on May 30, 2023.",
    source: "Student Technical Council",
    link: "#"
  },
  {
    id: 4,
    title: "Scholarship Application Reminder",
    date: "2023-05-22",
    type: "academic",
    content: "Eligible students are reminded to apply for the merit scholarship before May 31, 2023. All required documents must be submitted to the administrative office.",
    source: "Scholarship Cell",
    link: "#"
  },
  {
    id: 5,
    title: "Industrial Visit Registration",
    date: "2023-05-25",
    type: "event",
    content: "Registration for the industrial visit to ISRO is now open. Limited seats available, register before May 28, 2023.",
    source: "ECE Department",
    link: "#"
  }
];

export default function Notices() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  
  const getNoticeIcon = (type: string) => {
    switch(type) {
      case 'exam':
        return <FileText className="h-5 w-5" />;
      case 'event':
        return <Calendar className="h-5 w-5" />;
      default:
        return <AlertCircle className="h-5 w-5" />;
    }
  };
  
  const getNoticeBadgeClass = (type: string) => {
    switch(type) {
      case 'exam':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'academic':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default:
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Notices & Announcements</h2>
        <p className="text-muted-foreground">
          Stay updated with the latest announcements and notices
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        {mockNotices.map((notice) => (
          <Card key={notice.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`rounded-full p-1.5 ${getNoticeBadgeClass(notice.type)}`}>
                    {getNoticeIcon(notice.type)}
                  </div>
                  <CardTitle className="text-lg">{notice.title}</CardTitle>
                </div>
                <span className={`rounded px-2 py-1 text-xs ${getNoticeBadgeClass(notice.type)}`}>
                  {notice.type.charAt(0).toUpperCase() + notice.type.slice(1)}
                </span>
              </div>
              <CardDescription className="pt-1">
                Posted on {formatDate(notice.date)} by {notice.source}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{notice.content}</p>
              <a href={notice.link} className="text-sm text-primary hover:underline mt-2 block">
                View full notice →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
