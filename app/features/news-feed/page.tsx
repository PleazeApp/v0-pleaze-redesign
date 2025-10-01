import PageLayout from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Newspaper, Heart, ThumbsUp, MessageCircle, Share2, Bookmark, CheckCircle, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NewsFeedPage() {
  return (
    <PageLayout headerVariant="simple">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-10">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mx-auto">
              Stay Informed
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">News Feed</h1>
            <p className="text-2xl lg:text-3xl text-white/90 font-medium">
              Your Daily Dose of Hope, Positivity & Information
            </p>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about mental health and addiction recovery, curated and delivered to your fingertips.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Stop Searching Endlessly for Answers</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Throughout developing this app and refining features, I was in a terrible place mentally. Many times a day, countless in my lifetime, I spent hours searching online for answers and information.
              </p>
              <Card className="border-0 shadow-lg bg-gradient-to-r from-[#FF245F]/5 to-[#FF245F]/10">
                <CardContent className="p-8">
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    "I knew what I needed: a single place where I could find reliable information, real stories, and hope. Not scattered across hundreds of websites, but all in one trusted feed."
                  </p>
                  <p className="text-[#17335F] font-semibold mt-4">— James Lewis, Founder</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">What You'll Find in Your Feed</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated content designed to inform, inspire, and support your journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#FF245F] rounded-full flex items-center justify-center mx-auto">
                  <Newspaper className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Articles & Insights</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expert-written articles covering mental health, addiction recovery, coping strategies, and wellness tips.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#67D8AF] rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Real Stories</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Authentic recovery stories from people who've been there. Find hope in knowing you're not alone.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#788ED4] rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Latest Research</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stay updated on breakthrough treatments, studies, and developments in mental health care.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pleaze-news-feed-features-twWs7ATqX05p0RzCGuK8IOYVnabTnm.png"
                  alt="Pleaze News Feed interface"
                  width={800}
                  height={600}
                  className="drop-shadow-2xl rounded-2xl"
                />
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#FF245F] rounded-2xl flex items-center justify-center">
                    <Newspaper className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Interactive & Engaging</h2>
                </div>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    The Pleaze news feed isn't just about reading—it's about engaging with content that matters to you. Like, comment, save, and share articles that resonate.
                  </p>
                  <p>
                    See what the community is finding helpful. Trending topics show you what others in recovery are reading and discussing right now.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Like and save articles for later reference
                  </div>
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Share helpful content with your support network
                  </div>
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Request topics you want to learn more about
                  </div>
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Discover trending content from the community
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Why Our News Feed Matters</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More than just articles—it's your trusted resource for recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#D28FF2]/5 to-[#D28FF2]/10">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-[#D28FF2] rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#17335F]">Verified & Trusted</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every article is reviewed for accuracy and helpfulness. No misinformation, just reliable content you can trust.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#FFF6A6]/20 to-[#FFF6A6]/30">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-[#FFF6A6] rounded-full flex items-center justify-center">
                  <ThumbsUp className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-[#17335F]">Daily Updates</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fresh content added regularly. Always something new to learn, a story to inspire, or a resource to explore.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#61EDEA]/20 to-[#61EDEA]/30">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-[#61EDEA] rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-[#17335F]">Request Content</h3>
                <p className="text-gray-700 leading-relaxed">
                  Have a question or topic you want covered? Request it directly through the app, and we'll create content based on community needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#67D8AF]/10 to-[#67D8AF]/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-[#67D8AF] rounded-full flex items-center justify-center">
                  <Bookmark className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#17335F]">Personalized Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  Save articles, follow topics you care about, and build your own library of helpful resources over time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Ready to Stay Informed and Inspired?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Download Pleaze now and get access to a curated feed of mental health and addiction recovery content designed for you.
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

            <div className="pt-8">
              <Link href="/features">
                <Button
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-4 rounded-xl transition-all duration-300 min-h-[44px] text-base font-medium"
                >
                  Explore More Features <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
