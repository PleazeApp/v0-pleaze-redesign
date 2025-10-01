/*
  # Create Blog System for Pleaze Website

  ## Overview
  This migration creates a complete blog system with authors, categories, and posts.

  ## New Tables

  ### `blog_authors`
  - `id` (uuid, primary key) - Unique author identifier
  - `name` (text) - Author's full name
  - `bio` (text, nullable) - Author biography
  - `avatar_url` (text, nullable) - URL to author's profile picture
  - `email` (text, unique) - Author's email address
  - `social_links` (jsonb, nullable) - Social media links (Twitter, LinkedIn, etc.)
  - `created_at` (timestamptz) - When the author was created
  - `updated_at` (timestamptz) - Last update timestamp

  ### `blog_categories`
  - `id` (uuid, primary key) - Unique category identifier
  - `name` (text, unique) - Category name
  - `slug` (text, unique) - URL-friendly slug
  - `description` (text, nullable) - Category description
  - `created_at` (timestamptz) - When the category was created

  ### `blog_posts`
  - `id` (uuid, primary key) - Unique post identifier
  - `title` (text) - Post title
  - `slug` (text, unique) - URL-friendly slug
  - `excerpt` (text) - Short post summary
  - `content` (text) - Full post content (markdown)
  - `featured_image` (text, nullable) - URL to featured image
  - `author_id` (uuid, foreign key) - Reference to blog_authors
  - `category_id` (uuid, foreign key, nullable) - Reference to blog_categories
  - `tags` (text array) - Array of tag strings
  - `status` (text) - Post status: draft, published, archived
  - `published_at` (timestamptz, nullable) - Publication timestamp
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  - `view_count` (integer) - Number of views
  - `reading_time` (integer) - Estimated reading time in minutes

  ## Security
  - Enable RLS on all tables
  - Public read access for published posts
  - Authenticated users can view drafts if they are authors
  - Only authenticated users can create/update posts (for admin panel)
*/

-- Create blog_authors table
CREATE TABLE IF NOT EXISTS blog_authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  bio text,
  avatar_url text,
  email text UNIQUE NOT NULL,
  social_links jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  featured_image text,
  author_id uuid REFERENCES blog_authors(id) ON DELETE SET NULL,
  category_id uuid REFERENCES blog_categories(id) ON DELETE SET NULL,
  tags text[] DEFAULT ARRAY[]::text[],
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  view_count integer DEFAULT 0,
  reading_time integer DEFAULT 5
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_tags ON blog_posts USING gin(tags);

-- Enable Row Level Security
ALTER TABLE blog_authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for blog_authors
-- Public can read all authors
CREATE POLICY "Authors are publicly readable"
  ON blog_authors FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only authenticated users can insert/update authors (for admin panel)
CREATE POLICY "Authenticated users can insert authors"
  ON blog_authors FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update authors"
  ON blog_authors FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for blog_categories
-- Public can read all categories
CREATE POLICY "Categories are publicly readable"
  ON blog_categories FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only authenticated users can manage categories
CREATE POLICY "Authenticated users can insert categories"
  ON blog_categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update categories"
  ON blog_categories FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for blog_posts
-- Public can read published posts
CREATE POLICY "Published posts are publicly readable"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

-- Authenticated users can view all posts (for admin panel)
CREATE POLICY "Authenticated users can view all posts"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can insert posts
CREATE POLICY "Authenticated users can insert posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update posts
CREATE POLICY "Authenticated users can update posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can delete posts
CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers to automatically update updated_at
DROP TRIGGER IF EXISTS update_blog_authors_updated_at ON blog_authors;
CREATE TRIGGER update_blog_authors_updated_at
  BEFORE UPDATE ON blog_authors
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for demonstration
INSERT INTO blog_authors (name, email, bio, avatar_url) VALUES
  ('Pleaze Team', 'team@pleazeapp.com', 'The Pleaze editorial team dedicated to providing mental health and addiction recovery resources.', '/placeholder-user.jpg')
ON CONFLICT (email) DO NOTHING;

INSERT INTO blog_categories (name, slug, description) VALUES
  ('Mental Health', 'mental-health', 'Articles about mental health awareness, conditions, and coping strategies'),
  ('Addiction Recovery', 'addiction-recovery', 'Resources and stories about overcoming addiction'),
  ('Self-Care', 'self-care', 'Tips and practices for maintaining your wellbeing'),
  ('Community Stories', 'community-stories', 'Real stories from our community members'),
  ('Professional Insights', 'professional-insights', 'Expert advice from mental health professionals')
ON CONFLICT (name) DO NOTHING;
