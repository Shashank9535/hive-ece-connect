
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  BookOpen, 
  Bell,
  BarChart3
} from "lucide-react";

interface AdminStatsProps {
  pendingLeavesCount: number;
  assignmentsCount: number;
  noticesCount: number;
  studentsCount: number;
}

const AdminStats: React.FC<AdminStatsProps> = ({ 
  pendingLeavesCount, 
  assignmentsCount, 
  noticesCount, 
  studentsCount 
}) => {
  const stats = [
    { title: "Total Faculty", value: "45", icon: Users, color: "bg-blue-500" },
    { title: "Total Staff", value: "28", icon: Users, color: "bg-green-500" },
    { title: "Pending Leaves", value: pendingLeavesCount.toString(), icon: Calendar, color: "bg-yellow-500" },
    { title: "Active Assignments", value: assignmentsCount.toString(), icon: BookOpen, color: "bg-purple-500" },
    { title: "Active Notices", value: noticesCount.toString(), icon: Bell, color: "bg-red-500" },
    { title: "Total Students", value: studentsCount.toString(), icon: BarChart3, color: "bg-indigo-500" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminStats;
