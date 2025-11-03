
import { useState, useEffect } from 'react';

interface User {
  email: string;
  role: string;
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status on mount
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const userRole = localStorage.getItem('userRole');
    const userEmail = localStorage.getItem('userEmail');

    if (isAuthenticated && userRole && userEmail) {
      setUser({
        email: userEmail,
        role: userRole,
        isAuthenticated: true
      });
    }
    setLoading(false);
  }, []);

  const login = (email: string, role: string) => {
    localStorage.setItem('userRole', role);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('isAuthenticated', 'true');
    
    setUser({
      email,
      role,
      isAuthenticated: true
    });
  };

  const logout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('isAuthenticated');
    setUser(null);
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: user?.isAuthenticated || false,
    isAdmin: user?.role === 'admin',
    isStudent: user?.role === 'student' || user?.role === 'faculty' || user?.role === 'staff'
  };
};
