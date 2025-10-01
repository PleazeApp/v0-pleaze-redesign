"use client"

import PageLayout from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, BookOpen, Newspaper, User, ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function FeaturesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <PageLayout>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32 z-10">
          <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mx-auto">Our Features</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Features</h1>
            <p className="text-2xl lg:text-3xl text-white/90 font-medium">Explore what Pleaze has to offer for you!</p>
          </div>
        </div>
      </section>

      {/* Help Buttons Feature */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#D28FF2] rounded-2xl flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Help Buttons</h2>
                </div>
                <p className="text-2xl text-[#788ED4] font-medium">Get Help Instantly, Without Saying a Word</p>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Originally, the Pleaze help buttons were the only feature of the app. Upon downloading the app the
                    user creates a group or multiple with their friends, family or professionals.
                  </p>
                  <p>
                    Once the user presses one of these buttons, there is a vibrating message (similar to an alarm) sent
                    to the intended group while the user is brought to a breathing simulator to calm them. The group
                    will also be notified once someone has responded.
                  </p>
                </div>
                <div>
                  <Button
                    asChild
                    className="bg-[#D28FF2] hover:bg-[#17335F] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px] text-base font-medium"
                  >
                    <Link href="/features/help-buttons">
                      Learn More About Help Buttons <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Help Buttons Screenshot */}
              <div className="relative">
                <div className="flex justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pleaze-help-buttons-feature-0JyB1tXQ58woCOgHQ3Cf7pscXlRipx.png"
                    alt="Pleaze Help Buttons feature showing addiction and mental health support options"
                    width={1400}
                    height={1000}
                    className="drop-shadow-2xl rounded-2xl w-full h-auto min-w-[600px] max-w-[1000px]"
                    style={{ width: "100%", height: "auto", minWidth: "600px", maxWidth: "1000px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Resources Feature */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Training Resources Screenshot */}
              <div className="relative order-2 lg:order-1">
                <div className="flex justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pleaze-training-resources-O2ifyHBkXnOrKo7FF6zC9X97smyqJu.png"
                    alt="Pleaze Training Resources showing completion certificates for suicide and addiction training"
                    width={1400}
                    height={1000}
                    className="drop-shadow-2xl rounded-2xl w-full h-auto min-w-[600px] max-w-[1000px]"
                    style={{ width: "100%", height: "auto", minWidth: "600px", maxWidth: "1000px" }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#FFF6A6] rounded-2xl flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-black" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Training Resources</h2>
                </div>
                <p className="text-2xl text-[#788ED4] font-medium">Know How to Help, When It Matters Most</p>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Throughout my life, I quickly realised how much people didn't know how to help me at all. The
                    majority of people didn't understand me either.
                  </p>
                  <p>
                    The Pleaze app support resources is how we give the power back to the people. Instead of relying on
                    existing services, we want to educate people on how they can help.
                  </p>
                  <p>
                    We do this by giving Pleaze addiction and mental health prevention support badges which they can
                    share on social media. The user must complete a quiz/test in order to obtain the badge.
                  </p>
                </div>
                <div>
                  <Button
                    asChild
                    className="bg-[#FFF6A6] hover:bg-[#17335F] text-black hover:text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px] text-base font-medium"
                  >
                    <Link href="/features/training-resources">
                      Learn More About Training Resources <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Feed Feature */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#FF245F] rounded-2xl flex items-center justify-center">
                    <Newspaper className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">News Feed</h2>
                </div>
                <p className="text-2xl text-[#788ED4] font-medium">Your Daily Dose of Hope, Positivity & Information</p>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Throughout developing this app and refining features, I was in a terrible place mentally. Many times
                    a day (countless in my lifetime), I have spent hours searching online for answers and information.
                  </p>
                  <p>
                    One of Pleaze's features is a news feed. This news feed is for everything mental health and
                    addiction, this could be videos, pictures, articles, stories. Your daily dose of hope, positivity
                    and information.
                  </p>
                  <p>The user can also request information they would like to see.</p>
                </div>
                <div>
                  <Button
                    asChild
                    className="bg-[#FF245F] hover:bg-[#17335F] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px] text-base font-medium"
                  >
                    <Link href="/features/news-feed">
                      Learn More About News Feed <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* News Feed Screenshot */}
              <div className="relative">
                <div className="flex justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pleaze-news-feed-features-twWs7ATqX05p0RzCGuK8IOYVnabTnm.png"
                    alt="Pleaze News Feed showing articles about mental health and addiction with interactive feedback options"
                    width={1400}
                    height={1000}
                    className="drop-shadow-2xl rounded-2xl w-full h-auto min-w-[600px] max-w-[1000px]"
                    style={{ width: "100%", height: "auto", minWidth: "600px", maxWidth: "1000px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Hub Feature */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Personal Hub Screenshot */}
              <div className="relative order-2 lg:order-1">
                <div className="flex justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pleaze-personal-hub-features-gPkm5kZyzLCXbeFS8XO4Ho0ZlAzUNW.png"
                    alt="Pleaze Personal Hub showing profile, help card, guided journal, and private chat features"
                    width={1400}
                    height={1000}
                    className="drop-shadow-2xl rounded-2xl w-full h-auto min-w-[600px] max-w-[1000px]"
                    style={{ width: "100%", height: "auto", minWidth: "600px", maxWidth: "1000px" }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#61EDEA] rounded-2xl flex items-center justify-center">
                    <User className="h-8 w-8 text-black" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Personal Hub</h2>
                </div>
                <p className="text-2xl text-[#788ED4] font-medium">
                  Your Private Space to Reflect, Prepare, and Connect
                </p>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Help us help you, with the Pleaze help card. Users can edit information such as warning signs,
                    triggers and many more.
                  </p>
                  <p>
                    Use our guided journal to help you deal with the past, present and future. Customise your own coping
                    toolbox and access a private chat for a safe place to talk.
                  </p>
                </div>
                <div>
                  <Button
                    asChild
                    className="bg-[#61EDEA] hover:bg-[#17335F] text-black hover:text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px] text-base font-medium"
                  >
                    <Link href="/features/personal-hub">
                      Learn More About Personal Hub <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
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
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Ready to Experience All Features?</h3>
              <p className="text-xl lg:text-2xl mb-12 opacity-95 max-w-4xl mx-auto leading-relaxed">
                Download Pleaze today and discover how our comprehensive suite of features can support your mental
                health and addiction recovery journey.
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold text-[#17335F]">Frequently Asked Questions</h3>
              <p className="text-xl text-gray-600">Get answers to common questions about Pleaze and our features</p>
            </div>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(0)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <h4 className="text-2xl font-bold text-[#17335F] pr-4">What makes you different to other apps?</h4>
                  <ChevronDown
                    className={`h-6 w-6 text-[#17335F] transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === 0 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === 0 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Pleaze is made by the people for the people. What we mean is, that this app is different because
                      it is made by those who are suffering from issues with mental health and addiction. We feel like
                      we truly know what we need in an app to help us.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(1)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <h4 className="text-2xl font-bold text-[#17335F] pr-4">Why is Pleaze important?</h4>
                  <ChevronDown
                    className={`h-6 w-6 text-[#17335F] transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === 1 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Pleaze has been supported by psychiatric nurses, therapists, psychologists, psychiatrists, social
                      entrepreneurs, and everyone we know who suffers from mental health and addiction. Pleaze is
                      important because people need this app to help them.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(2)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <h4 className="text-2xl font-bold text-[#17335F] pr-4">Is Pleaze free to use?</h4>
                  <ChevronDown
                    className={`h-6 w-6 text-[#17335F] transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === 2 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">Yes! Pleaze is totally free to use.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(3)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <h4 className="text-2xl font-bold text-[#17335F] pr-4">Is there going to be more features?</h4>
                  <ChevronDown
                    className={`h-6 w-6 text-[#17335F] transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === 3 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === 3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Pleaze is only the start of something great that the world needs. We are dedicated to helping not
                      only people with mental health and addiction. We have already started working on features for
                      sexual abuse, heartbreak, grief and preventing relapse. Our vision is to be more than just an app.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(4)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <h4 className="text-2xl font-bold text-[#17335F] pr-4">
                    Why wouldn't we just use a messaging app instead of using the Pleaze help buttons?
                  </h4>
                  <ChevronDown
                    className={`h-6 w-6 text-[#17335F] transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === 4 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === 4 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      For those suffering, reaching out for help can be extremely hard and painful. Even typing the
                      words, "I need help" is difficult. It doesn't always have to be for a response, at least someone
                      knows how you are feeling. Most people also forget to check in on their friends or loved ones
                      which is why the check in button is essential.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#17335F]/5 to-[#67D8AF]/5 rounded-2xl p-8">
                <p className="text-xl text-gray-700 mb-6 leading-tight">Have more questions? We're here to help.</p>
                <Button
                  asChild
                  className="bg-[#67D8AF] hover:bg-[#17335F] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px] text-base font-medium"
                >
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}
