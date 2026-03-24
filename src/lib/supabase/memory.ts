import { createClient } from "@supabase/supabase-js";

// staxion-memory Supabase (내부 운영용)
const MEMORY_URL = process.env.STAXION_MEMORY_URL || "https://shpbsjafplupygskewhe.supabase.co";
const MEMORY_KEY = process.env.STAXION_MEMORY_KEY || "";

export function createMemoryClient() {
  if (!MEMORY_KEY) {
    throw new Error("STAXION_MEMORY_KEY 환경변수 필요");
  }
  return createClient(MEMORY_URL, MEMORY_KEY);
}
