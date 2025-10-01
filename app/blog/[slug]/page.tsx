import PageLayout from "@/components/layout/page-layout"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getBlogPostBySlug } from "@/lib/supabase"
import { generateMetadata as generateSEOMetadata, generateArticleSchema } from "@/lib/seo"
import { notFound } from "next/navigation"

export const revalidate = 3600

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return generateSEOMetadata({
      title: "Post Not Found",
      description: "The blog post you're looking for could not be found.",
    })
  }

  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.featured_image || undefined,
    type: "article",
    publishedTime: post.published_at || post.created_at,
    modifiedTime: post.updated_at,
    authors: post.author ? [post.author.name] : undefined,
  })
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: post.featured_image || "/hero-section-screenshot-new.png",
    datePublished: post.published_at || post.created_at,
    dateModified: post.updated_at,
    authorName: post.author?.name || "Pleaze Team",
  })

  return (
    <PageLayout headerVariant="simple">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center text-[#17335F] hover:text-[#788ED4] transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            {/* Category Badge */}
            {post.category && (
              <div className="mb-4">
                <Badge className="bg-[#67D8AF] text-white">
                  {post.category.name}
                </Badge>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#17335F] mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-8 border-b">
              {post.author && (
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#67D8AF] rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-medium">
                      {post.author.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-[#17335F]">{post.author.name}</p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">
                  {new Date(post.published_at || post.created_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{post.reading_time} min read</span>
              </div>
            </div>

            {/* Featured Image */}
            {post.featured_image && (
              <div className="relative w-full h-96 my-12 rounded-2xl overflow-hidden">
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-[#17335F] prose-a:text-[#67D8AF] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#17335F] prose-blockquote:border-l-[#67D8AF] prose-blockquote:text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold text-[#17335F] mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            {post.author && post.author.bio && (
              <div className="mt-12 pt-8 border-t">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-[#67D8AF] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl font-medium">
                        {post.author.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#17335F] mb-2">
                        About {post.author.name}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{post.author.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Need Support Right Now?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Download Pleaze to access instant help, resources, and a supportive community.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              >
                <Image
                  src="/assets/mobile-play-store-badge.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={70}
                  className="rounded-xl hover:opacity-95 transition-all duration-300 cursor-pointer drop-shadow-2xl"
                  style={{ width: "200px", height: "70px", objectFit: "fill" }}
                />
              </Link>
              <Link
                href="https://apps.apple.com/ie/app/pleaze-mental-health-help/id6502616534"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              >
                <Image
                  src="/assets/mobile-app-store-badge.png"
                  alt="Download on the App Store"
                  width={200}
                  height={70}
                  className="rounded-xl hover:opacity-95 transition-all duration-300 cursor-pointer drop-shadow-2xl"
                  style={{ width: "200px", height: "70px", objectFit: "fill" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
