
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Bell } from "lucide-react";

const FeesManagement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Manage Fee Records and Notifications
        </CardTitle>
        <CardDescription>
          Monitor fee payments and send notifications to students
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">₹45,00,000</p>
                  <p className="text-sm text-gray-600">Total Collected</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">₹8,50,000</p>
                  <p className="text-sm text-gray-600">Pending Amount</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-600">23</p>
                  <p className="text-sm text-gray-600">Pending Payments</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">142</p>
                  <p className="text-sm text-gray-600">Paid Students</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Students with Pending Fees</h4>
            {['John Doe - ₹75,000 (Due: 2024-06-30)', 'Jane Smith - ₹50,000 (Due: 2024-07-15)', 'Mike Johnson - ₹75,000 (Overdue)'].map((student, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded bg-yellow-50">
                <span className="text-sm">{student}</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Send Reminder
                  </Button>
                  <Button size="sm" variant="outline" className="text-green-600">
                    Mark Paid
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button className="bg-purple-600 hover:bg-purple-700">
            <Bell className="h-4 w-4 mr-2" />
            Send Bulk Fee Reminders
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeesManagement;
