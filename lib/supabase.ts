import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

export type SupabaseEnvResult =
  | { ok: true; url: string; anonKey: string }
  | { ok: false; reason: "missing" | "invalid_url" | "insecure_url" };

/**
 * Resolve browser-safe Supabase credentials from NEXT_PUBLIC_* only.
 * Never hardcode keys. Never use the service_role key on the client.
 */
export function resolveSupabaseEnv(): SupabaseEnvResult {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !anonKey) {
    return { ok: false, reason: "missing" };
  }

  try {
    const parsed = new URL(url);
    const isLocal =
      parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
    if (
      parsed.protocol !== "https:" &&
      !(isLocal && parsed.protocol === "http:")
    ) {
      return { ok: false, reason: "insecure_url" };
    }
  } catch {
    return { ok: false, reason: "invalid_url" };
  }

  return { ok: true, url, anonKey };
}

export function isSupabaseConfigured(): boolean {
  return resolveSupabaseEnv().ok;
}

let client: SupabaseClient<Database> | null = null;

/**
 * Singleton browser client — safe to call from Client Components.
 * Returns null when env is not configured (caller should show a friendly error).
 */
export function getSupabaseBrowserClient(): SupabaseClient<Database> | null {
  if (client) return client;

  const env = resolveSupabaseEnv();
  if (!env.ok) return null;

  client = createClient<Database>(env.url, env.anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    global: {
      headers: {
        "X-Client-Info": "kishanyojna-web",
      },
    },
  });

  return client;
}
