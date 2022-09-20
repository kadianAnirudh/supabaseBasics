import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_ANON_KEY
const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4c2pvb3ppa3hvaGRodmdwZ3diIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM0OTgyNzgsImV4cCI6MTk3OTA3NDI3OH0.fIukih5HZQtxAh1zYlIqyK8zGF1IHq6tcKE-R35I0PA"
)

export default supabase;