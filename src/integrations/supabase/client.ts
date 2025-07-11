// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rippqehomcqztbvtugei.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpcHBxZWhvbWNxenRidnR1Z2VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjUzOTksImV4cCI6MjA2NzA0MTM5OX0.18T4WkpSZ6G65kV557xJ_1ctJSSKXqg1yBoFPaOwdVU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});