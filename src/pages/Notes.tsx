import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Download, PlusCircle, Loader2, Trash2, Upload, File } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const subjects = [
  { name: "Digital Communication", code: "21EC61" },
  { name: "Microcontrollers", code: "21EC62" },
  { name: "Digital Signal Processing", code: "21EC63" },
  { name: "VLSI Design", code: "21EC64" },
  { name: "Embedded Systems", code: "21EC651" },
  { name: "Information Theory & Coding", code: "21EC652" },
];

interface Note {
  id: string;
  subject_name: string;
  subject_code: string;
  title: string;
  description: string | null;
  file_url: string | null;
  uploaded_by: string | null;
  uploaded_by_name: string;
  created_at: string;
}

export default function Notes() {
  const { user, isFaculty, isStaff, isAdmin } = useAuth();
  const canUpload = isFaculty || isStaff || isAdmin;
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const [newNote, setNewNote] = useState({
    subjectCode: "",
    title: "",
    description: "",
  });

  const fetchNotes = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from("notes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setNotes(data || []);
    } catch (error: any) {
      console.error("Error fetching notes:", error);
      toast.error("Failed to load notes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const sendEmailNotification = async (noteData: { subjectName: string; subjectCode: string; noteTitle: string; uploadedBy: string }) => {
    try {
      const { data, error } = await supabase.functions.invoke("send-note-notification", {
        body: {
          ...noteData,
          recipientEmail: "hshashank847@gmail.com",
        },
      });

      if (error) {
        console.error("Error sending email notification:", error);
        toast.error("Note uploaded but email notification failed");
        return;
      }

      console.log("Email notification sent:", data);
      toast.success("Email notification sent to students!");
    } catch (error) {
      console.error("Error invoking email function:", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Please select a PDF file");
        return;
      }
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast.error("File size must be less than 10MB");
        return;
      }
      setSelectedFile(file);
    }
  };

  const uploadFile = async (file: File): Promise<string | null> => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${newNote.subjectCode}/${fileName}`;

    const { data, error } = await supabase.storage
      .from("course-notes")
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading file:", error);
      throw error;
    }

    const { data: urlData } = supabase.storage
      .from("course-notes")
      .getPublicUrl(filePath);

    return urlData.publicUrl;
  };

  const handleUpload = async () => {
    if (!newNote.subjectCode || !newNote.title) {
      toast.error("Please fill in all required fields");
      return;
    }

    const selectedSubject = subjects.find(s => s.code === newNote.subjectCode);
    if (!selectedSubject) {
      toast.error("Invalid subject selected");
      return;
    }

    setUploading(true);
    try {
      let fileUrl: string | null = null;

      // Upload file if selected
      if (selectedFile) {
        fileUrl = await uploadFile(selectedFile);
      }

      const { data, error } = await (supabase as any)
        .from("notes")
        .insert({
          subject_name: selectedSubject.name,
          subject_code: selectedSubject.code,
          title: newNote.title,
          description: newNote.description || null,
          file_url: fileUrl,
          uploaded_by: user?.id,
          uploaded_by_name: user?.name || "Unknown",
        })
        .select()
        .single();

      if (error) throw error;

      toast.success("Note uploaded successfully!");
      setNotes([data, ...notes]);
      setNewNote({ subjectCode: "", title: "", description: "" });
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setDialogOpen(false);

      // Send email notification
      await sendEmailNotification({
        subjectName: selectedSubject.name,
        subjectCode: selectedSubject.code,
        noteTitle: newNote.title,
        uploadedBy: user?.name || "Faculty",
      });

    } catch (error: any) {
      console.error("Error uploading note:", error);
      toast.error("Failed to upload note: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (note: Note) => {
    try {
      // Delete file from storage if exists
      if (note.file_url) {
        const urlParts = note.file_url.split("/course-notes/");
        if (urlParts[1]) {
          const filePath = decodeURIComponent(urlParts[1]);
          await supabase.storage.from("course-notes").remove([filePath]);
        }
      }

      const { error } = await (supabase as any)
        .from("notes")
        .delete()
        .eq("id", note.id);

      if (error) throw error;

      setNotes(notes.filter(n => n.id !== note.id));
      toast.success("Note deleted successfully");
    } catch (error: any) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleDownload = (fileUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `${title}.pdf`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  // Group notes by subject
  const notesBySubject = notes.reduce((acc, note) => {
    const key = note.subject_code;
    if (!acc[key]) {
      acc[key] = { name: note.subject_name, code: note.subject_code, notes: [] };
    }
    acc[key].notes.push(note);
    return acc;
  }, {} as Record<string, { name: string; code: string; notes: Note[] }>);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Course Notes</h2>
          <p className="text-muted-foreground">
            Access lecture notes and study materials
          </p>
        </div>
        {canUpload && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Upload Notes
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload New Notes</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select
                    value={newNote.subjectCode}
                    onValueChange={(value) => setNewNote({ ...newNote, subjectCode: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject.code} value={subject.code}>
                          {subject.name} ({subject.code})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Note Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Module 1: Introduction to DSP"
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description (optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Brief description of the notes..."
                    value={newNote.description}
                    onChange={(e) => setNewNote({ ...newNote, description: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="file">PDF File (optional)</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      ref={fileInputRef}
                      id="file"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      {selectedFile ? selectedFile.name : "Choose PDF file"}
                    </Button>
                  </div>
                  {selectedFile && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <File className="h-4 w-4" />
                      <span>{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedFile(null);
                          if (fileInputRef.current) {
                            fileInputRef.current.value = "";
                          }
                        }}
                        className="h-auto p-1 text-destructive"
                      >
                        Remove
                      </Button>
                    </div>
                  )}
                </div>
                <Button onClick={handleUpload} disabled={uploading} className="w-full">
                  {uploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    "Upload & Notify Students"
                  )}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : Object.keys(notesBySubject).length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No notes uploaded yet</p>
            {canUpload && (
              <p className="text-sm text-muted-foreground mt-2">
                Click "Upload Notes" to add study materials
              </p>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {Object.values(notesBySubject).map((subject) => (
            <Card key={subject.code}>
              <CardHeader>
                <CardTitle>{subject.name}</CardTitle>
                <CardDescription>Course Code: {subject.code}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subject.notes.map((note) => (
                    <div key={note.id} className="flex items-center justify-between border-b pb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded ${note.file_url ? 'bg-primary/10' : 'bg-muted'}`}>
                          <FileText className={`h-5 w-5 ${note.file_url ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{note.title}</p>
                          <p className="text-xs text-muted-foreground">
                            Uploaded by {note.uploaded_by_name} on {formatDate(note.created_at)}
                            {note.file_url && <span className="ml-2 text-primary">• PDF attached</span>}
                          </p>
                          {note.description && (
                            <p className="text-xs text-muted-foreground mt-1">{note.description}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {note.file_url && (
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleDownload(note.file_url!, note.title)}
                            title="Download PDF"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
                        {canUpload && note.uploaded_by === user?.id && (
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleDelete(note)}
                            title="Delete note"
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
