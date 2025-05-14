
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, PlusCircle } from "lucide-react";

const mockSubjects = [
  {
    id: 1,
    name: "Digital Signal Processing",
    code: "15EC61",
    notes: [
      { id: 101, title: "Module 1: Signals and Systems", type: "pdf", size: "2.4 MB", uploadedBy: "Prof. Sharma", date: "2023-04-10" },
      { id: 102, title: "Module 2: Fourier Transform", type: "pdf", size: "3.1 MB", uploadedBy: "Prof. Sharma", date: "2023-04-17" },
      { id: 103, title: "Module 3: Z-Transform", type: "pdf", size: "1.8 MB", uploadedBy: "Prof. Sharma", date: "2023-04-24" },
    ]
  },
  {
    id: 2,
    name: "Computer Networks",
    code: "15EC62",
    notes: [
      { id: 201, title: "Module 1: Network Models", type: "pdf", size: "1.9 MB", uploadedBy: "Prof. Reddy", date: "2023-04-12" },
      { id: 202, title: "Module 2: Data Link Layer", type: "pdf", size: "2.5 MB", uploadedBy: "Prof. Reddy", date: "2023-04-19" },
    ]
  },
  {
    id: 3,
    name: "VLSI Design",
    code: "15EC63",
    notes: [
      { id: 301, title: "Module 1: CMOS Technology", type: "pdf", size: "3.2 MB", uploadedBy: "Prof. Kumar", date: "2023-04-15" },
      { id: 302, title: "Module 2: Circuit Design", type: "pdf", size: "2.8 MB", uploadedBy: "Prof. Kumar", date: "2023-04-22" },
    ]
  }
];

export default function Notes() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Course Notes</h2>
          <p className="text-muted-foreground">
            Access lecture notes and study materials
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Upload Notes
        </Button>
      </div>
      
      <div className="space-y-6">
        {mockSubjects.map((subject) => (
          <Card key={subject.id}>
            <CardHeader>
              <CardTitle>{subject.name}</CardTitle>
              <CardDescription>Course Code: {subject.code}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subject.notes.map((note) => (
                  <div key={note.id} className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{note.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {note.size} • {note.type.toUpperCase()} • Uploaded by {note.uploadedBy} on {formatDate(note.date)}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
