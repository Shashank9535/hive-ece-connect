
import React from 'react';
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="mb-8 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Hive ECE Connect - Human Resource Management System</p>
      </div>
      <Button onClick={handleLogout} variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
        <LogOut className="h-4 w-4 mr-2" />
        Logout
      </Button>
    </div>
  );
};

export default AdminHeader;
