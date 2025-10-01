import PageLayout from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Heart, Target, TrendingUp, FileText, CircleCheck as CheckCircle, ArrowRight, Lock, Activity } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PersonalHubPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-10">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mx-auto">
              Your Private Space
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Personal Hub</h1>
            <p className="text-2xl lg:text-3xl text-white/90 font-medium">
              Track, Reflect, and Grow on Your Recovery Journey
            </p>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Your personal hub is a private, secure space for journaling, tracking progress, setting goals, and building your recovery toolkit.
            </p>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Why You Need a Personal Hub</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Recovery isn't linear. Some days are hard, some are easier. But without a way to track your journey, it's easy to lose sight of how far you've come.
              </p>
              <Card className="border-0 shadow-lg bg-gradient-to-r from-[#67D8AF]/5 to-[#67D8AF]/10">
                <CardContent className="p-8">
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    "I built the Personal Hub because I needed a place to privately document my thoughts, track my progress, and reflect on what was working. A place that was just mine."
                  </p>
                  <p className="text-[#17335F] font-semibold mt-4">— James Lewis, Founder</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">What's Inside Your Hub</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to take control of your recovery journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-[#D28FF2] rounded-2xl flex items-center justify-center">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Private Journaling</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Write freely about your thoughts, struggles, and victories. Your entries are completely private and encrypted.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-[#FF245F] rounded-2xl flex items-center justify-center">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Mood Tracking</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Log your daily mood and emotions. Over time, identify patterns and triggers that affect your mental health.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-[#67D8AF] rounded-2xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Goal Setting</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Set personal recovery goals and track your progress. Celebrate milestones and adjust as needed.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-[#FFF6A6] rounded-2xl flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-black" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Sobriety Counter</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Track days, weeks, and months of sobriety. Celebrate each milestone in your recovery journey.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-[#788ED4] rounded-2xl flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Coping Toolkit</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Build your personal library of coping strategies, inspirational quotes, and resources that help you.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-[#61EDEA] rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-black" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Progress Insights</h3>
                  <p className="text-gray-600 leading-relaxed">
                    View visual charts and trends of your mood, habits, and overall progress over time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#67D8AF] rounded-2xl flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Made for You, By Someone Who Gets It</h2>
                </div>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    The Personal Hub was designed based on real experience with mental health struggles and addiction recovery. It's not just features—it's tools that actually help.
                  </p>
                  <p>
                    Everything is private and encrypted. No one sees your journal entries, mood logs, or personal goals. Not even us. This is your safe space.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Completely private and encrypted
                  </div>
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Track multiple aspects of recovery in one place
                  </div>
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    See your progress visualized over time
                  </div>
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Build your personalized coping toolkit
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pleaze-personal-hub-feature-YXmNvhSMqDj7HHVNGSdQw6PzFIRkYf.png"
                  alt="Pleaze Personal Hub interface"
                  width={800}
                  height={600}
                  className="drop-shadow-2xl rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-[#17335F]/5 to-[#67D8AF]/5">
              <CardContent className="p-12 text-center space-y-8">
                <div className="w-20 h-20 bg-[#17335F] rounded-full flex items-center justify-center mx-auto">
                  <Lock className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#17335F]">Your Privacy is Sacred</h2>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Your Personal Hub is end-to-end encrypted. Everything you write, track, and save is completely private. Even Pleaze cannot access your personal data. It's yours alone.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 pt-4">
                    <div className="flex items-center text-[#67D8AF] font-medium">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      End-to-End Encrypted
                    </div>
                    <div className="flex items-center text-[#67D8AF] font-medium">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      GDPR Compliant
                    </div>
                    <div className="flex items-center text-[#67D8AF] font-medium">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      You Control Your Data
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Ready to Take Control of Your Journey?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Download Pleaze now and create your Personal Hub. Start tracking your progress, building your toolkit, and celebrating your victories.
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
