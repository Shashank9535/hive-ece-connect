-- Update the handle_new_user function to also insert the user role
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Insert profile
  INSERT INTO public.profiles (user_id, name, usn)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'name',
    new.raw_user_meta_data->>'usn'
  );
  
  -- Insert role (default to student if not specified)
  INSERT INTO public.user_roles (user_id, role)
  VALUES (
    new.id,
    COALESCE(
      (new.raw_user_meta_data->>'role')::app_role,
      'student'::app_role
    )
  );
  
  RETURN new;
END;
$$;