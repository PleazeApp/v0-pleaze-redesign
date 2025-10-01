import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string | null
  author_id: string
  category_id: string | null
  tags: string[]
  status: "draft" | "published" | "archived"
  published_at: string | null
  created_at: string
  updated_at: string
  view_count: number
  reading_time: number
  author?: BlogAuthor
  category?: BlogCategory
}

export interface BlogAuthor {
  id: string
  name: string
  bio: string | null
  avatar_url: string | null
  email: string
  social_links: Record<string, string> | null
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string | null
}

export async function getBlogPosts(limit = 10, offset = 0) {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(`
        *,
        author:blog_authors(*),
        category:blog_categories(*)
      `)
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      console.error("Error fetching blog posts:", error)
      return []
    }
    return (data as BlogPost[]) || []
  } catch (error) {
    console.error("Error connecting to Supabase:", error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(`
        *,
        author:blog_authors(*),
        category:blog_categories(*)
      `)
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle()

    if (error) {
      console.error("Error fetching blog post:", error)
      return null
    }
    return data as BlogPost | null
  } catch (error) {
    console.error("Error connecting to Supabase:", error)
    return null
  }
}

export async function getBlogCategories() {
  try {
    const { data, error } = await supabase
      .from("blog_categories")
      .select("*")
      .order("name")

    if (error) {
      console.error("Error fetching blog categories:", error)
      return []
    }
    return (data as BlogCategory[]) || []
  } catch (error) {
    console.error("Error connecting to Supabase:", error)
    return []
  }
}

export async function incrementPostViewCount(postId: string) {
  const { error } = await supabase.rpc("increment_post_views", { post_id: postId })
  if (error) console.error("Error incrementing view count:", error)
}
