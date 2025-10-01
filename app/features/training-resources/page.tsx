import PageLayout from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Users, BookOpen, CheckCircle, ArrowRight, Star, TrendingUp, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TrainingResourcesPage() {
  return (
    <PageLayout headerVariant="simple">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-10">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mx-auto">
              Education & Growth
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Training Resources</h1>
            <p className="text-2xl lg:text-3xl text-white/90 font-medium">
              Learn, Grow, and Become a Certified Peer Supporter
            </p>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Access free courses and training materials to understand mental health, support others, and earn badges as you complete your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Turn Your Experience Into Strength</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                You've been through struggles. You've survived. Now, what if you could use that experience to help others who are where you once were?
              </p>
              <Card className="border-0 shadow-lg bg-gradient-to-r from-[#788ED4]/5 to-[#788ED4]/10">
                <CardContent className="p-8">
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    "I wanted to help others, but I didn't know where to start. The Training Resources gave me the knowledge and confidence to become a peer supporter. Now I'm making a real difference."
                  </p>
                  <p className="text-[#17335F] font-semibold mt-4">— Sarah M., Certified Peer Supporter</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">What You'll Learn</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive training covering mental health, addiction recovery, and peer support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-[#D28FF2] rounded-2xl flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Mental Health Basics</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Understanding mental health conditions, symptoms, treatments, and how to recognize when someone needs help.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-[#FF245F] rounded-2xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Addiction Recovery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Learn about addiction, recovery pathways, relapse prevention, and how to support someone in recovery.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-[#67D8AF] rounded-2xl flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Peer Support Skills</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Master active listening, empathy, boundary-setting, and crisis intervention techniques.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-[#FFF6A6] rounded-2xl flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-black" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Crisis Management</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Learn how to respond effectively to mental health crises and when to involve professional help.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-[#788ED4] rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Self-Care for Supporters</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Prevent burnout by learning essential self-care practices and maintaining healthy boundaries.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-[#61EDEA] rounded-2xl flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-black" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#17335F]">Certification Path</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Complete courses, pass assessments, and earn your Peer Supporter certification badge.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pleaze-training-resources-feature-6S2VqNH0f8kLpnvOIWOYuKG9fzj3Pn.png"
                  alt="Pleaze Training Resources interface"
                  width={800}
                  height={600}
                  className="drop-shadow-2xl rounded-2xl"
                />
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#D28FF2] rounded-2xl flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Learn at Your Own Pace</h2>
                </div>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    All training resources are free, accessible 24/7, and designed to fit your schedule. Watch videos, read materials, and complete quizzes whenever works for you.
                  </p>
                  <p>
                    Track your progress with our badge system. As you complete modules, earn badges that showcase your growing expertise and dedication to helping others.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    100% free training materials
                  </div>
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Learn at your own pace, anytime
                  </div>
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Earn certification badges
                  </div>
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Designed by mental health professionals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badge System */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Earn Your Badges</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcase your achievements as you progress through training
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#D28FF2]/10 to-[#D28FF2]/20">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-[#D28FF2] rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#17335F]">Beginner</h3>
                <p className="text-gray-600 text-sm">Complete first 3 modules</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#FF245F]/10 to-[#FF245F]/20">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-[#FF245F] rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#17335F]">Intermediate</h3>
                <p className="text-gray-600 text-sm">Complete 6 modules</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#67D8AF]/10 to-[#67D8AF]/20">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-[#67D8AF] rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#17335F]">Advanced</h3>
                <p className="text-gray-600 text-sm">Complete 10 modules</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#788ED4]/10 to-[#788ED4]/20">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-[#788ED4] rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#17335F]">Certified</h3>
                <p className="text-gray-600 text-sm">Complete all & pass exam</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Ready to Start Your Training Journey?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Download Pleaze now and access free training resources. Learn, grow, and become a certified peer supporter.
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
