
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Download } from "lucide-react";

const AttendanceMonitoring = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Monitor Student Attendance Reports
        </CardTitle>
        <CardDescription>
          View and analyze student attendance data across all subjects
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Classes</SelectItem>
                  <SelectItem value="6th-sem">6th Sem ECE</SelectItem>
                  <SelectItem value="4th-sem">4th Sem ECE</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  <SelectItem value="dsp">DSP</SelectItem>
                  <SelectItem value="vlsi">VLSI</SelectItem>
                  <SelectItem value="mp">Microprocessor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">87%</p>
                  <p className="text-sm text-gray-600">Overall Attendance</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-600">12</p>
                  <p className="text-sm text-gray-600">Students Below 75%</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">156</p>
                  <p className="text-sm text-gray-600">Total Classes</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-3">Students with Low Attendance</h4>
            <div className="space-y-2">
              {['John Doe - 65%', 'Jane Smith - 72%', 'Mike Johnson - 68%'].map((student, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-red-50 rounded">
                  <span className="text-sm">{student}</span>
                  <Button size="sm" variant="outline" className="text-red-600">
                    Send Warning
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceMonitoring;
