
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { User as SupabaseUser } from '@supabase/supabase-js';

interface UserProfile {
  id: string;
  user_id: string;
  name: string;
  usn: string | null;
}

interface User {
  id: string;
  email: string;
  name: string;
  usn: string | null;
  role: 'admin' | 'faculty' | 'staff' | 'student';
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async (authUser: SupabaseUser) => {
    try {
      // Fetch profile
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', authUser.id)
        .maybeSingle();

      if (profileError) {
        console.error('Error fetching profile:', profileError);
        return null;
      }

      // Fetch role
      const { data: roleData, error: roleError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', authUser.id)
        .maybeSingle();

      if (roleError) {
        console.error('Error fetching role:', roleError);
        return null;
      }

      if (profile && roleData) {
        return {
          id: authUser.id,
          email: authUser.email!,
          name: profile.name,
          usn: profile.usn,
          role: roleData.role as 'admin' | 'faculty' | 'staff' | 'student',
          isAuthenticated: true,
        };
      }

      return null;
    } catch (error) {
      console.error('Error in fetchUserProfile:', error);
      return null;
    }
  };

  useEffect(() => {
    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        fetchUserProfile(session.user).then((userData) => {
          setUser(userData);
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const userData = await fetchUserProfile(session.user);
        setUser(userData);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (usn: string, password: string, name: string, role: 'admin' | 'faculty' | 'staff' | 'student') => {
    try {
      // For this demo, we'll use USN as email domain
      const email = `${usn.toLowerCase()}@campushive.edu`;
      
      // Try to sign in
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        // If user doesn't exist, create account with role in metadata
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
              usn,
              role, // Pass role in metadata so trigger can use it
            },
          },
        });

        if (signUpError) throw signUpError;

        if (signUpData.user) {
          const userData = await fetchUserProfile(signUpData.user);
          setUser(userData);
        }
      } else if (signInData.user) {
        const userData = await fetchUserProfile(signInData.user);
        setUser(userData);
      }

      return { error: null };
    } catch (error: any) {
      console.error('Login error:', error);
      return { error: error.message };
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: user?.isAuthenticated || false,
    isAdmin: user?.role === 'admin',
    isStaffOrFaculty: user?.role === 'staff' || user?.role === 'faculty',
    isStudent: user?.role === 'student',
  };
};
