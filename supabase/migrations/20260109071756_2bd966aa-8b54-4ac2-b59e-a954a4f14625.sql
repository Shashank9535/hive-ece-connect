-- Create notes table
CREATE TABLE public.notes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  subject_name TEXT NOT NULL,
  subject_code TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT,
  uploaded_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  uploaded_by_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;

-- Everyone can view notes
CREATE POLICY "Anyone can view notes" 
ON public.notes 
FOR SELECT 
USING (true);

-- Only faculty, staff, admin can insert notes
CREATE POLICY "Faculty/Staff/Admin can create notes" 
ON public.notes 
FOR INSERT 
WITH CHECK (
  public.has_role(auth.uid(), 'faculty') OR 
  public.has_role(auth.uid(), 'staff') OR 
  public.has_role(auth.uid(), 'admin')
);

-- Only faculty, staff, admin can update their own notes
CREATE POLICY "Faculty/Staff/Admin can update own notes" 
ON public.notes 
FOR UPDATE 
USING (
  uploaded_by = auth.uid() AND (
    public.has_role(auth.uid(), 'faculty') OR 
    public.has_role(auth.uid(), 'staff') OR 
    public.has_role(auth.uid(), 'admin')
  )
);

-- Only faculty, staff, admin can delete their own notes
CREATE POLICY "Faculty/Staff/Admin can delete own notes" 
ON public.notes 
FOR DELETE 
USING (
  uploaded_by = auth.uid() AND (
    public.has_role(auth.uid(), 'faculty') OR 
    public.has_role(auth.uid(), 'staff') OR 
    public.has_role(auth.uid(), 'admin')
  )
);