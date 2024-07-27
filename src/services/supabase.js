import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rmxwlyzcodftzxluzbiz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJteHdseXpjb2RmdHp4bHV6Yml6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwMDg5MTQsImV4cCI6MjAzNjU4NDkxNH0.a0hbrxNknnehSwZNf8g13ItLiONarXr-GsLU3zGsVwo";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
