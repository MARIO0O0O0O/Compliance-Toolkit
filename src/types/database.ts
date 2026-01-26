export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          company_name: string | null;
          employee_count: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          company_name?: string | null;
          employee_count?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          company_name?: string | null;
          employee_count?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      compliance_progress: {
        Row: {
          id: string;
          user_id: string;
          checklist_id: string;
          item_id: string;
          completed: boolean;
          notes: string | null;
          completed_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          checklist_id: string;
          item_id: string;
          completed?: boolean;
          notes?: string | null;
          completed_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          checklist_id?: string;
          item_id?: string;
          completed?: boolean;
          notes?: string | null;
          completed_at?: string | null;
          created_at?: string;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string | null;
          content: string;
          cover_image: string | null;
          author_id: string;
          published: boolean;
          published_at: string | null;
          affiliate_links: Json | null;
          tags: string[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          excerpt?: string | null;
          content: string;
          cover_image?: string | null;
          author_id: string;
          published?: boolean;
          published_at?: string | null;
          affiliate_links?: Json | null;
          tags?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          excerpt?: string | null;
          content?: string;
          cover_image?: string | null;
          author_id?: string;
          published?: boolean;
          published_at?: string | null;
          affiliate_links?: Json | null;
          tags?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      donations: {
        Row: {
          id: string;
          donor_email: string | null;
          donor_name: string | null;
          amount: number;
          currency: string;
          stripe_payment_id: string | null;
          message: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          donor_email?: string | null;
          donor_name?: string | null;
          amount: number;
          currency?: string;
          stripe_payment_id?: string | null;
          message?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          donor_email?: string | null;
          donor_name?: string | null;
          amount?: number;
          currency?: string;
          stripe_payment_id?: string | null;
          message?: string | null;
          created_at?: string;
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          company: string | null;
          phone: string | null;
          message: string;
          service_interest: string | null;
          created_at: string;
          responded: boolean;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          company?: string | null;
          phone?: string | null;
          message: string;
          service_interest?: string | null;
          created_at?: string;
          responded?: boolean;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          company?: string | null;
          phone?: string | null;
          message?: string;
          service_interest?: string | null;
          created_at?: string;
          responded?: boolean;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}
