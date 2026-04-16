import { createClient } from "@supabase/supabase-js";

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-url.supabase.co";
const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

// Defensively clean the variables just in case they carry string-literal quotes or "undefined"
const cleanUrl = rawUrl.replace(/^["']|["']$/g, '').trim();
const cleanKey = rawKey.replace(/^["']|["']$/g, '').trim();

// Ensure the URL is valid HTTP/HTTPS to prevent build-time crashes during SSR
const validUrl = cleanUrl === "undefined" || !cleanUrl.startsWith("http") 
  ? "https://placeholder-url.supabase.co" 
  : cleanUrl;

export const supabase = createClient(validUrl, cleanKey);
