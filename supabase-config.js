// supabase-config.js
const SUPABASE_URL = 'https://jyfnzayshkeuaxddqhjj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_eU0-K05BBuma2x4ty4nIbw_Uai0IK7m';

// Инициализируем клиент
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("✅ Supabase инициализирован");