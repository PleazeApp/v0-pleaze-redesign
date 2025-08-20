"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Shield, Target, Eye, Award, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Simple version for inner pages */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/pleaze-logo-new.png"
                alt="Pleaze Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#17335F] to-[#788ED4] bg-clip-text text-transparent">
                Pleaze
              </span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-[#17335F] hover:text-[#788ED4] transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-[#17335F] hover:text-[#788ED4] transition-colors">
                Features
              </Link>
              <Link href="/contact" className="text-[#17335F] hover:text-[#788ED4] transition-colors">
                Contact
              </Link>
            </nav>

            <Button className="bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 min-h-[44px]">
              Download App
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-10">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mx-auto">Our Story</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">About Us</h1>
            <p className="text-2xl lg:text-3xl text-white/90 font-medium">We Won't Stop Until We Make a Difference.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Meet the Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Pleaze, united by lived experience and a shared mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* James Lewis */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden">
                  <Image
                    src="/images/james-lewis-founder-headshot.png"
                    alt="James Lewis - CEO & Founder"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#17335F]">James Lewis</h3>
                  <p className="text-[#788ED4] font-medium">CEO & Founder</p>
                  <p className="text-gray-600 leading-relaxed">
                    Founder with lived experience in mental health and addiction recovery. Passionate about turning pain
                    into purpose.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Oliver Zimmerman */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden">
                  <Image
                    src="/images/oliver-zimmerman-founder-headershot.png"
                    alt="Oliver Zimmerman - CTO"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#17335F]">Oliver Zimmerman</h3>
                  <p className="text-[#788ED4] font-medium">CTO</p>
                  <p className="text-gray-600 leading-relaxed">
                    Technical leader dedicated to building secure, accessible technology that makes mental health
                    support available to everyone.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Founder's Story */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Our Founder's Story</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    For as long as I can remember, I've always struggled with my mental health. When I got my first
                    taste of alcohol at an early age, I knew it was going to be a problem. Over time, both progressed
                    rapidly and increasingly worse.
                  </p>
                  <p>
                    I am a recovered chronic alcoholic, addict, and compulsive gambler but I am not limited to these
                    addictions. As I say, if you gave me a few sticks and stones, I'd find a way to become addicted.
                    Between many interventions and treatments, I have relapsed again and again. What's the result?
                    Complete chaos. Along with hurting those around me.
                  </p>
                  <p>
                    I've been diagnosed with quite a variety of mental illnesses throughout my life. Although experts
                    have had contradicting opinions, one thing is for sure, I have suffered extremely.
                  </p>
                  <p>
                    I've had multiple attempts to end my life. The truth is, I'm not sure why or how I am here today.
                  </p>
                  <p>
                    Due to this endless and painful struggle, I have become obsessed with doing whatever it takes to
                    help even that one person. This app has given meaning to my confusing existence. I won't stop until
                    I have given all I have to make a difference.
                  </p>
                  <p className="text-[#17335F] font-semibold text-xl">
                    Fortunately, today I am in recovery and do not suffer anymore with my mental health.
                  </p>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/our-founders-story.jpeg"
                    alt="James Lewis during his recovery journey"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Idea to Dream */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-white p-8 flex items-center justify-center">
                  <Image
                    src="/images/from-idea-dream.png"
                    alt="Social Entrepreneurs Ireland - Ideas Academy"
                    width={500}
                    height={500}
                    className="w-full h-auto max-w-md"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">From Idea to Dream</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    I'll never forget the day the idea came to me. Not just because I was ready to take my life, but
                    because of the hope that filled the enormous void. Having no reason to be here had transformed into
                    a dream. A dream of making change. From that point until today, I never looked back. I swore to
                    myself that no matter what happened, I wouldn't end my life until this app was in another person's
                    hand.
                  </p>
                  <p>
                    I had no clue how to make this happen but knew I would, even if it took a lifetime. I started
                    telling people about the idea when I was admitted to a psychiatric hospital the next day. The
                    nurses, psychologists and more importantly the patients, loved the idea. I began emailing anyone I
                    could think of for help.
                  </p>
                  <p className="text-[#17335F] font-semibold text-xl">
                    Enter Social Entrepreneurs Ireland – an organisation that not only believed in Pleaze but me as a
                    person. I was accepted into the Ideas Academy in 2021 and began exploring how I was going to make
                    this a reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crowdfunding Campaign Success */}
      <section className="py-20 bg-gradient-to-br from-[#17335F] to-[#788ED4]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#67D8AF] rounded-2xl flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold">Crowdfunding Campaign Success on Indiegogo</h2>
                </div>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    In October 2022, We launched a crowdfunding campaign on Indiegogo. 70 generous people backed us and
                    we raised €2,650!
                  </p>
                  <p>
                    As you can probably tell, it has been a while since I came up with this idea, a little over 3 years.
                    I've battled in these years horrifically. Pondering whether to give up or not and I was scared that
                    if this failed, I wouldn't have a reason to live.
                  </p>
                  <p>
                    With all that said, I've never been better. I am in a space to do this. I am ready to take Pleaze
                    where it needs to go. I sincerely hope you get something from this app, even if it is just hope. I
                    am always here for anyone, there isn't much I haven't seen or heard so don't be shy. If you need
                    anything, I don't care how big or small… I'm just a message away.
                  </p>
                  <div className="space-y-2 pt-4">
                    <p className="text-xl font-medium">With never-ending love,</p>
                    <p className="text-2xl font-bold text-[#67D8AF]">James Lewis.</p>
                  </div>
                </div>

                <div className="pt-8">
                  <Button className="bg-[#67D8AF] hover:bg-white hover:text-[#17335F] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px] text-base font-medium">
                    Contact James <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Stats/Visual */}
              <div className="relative order-1 lg:order-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold">Campaign Success</h3>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-[#67D8AF]">70</div>
                        <div className="text-sm opacity-90">Generous Backers</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-[#67D8AF]">€2,650</div>
                        <div className="text-sm opacity-90">Raised</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-[#67D8AF]">3+ Years</div>
                      <div className="text-sm opacity-90">From Idea to Reality</div>
                    </div>
                    <div className="pt-4">
                      <Badge className="bg-[#67D8AF] text-white border-none">October 2022</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-32">
            {/* Mission & Vision - Side by Side */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Our Mission */}
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-[#D28FF2] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Our Mission</h2>
                </div>
                <div className="bg-gradient-to-br from-[#D28FF2]/5 to-[#D28FF2]/10 rounded-2xl p-8">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    At Pleaze, our mission is simple but powerful: To provide a safe, supportive, and stigma-free space
                    for anyone affected by mental health challenges or addiction, empowering individuals, families, and
                    professionals with tools, resources, and hope.
                  </p>
                </div>
              </div>

              {/* Our Vision */}
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-[#FFF6A6] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Eye className="h-10 w-10 text-black" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Our Vision</h2>
                </div>
                <div className="bg-gradient-to-br from-[#FFF6A6]/20 to-[#FFF6A6]/30 rounded-2xl p-8">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    We envision a world where mental health support is as accessible and natural as checking your phone.
                    A world where asking for help is no longer intimidating, where stigma has no power, and where no one
                    feels alone in their struggle.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="space-y-16">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center space-x-6">
                  <div className="w-20 h-20 bg-[#FF245F] rounded-2xl flex items-center justify-center">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Our Values</h2>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  These core values guide everything we do at Pleaze, from product development to community support
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Empathy First */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-[#D28FF2]/5">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-[#D28FF2] rounded-full flex items-center justify-center mx-auto">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-[#17335F]">Empathy First</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We listen without judgment and design every feature with compassion.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Lived Experience */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-[#FFF6A6]/20">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-[#FFF6A6] rounded-full flex items-center justify-center mx-auto">
                      <Users className="h-8 w-8 text-black" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-[#17335F]">Lived Experience</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Pleaze was built by people who have been there. We understand because we've lived it.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Community Over Isolation */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-[#61EDEA]/20">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-[#61EDEA] rounded-full flex items-center justify-center mx-auto">
                      <Users className="h-8 w-8 text-black" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-[#17335F]">Community Over Isolation</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We believe healing happens when people connect and support one another.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Accessibility */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-[#67D8AF]/10">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-[#67D8AF] rounded-full flex items-center justify-center mx-auto">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-[#17335F]">Accessibility</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Mental health and Addiction help should be available to everyone, regardless of location,
                        background, or finances.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Persistence */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-[#FF245F]/10">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-[#FF245F] rounded-full flex items-center justify-center mx-auto">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-[#17335F]">Persistence</h3>
                      <p className="text-gray-600 leading-relaxed">We don't give up on people. Ever.</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Uncompromising Privacy & Data Security */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-[#788ED4]/10">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-[#788ED4] rounded-full flex items-center justify-center mx-auto">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-[#17335F]">Uncompromising Privacy & Data Security</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We treat your privacy with the same care we give to our own data. From encrypted communications
                        to strict data protection policies, your trust is never taken for granted.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <div className="flex items-center justify-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#17335F] to-[#788ED4] rounded-2xl flex items-center justify-center">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Our Commitment</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We pledge to uphold these commitments as we continue to grow and serve our community
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-[#67D8AF] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">✓</span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#17335F]">Free Access</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Keeping Pleaze free for those who need it most, ensuring financial barriers never prevent
                          access to support.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-[#67D8AF] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">✓</span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#17335F]">Community-Driven Development</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Continuously improving our tools based on feedback from our community, ensuring we meet real
                          needs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-[#67D8AF] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">✓</span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#17335F]">Comprehensive Support</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Expanding our support to cover more life challenges, including grief, trauma, and relapse
                          prevention.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-[#67D8AF] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">✓</span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#17335F]">Professional Partnerships</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Partnering with mental health professionals and organisations to ensure everything we offer is
                          credible and effective.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#17335F]/5 to-[#67D8AF]/5 rounded-2xl p-8">
                <p className="text-xl text-gray-700 font-medium mb-6 leading-tight">
                  These commitments aren't just words—they're the foundation of everything we build.
                </p>
                <Button className="bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px] text-base font-medium">
                  Join Our Community <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF] rounded-3xl p-16 text-white overflow-hidden">
            <div className="relative z-10 text-center">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Ready to Join Our Mission?</h3>
              <p className="text-xl lg:text-2xl mb-12 opacity-95 max-w-4xl mx-auto leading-relaxed">
                Download Pleaze today and become part of a community that believes in turning pain into purpose
              </p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
                >
                  <div className="relative">
                    <Image
                      src="/assets/mobile-play-store-badge.png"
                      alt="Get it on Google Play"
                      width={200}
                      height={70}
                      className="rounded-xl hover:opacity-95 transition-all duration-300 cursor-pointer drop-shadow-2xl group-hover:drop-shadow-3xl"
                      style={{ width: "200px", height: "70px", objectFit: "fill" }}
                    />
                    <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
                <Link
                  href="https://apps.apple.com/ie/app/pleaze-mental-health-help/id6502616534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
                >
                  <div className="relative">
                    <Image
                      src="/assets/mobile-app-store-badge.png"
                      alt="Download on the App Store"
                      width={200}
                      height={70}
                      className="rounded-xl hover:opacity-95 transition-all duration-300 cursor-pointer drop-shadow-2xl group-hover:drop-shadow-3xl"
                      style={{ width: "200px", height: "70px", objectFit: "fill" }}
                    />
                    <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm font-medium">Trusted & Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#17335F] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/assets/pleaze-logo-new.png"
                  alt="Pleaze Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold">Pleaze</span>
              </div>
              <p className="text-white/80">The go-to app for Mental Health and Addiction support.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Download</h4>
              <div className="space-y-4">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
                >
                  <Image
                    src="/assets/mobile-play-store-badge.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={60}
                    className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer hover:scale-105 transition-all duration-300"
                    style={{ width: "180px", height: "60px", objectFit: "fill" }}
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/ie/app/pleaze-mental-health-help/id6502616534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
                >
                  <Image
                    src="/assets/mobile-app-store-badge.png"
                    alt="Download on the App Store"
                    width={180}
                    height={60}
                    className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer hover:scale-105 transition-all duration-300"
                    style={{ width: "180px", height: "60px", objectFit: "fill" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; {currentYear} Pleaze. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
