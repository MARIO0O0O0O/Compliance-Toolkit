-- California Compliance Consultancy Database Schema
-- Run this in your Supabase SQL Editor to set up the database

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ======================
-- PROFILES TABLE
-- ======================
-- Stores user profile information linked to auth.users
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  company_name TEXT,
  employee_count INTEGER,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Trigger to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ======================
-- COMPLIANCE PROGRESS TABLE
-- ======================
-- Tracks user's checklist completion progress
CREATE TABLE IF NOT EXISTS public.compliance_progress (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  checklist_id TEXT NOT NULL,
  item_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  notes TEXT,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, checklist_id, item_id)
);

-- Enable RLS
ALTER TABLE public.compliance_progress ENABLE ROW LEVEL SECURITY;

-- Compliance progress policies
CREATE POLICY "Users can view own progress" ON public.compliance_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON public.compliance_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON public.compliance_progress
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress" ON public.compliance_progress
  FOR DELETE USING (auth.uid() = user_id);

-- Index for faster queries
CREATE INDEX idx_compliance_progress_user_checklist
  ON public.compliance_progress(user_id, checklist_id);

-- ======================
-- BLOG POSTS TABLE
-- ======================
-- Stores blog posts (managed by admin)
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  author_id UUID REFERENCES public.profiles(id),
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  affiliate_links JSONB DEFAULT '[]'::jsonb,
  tags TEXT[] DEFAULT '{}',
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Blog posts policies (public read for published posts)
CREATE POLICY "Anyone can view published posts" ON public.blog_posts
  FOR SELECT USING (published = true);

CREATE POLICY "Authors can view own posts" ON public.blog_posts
  FOR SELECT USING (auth.uid() = author_id);

CREATE POLICY "Authors can insert posts" ON public.blog_posts
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update own posts" ON public.blog_posts
  FOR UPDATE USING (auth.uid() = author_id);

-- Index for faster queries
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published, published_at DESC);
CREATE INDEX idx_blog_posts_tags ON public.blog_posts USING GIN(tags);

-- ======================
-- DONATIONS TABLE
-- ======================
-- Tracks donations (public records, no user link required)
CREATE TABLE IF NOT EXISTS public.donations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  donor_email TEXT,
  donor_name TEXT,
  amount INTEGER NOT NULL, -- In cents
  currency TEXT DEFAULT 'usd',
  stripe_payment_id TEXT UNIQUE,
  stripe_customer_id TEXT,
  message TEXT,
  is_anonymous BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Donations policies (admin only, no public access)
-- You'll need to create an admin role or use service_role key

-- ======================
-- CONTACT SUBMISSIONS TABLE
-- ======================
-- Stores contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  employee_size TEXT,
  service_interest TEXT,
  message TEXT NOT NULL,
  responded BOOLEAN DEFAULT FALSE,
  responded_at TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Contact submissions - insert only for public
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions
  FOR INSERT WITH CHECK (true);

-- ======================
-- NEWSLETTER SUBSCRIBERS TABLE
-- ======================
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT TRUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Newsletter - insert only for public
CREATE POLICY "Anyone can subscribe" ON public.newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- ======================
-- HELPER FUNCTIONS
-- ======================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to relevant tables
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ======================
-- VIEWS
-- ======================

-- Public blog posts view
CREATE OR REPLACE VIEW public.published_blog_posts AS
SELECT
  id,
  slug,
  title,
  excerpt,
  cover_image,
  published_at,
  tags,
  view_count,
  CASE WHEN affiliate_links IS NOT NULL AND jsonb_array_length(affiliate_links) > 0
       THEN true ELSE false END as is_affiliate
FROM public.blog_posts
WHERE published = true
ORDER BY published_at DESC;

-- User compliance summary view
CREATE OR REPLACE VIEW public.user_compliance_summary AS
SELECT
  user_id,
  checklist_id,
  COUNT(*) as total_items,
  COUNT(*) FILTER (WHERE completed = true) as completed_items,
  ROUND((COUNT(*) FILTER (WHERE completed = true)::numeric / COUNT(*)::numeric) * 100, 2) as completion_percentage
FROM public.compliance_progress
GROUP BY user_id, checklist_id;

-- ======================
-- SAMPLE DATA (Optional)
-- ======================
-- Uncomment to add sample blog posts

/*
INSERT INTO public.blog_posts (slug, title, excerpt, content, published, published_at, tags, affiliate_links) VALUES
(
  'california-minimum-wage-2026',
  'California Minimum Wage 2026: What Employers Need to Know',
  'A comprehensive guide to the new minimum wage rates taking effect in 2026.',
  '## Overview\n\nCalifornia''s minimum wage continues to evolve...',
  true,
  NOW(),
  ARRAY['Wage & Hour', 'Compliance', '2026 Updates'],
  '[]'::jsonb
),
(
  'best-hr-software-small-business',
  'Best HR Software for Small California Businesses (2026)',
  'Our top picks for HR software that helps small businesses manage compliance.',
  '## Why HR Software Matters\n\nManaging HR compliance in California is complex...',
  true,
  NOW() - INTERVAL '5 days',
  ARRAY['Tools', 'Software', 'Affiliate'],
  '[{"name": "Gusto", "url": "https://gusto.com", "description": "Best for small business"}]'::jsonb
);
*/
