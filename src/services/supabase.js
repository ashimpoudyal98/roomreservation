import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lbtdqvvrumvsqgzoqoyl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxidGRxdnZydW12c3Fnem9xb3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0OTkxNTEsImV4cCI6MjAyNjA3NTE1MX0.VdDImtA0exmTXPur64urL5W9rCsODEgA6ER9EDlTOTc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
