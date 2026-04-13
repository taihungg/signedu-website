import { createClient } from "@supabase/supabase-js";

// Provide type defaults for missing environment variables so the build does not immediately crash, 
// though the user will be alerted they need to configure them.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-url.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
