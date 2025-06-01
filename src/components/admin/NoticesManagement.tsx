import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Plus, Edit, Trash2 } from "lucide-react";

interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
  status: string;
  type?: string;
}

interface NoticesManagementProps {
  notices: Notice[];
  setNotices: React.Dispatch<React.SetStateAction<Notice[]>>;
}

const NoticesManagement: React.FC<NoticesManagementProps> = ({ notices, setNotices }) => {
  const [newNotice, setNewNotice] = useState({ title: '', content: '', type: 'academic' });

  const handleCreateNotice = () => {
    if (newNotice.title && newNotice.content) {
      const notice = {
        id: notices.length + 1,
        ...newNotice,
        date: new Date().toISOString().split('T')[0],
        status: 'active'
      };
      setNotices([notice, ...notices]);
      setNewNotice({ title: '', content: '', type: 'academic' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Post or Update Notices
        </CardTitle>
        <CardDescription>
          Create and manage department announcements and notices
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Create New Notice Form */}
          <div className="border rounded-lg p-4 bg-green-50">
            <h3 className="text-lg font-semibold mb-4">Create New Notice</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="notice-title">Notice Title</Label>
                <Input
                  id="notice-title"
                  value={newNotice.title}
                  onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                  placeholder="Enter notice title"
                />
              </div>
              <div>
                <Label htmlFor="notice-type">Notice Type</Label>
                <Select value={newNotice.type} onValueChange={(value) => setNewNotice({ ...newNotice, type: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="exam">Exam</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                    <SelectItem value="administrative">Administrative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="notice-content">Notice Content</Label>
                <Textarea
                  id="notice-content"
                  value={newNotice.content}
                  onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                  placeholder="Enter notice content"
                  rows={4}
                />
              </div>
            </div>
            <Button onClick={handleCreateNotice} className="mt-4 bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Post Notice
            </Button>
          </div>

          {/* Existing Notices */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Existing Notices</h3>
            <div className="space-y-3">
              {notices.map((notice) => (
                <div key={notice.id} className="flex items-center justify-between p-4 border rounded-lg bg-white">
                  <div className="flex-1">
                    <h4 className="font-semibold">{notice.title}</h4>
                    <p className="text-sm text-gray-600">{notice.content}</p>
                    <p className="text-xs text-gray-500">Posted on: {notice.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={notice.status === 'active' ? 'default' : 'secondary'}>
                      {notice.status}
                    </Badge>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoticesManagement;
