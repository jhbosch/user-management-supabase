import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fefkyhfktfqhyksgyfug.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlZmt5aGZrdGZxaHlrc2d5ZnVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwNTUxOTYsImV4cCI6MjAyNjYzMTE5Nn0.fNDnt9pbSWK5YCIsIsWNkqi7drQ28PoezReDhwro4y0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

