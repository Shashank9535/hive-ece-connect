-- Create storage bucket for course notes
INSERT INTO storage.buckets (id, name, public)
VALUES ('course-notes', 'course-notes', true);

-- Allow anyone to view/download notes files
CREATE POLICY "Anyone can view notes files"
ON storage.objects FOR SELECT
USING (bucket_id = 'course-notes');

-- Only faculty/staff/admin can upload notes
CREATE POLICY "Faculty/Staff/Admin can upload notes"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'course-notes' AND
  (
    public.has_role(auth.uid(), 'faculty') OR
    public.has_role(auth.uid(), 'staff') OR
    public.has_role(auth.uid(), 'admin')
  )
);

-- Faculty/Staff/Admin can delete their own uploaded files
CREATE POLICY "Faculty/Staff/Admin can delete own notes"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'course-notes' AND
  (
    public.has_role(auth.uid(), 'faculty') OR
    public.has_role(auth.uid(), 'staff') OR
    public.has_role(auth.uid(), 'admin')
  )
);