import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Newspaper } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getBlogPosts, getBlogCategories } from "@/lib/supabase"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata = generateSEOMetadata({
  title: "Blog - Mental Health & Addiction Recovery Articles",
  description: "Read the latest articles, stories, and insights on mental health and addiction recovery from the Pleaze community.",
  path: "/blog",
  keywords: ["mental health blog", "addiction recovery articles", "mental wellness", "recovery stories"],
})

export const revalidate = 3600

export default async function BlogPage() {
  const posts = await getBlogPosts(12)
  const categories = await getBlogCategories()

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-10">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mx-auto">
              Mental Health & Recovery
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Pleaze Blog</h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Stories, insights, and resources to support your mental health and recovery journey
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories && categories.length > 0 && (
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/blog">
                <Badge variant="outline" className="text-base py-2 px-4 hover:bg-[#67D8AF] hover:text-white hover:border-[#67D8AF] transition-all cursor-pointer">
                  All Posts
                </Badge>
              </Link>
              {categories.map((category) => (
                <Link key={category.id} href={`/blog/category/${category.slug}`}>
                  <Badge variant="outline" className="text-base py-2 px-4 hover:bg-[#67D8AF] hover:text-white hover:border-[#67D8AF] transition-all cursor-pointer">
                    {category.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                    {post.featured_image && (
                      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={post.featured_image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="p-6 space-y-4">
                      {post.category && (
                        <Badge className="bg-[#67D8AF] text-white">
                          {post.category.name}
                        </Badge>
                      )}
                      <h2 className="text-2xl font-bold text-[#17335F] line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(post.published_at || post.created_at).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.reading_time} min read</span>
                          </div>
                        </div>
                      </div>
                      {post.author && (
                        <div className="flex items-center gap-2 pt-2">
                          <div className="w-8 h-8 bg-[#67D8AF] rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              {post.author.name.charAt(0)}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600">{post.author.name}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Newspaper className="h-20 w-20 text-gray-300 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-[#17335F] mb-4">Coming Soon</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're working on bringing you valuable content about mental health and addiction recovery.
                Check back soon for our latest articles and stories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Get Support in the Pleaze App</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Download Pleaze to access help buttons, personalized resources, and a supportive community.
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
    </>
  )
}
