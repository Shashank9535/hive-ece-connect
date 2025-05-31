
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, FileText, Clock, CheckCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeaveApplication = () => {
  const { toast } = useToast();
  const [leaveType, setLeaveType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [reason, setReason] = useState('');
  const [alternateContact, setAlternateContact] = useState('');

  const [leaveHistory] = useState([
    { id: 1, type: "Medical Leave", from: "2023-12-01", to: "2023-12-03", days: 3, status: "approved", reason: "Fever and cold" },
    { id: 2, type: "Casual Leave", from: "2023-11-15", to: "2023-11-15", days: 1, status: "approved", reason: "Personal work" },
    { id: 3, type: "Academic Leave", from: "2023-10-20", to: "2023-10-25", days: 6, status: "pending", reason: "Conference attendance" },
    { id: 4, type: "Casual Leave", from: "2023-09-10", to: "2023-09-12", days: 3, status: "rejected", reason: "Family function" }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!leaveType || !fromDate || !toDate || !reason) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Leave Application Submitted",
      description: "Your leave application has been submitted for approval",
    });

    // Reset form
    setLeaveType('');
    setFromDate('');
    setToDate('');
    setReason('');
    setAlternateContact('');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-500 hover:bg-green-600">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>;
      case 'rejected':
        return <Badge className="bg-red-500 hover:bg-red-600">Rejected</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const leaveBalance = {
    casual: { total: 12, used: 4, remaining: 8 },
    medical: { total: 15, used: 3, remaining: 12 },
    academic: { total: 10, used: 6, remaining: 4 },
    maternity: { total: 180, used: 0, remaining: 180 }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Leave Management</h1>
          <p className="text-gray-600">Apply for leave and track your applications</p>
        </div>

        <Tabs defaultValue="apply" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="apply">Apply for Leave</TabsTrigger>
            <TabsTrigger value="history">Leave History</TabsTrigger>
            <TabsTrigger value="balance">Leave Balance</TabsTrigger>
          </TabsList>

          <TabsContent value="apply" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Leave Application Form
                </CardTitle>
                <CardDescription>
                  Submit a new leave application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="leaveType">Leave Type *</Label>
                      <Select value={leaveType} onValueChange={setLeaveType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select leave type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="casual">Casual Leave</SelectItem>
                          <SelectItem value="medical">Medical Leave</SelectItem>
                          <SelectItem value="academic">Academic Leave</SelectItem>
                          <SelectItem value="maternity">Maternity Leave</SelectItem>
                          <SelectItem value="emergency">Emergency Leave</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="alternateContact">Alternate Contact</Label>
                      <Input
                        id="alternateContact"
                        placeholder="Contact person during leave"
                        value={alternateContact}
                        onChange={(e) => setAlternateContact(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fromDate">From Date *</Label>
                      <Input
                        id="fromDate"
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="toDate">To Date *</Label>
                      <Input
                        id="toDate"
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Leave *</Label>
                    <Textarea
                      id="reason"
                      placeholder="Please provide detailed reason for your leave application"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                      Submit Application
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Leave History
                </CardTitle>
                <CardDescription>
                  View all your previous leave applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaveHistory.map((leave) => (
                    <div key={leave.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{leave.type}</h4>
                          {getStatusBadge(leave.status)}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          {leave.from} to {leave.to} ({leave.days} days)
                        </p>
                        <p className="text-sm text-gray-500">{leave.reason}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="balance" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(leaveBalance).map(([type, balance]) => (
                <Card key={type}>
                  <CardHeader>
                    <CardTitle className="capitalize">{type} Leave</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Allocated:</span>
                        <span className="font-semibold">{balance.total} days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Used:</span>
                        <span className="font-semibold text-red-600">{balance.used} days</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-sm font-medium">Remaining:</span>
                        <span className="font-bold text-green-600">{balance.remaining} days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(balance.remaining / balance.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LeaveApplication;
