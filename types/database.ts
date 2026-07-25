/**
 * Typed Supabase schema for this project.
 * Keep in sync with the remote `contact_message` table.
 */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      contact_message: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          phone: string;
          subject: string;
          message: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          phone: string;
          subject: string;
          message: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          phone?: string;
          subject?: string;
          message?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type ContactMessageInsert =
  Database["public"]["Tables"]["contact_message"]["Insert"];
