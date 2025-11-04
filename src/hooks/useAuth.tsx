
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Session } from '@supabase/supabase-js';

interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
  usn?: string;
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async (userId: string, email: string) => {
    try {
      // Fetch user profile and role using direct query
      // @ts-ignore - Tables exist in database but types not yet generated
      const profileQuery = supabase.from('profiles').select('name, usn').eq('user_id', userId).single();

      // @ts-ignore - Tables exist in database but types not yet generated
      const roleQuery = supabase.from('user_roles').select('role').eq('user_id', userId).single();

      const [{ data: profile }, { data: roleData }] = await Promise.all([
        profileQuery,
        roleQuery
      ]) as [
        { data: { name: string; usn: string } | null },
        { data: { role: string } | null }
      ];

      return {
        id: userId,
        email: email || '',
        name: profile?.name || '',
        usn: profile?.usn || '',
        role: roleData?.role || 'student',
        isAuthenticated: true
      };
    } catch (error) {
      console.error('Error fetching user data:', error);
      return {
        id: userId,
        email: email || '',
        name: '',
        usn: '',
        role: 'student',
        isAuthenticated: true
      };
    }
  };

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        
        if (session?.user) {
          const userData = await fetchUserData(session.user.id, session.user.email || '');
          setUser(userData);
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      
      if (session?.user) {
        const userData = await fetchUserData(session.user.id, session.user.email || '');
        setUser(userData);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, name: string, usn: string, role: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          name,
          usn,
          role
        }
      }
    });
    
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    return { error };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  };

  return {
    user,
    session,
    loading,
    signUp,
    signIn,
    logout,
    isAuthenticated: user?.isAuthenticated || false,
    isAdmin: user?.role === 'admin',
    isStaffOrFacultyOrAdmin: user?.role === 'admin' || user?.role === 'faculty' || user?.role === 'staff',
    isStudent: user?.role === 'student'
  };
};
