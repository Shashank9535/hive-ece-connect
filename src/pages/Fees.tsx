
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  CreditCard, 
  Calendar, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Download,
  ExternalLink,
  Bell,
  Receipt
} from "lucide-react";

export default function Fees() {
  // Mock fee data
  const feeStructure = [
    { item: "Tuition Fee", amount: 60000, paid: 60000, status: "paid" },
    { item: "Development Fee", amount: 8000, paid: 8000, status: "paid" },
    { item: "Library Fee", amount: 2000, paid: 2000, status: "paid" },
    { item: "Lab Fee", amount: 5000, paid: 5000, status: "paid" },
    { item: "Next Semester Fee", amount: 75000, paid: 0, status: "pending" }
  ];

  const paymentHistory = [
    {
      id: "TXN001",
      date: "2024-07-15",
      description: "Semester 6 Fee Payment",
      amount: 75000,
      status: "success",
      receiptNo: "RCP2024001"
    },
    {
      id: "TXN002", 
      date: "2024-01-20",
      description: "Semester 5 Fee Payment",
      amount: 72000,
      status: "success",
      receiptNo: "RCP2024002"
    },
    {
      id: "TXN003",
      date: "2023-07-18",
      description: "Semester 4 Fee Payment", 
      amount: 70000,
      status: "success",
      receiptNo: "RCP2023003"
    }
  ];

  const upcomingDeadlines = [
    {
      description: "Semester 7 Fee Payment",
      dueDate: "2025-07-15",
      amount: 78000,
      status: "upcoming"
    },
    {
      description: "Late Fee Penalty (if not paid by due date)",
      dueDate: "2025-07-30",
      amount: 2000,
      status: "warning"
    }
  ];

  const totalPaid = feeStructure.reduce((sum, item) => sum + item.paid, 0);
  const totalDue = feeStructure.reduce((sum, item) => sum + (item.amount - item.paid), 0);
  const totalAmount = feeStructure.reduce((sum, item) => sum + item.amount, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
      case "success":
        return "bg-green-100 text-green-800";
      case "pending":
      case "upcoming":
        return "bg-yellow-100 text-yellow-800";
      case "warning":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
      case "success":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
      case "upcoming":
        return <Clock className="h-4 w-4" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Fee Payment Status & Deadlines</h2>
          <p className="text-gray-600 mt-1">View your fee structure, payment history, and upcoming deadlines</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download Statement
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 gap-2">
            <CreditCard className="h-4 w-4" />
            Pay Now
          </Button>
        </div>
      </div>

      {/* Fee Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">₹{totalPaid.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Paid</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-600">₹{totalDue.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Amount Due</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">₹{totalAmount.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Amount</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Fee Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            Current Academic Year Fee Structure
          </CardTitle>
          <CardDescription>Detailed breakdown of your fee components</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fee Component</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Paid</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeStructure.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.item}</TableCell>
                  <TableCell>₹{item.amount.toLocaleString()}</TableCell>
                  <TableCell>₹{item.paid.toLocaleString()}</TableCell>
                  <TableCell>₹{(item.amount - item.paid).toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(item.status)}>
                      {getStatusIcon(item.status)}
                      <span className="ml-1 capitalize">{item.status}</span>
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Upcoming Deadlines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Payment Deadlines
          </CardTitle>
          <CardDescription>Important dates to remember</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                deadline.status === 'warning' ? 'border-l-red-500 bg-red-50' : 'border-l-yellow-500 bg-yellow-50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{deadline.description}</h4>
                    <p className="text-sm text-muted-foreground">
                      Due Date: {new Date(deadline.dueDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="text-sm font-medium">Amount: ₹{deadline.amount.toLocaleString()}</p>
                  </div>
                  <Badge className={getStatusColor(deadline.status)}>
                    {getStatusIcon(deadline.status)}
                    <span className="ml-1 capitalize">{deadline.status}</span>
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Payment History
          </CardTitle>
          <CardDescription>Your past fee payment transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Receipt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>
                    {new Date(payment.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </TableCell>
                  <TableCell>{payment.description}</TableCell>
                  <TableCell>₹{payment.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(payment.status)}>
                      {getStatusIcon(payment.status)}
                      <span className="ml-1 capitalize">{payment.status}</span>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-3 w-3" />
                      {payment.receiptNo}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Fee Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Fee Notifications & Reminders
          </CardTitle>
          <CardDescription>Set up automatic reminders for payment deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900">Email Notifications</h4>
              <p className="text-sm text-blue-700 mt-1">Get email reminders 30, 15, and 7 days before payment deadlines</p>
              <Button variant="outline" className="mt-3 text-blue-600 border-blue-200">
                Enable Email Alerts
              </Button>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900">SMS Notifications</h4>
              <p className="text-sm text-green-700 mt-1">Receive SMS alerts for urgent payment reminders and confirmations</p>
              <Button variant="outline" className="mt-3 text-green-600 border-green-200">
                Enable SMS Alerts
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
