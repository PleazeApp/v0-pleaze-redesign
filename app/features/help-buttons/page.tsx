import PageLayout from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Heart, Users, Clock, Bell, CircleCheck as CheckCircle, ArrowRight, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HelpButtonsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-10">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mx-auto">
              Core Feature
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Help Buttons</h1>
            <p className="text-2xl lg:text-3xl text-white/90 font-medium">
              Get Help Instantly, Without Saying a Word
            </p>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              When words fail, a single tap connects you with your support network. Let them know you need help without
              the struggle of explaining.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">How Help Buttons Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple yet powerful feature designed for crisis moments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#D28FF2] rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-[#17335F] text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Create Your Groups</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Set up support groups with family, friends, or professionals who you trust to help you.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-[#FF245F] rounded-full flex items-center justify-center mx-auto">
                  <Bell className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-[#17335F] text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Press When Needed</h3>
                  <p className="text-gray-600 leading-relaxed">
                    One tap sends a vibrating alert to your selected group, letting them know you need help right now.
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
                  <div className="w-8 h-8 bg-[#17335F] text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-[#17335F]">Get Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your support network is notified. They respond and you're guided to a breathing simulator to help calm.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#D28FF2] rounded-2xl flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Why Help Buttons Matter</h2>
                </div>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Originally, the Pleaze help buttons were the only feature of the app. We knew from experience that
                    reaching out during a crisis is incredibly difficult. Sometimes, typing "I need help" feels
                    impossible.
                  </p>
                  <p>
                    That's why we created a solution that removes that barrier entirely. One simple button press, and your
                    support network knows you need them—no words required.
                  </p>
                  <p>
                    The instant someone responds, everyone in the group is notified. You're never left wondering if anyone
                    saw your call for help.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    No need to explain or type when you're struggling
                  </div>
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Instant vibrating alerts ensure your message is noticed
                  </div>
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Everyone knows when someone has responded to help
                  </div>
                  <div className="flex items-center text-[#67D8AF] font-medium">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Integrated breathing exercises help you stay calm while waiting
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pleaze-help-buttons-feature-0JyB1tXQ58woCOgHQ3Cf7pscXlRipx.png"
                  alt="Pleaze Help Buttons interface"
                  width={800}
                  height={600}
                  className="drop-shadow-2xl rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Perfect For Crisis Moments</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help buttons are there when you need support most
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#D28FF2]/5 to-[#D28FF2]/10">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-[#D28FF2] rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#17335F]">Mental Health Crisis</h3>
                <p className="text-gray-700 leading-relaxed">
                  When anxiety, depression, or suicidal thoughts become overwhelming and you can't find the words to ask
                  for help.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#FF245F]/5 to-[#FF245F]/10">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-[#FF245F] rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#17335F]">Addiction Relapse Risk</h3>
                <p className="text-gray-700 leading-relaxed">
                  When cravings become intense or you feel yourself slipping. Reach out to your recovery network instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#67D8AF]/5 to-[#67D8AF]/10">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-[#67D8AF] rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#17335F]">Check-In Requests</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your support network can check in on you. Sometimes knowing someone cares enough to ask makes all the
                  difference.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#788ED4]/5 to-[#788ED4]/10">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-[#788ED4] rounded-full flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#17335F]">Anytime, Anywhere</h3>
                <p className="text-gray-700 leading-relaxed">
                  3 AM, in public, at work—it doesn't matter. Your support network is just one tap away, 24/7.
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
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Ready to Have Support at Your Fingertips?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Download Pleaze now and set up your help buttons. Your support network is waiting to be there for you.
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
