import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Shield, Users, BookOpen, Phone, MessageCircle, Star, CheckCircle } from "lucide-react"

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/pleaze-logo-new.png"
                alt="Pleaze Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-[#17335F]">Pleaze</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#17335F] transition-colors">
                  <span>Features</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 space-y-3">
                    <Link
                      href="/features/help-buttons"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
                    >
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Help Buttons</div>
                        <div className="text-sm text-gray-500">Instant crisis support</div>
                      </div>
                    </Link>
                    <Link
                      href="/features/training-resources"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Training Resources</div>
                        <div className="text-sm text-gray-500">Learn and grow</div>
                      </div>
                    </Link>
                    <Link
                      href="/features/news-feed"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">News Feed</div>
                        <div className="text-sm text-gray-500">Stories of hope</div>
                      </div>
                    </Link>
                    <Link
                      href="/features/personal-hub"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
                    >
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Personal Hub</div>
                        <div className="text-sm text-gray-500">Your safe space</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#17335F] transition-colors">
                  <span>For You</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    <Link href="/for-individuals" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                      For Individuals
                    </Link>
                    <Link href="/for-loved-ones" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                      For Loved Ones
                    </Link>
                    <Link
                      href="/for-professionals"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      For Professionals
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/about" className="text-gray-700 hover:text-[#17335F] transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#17335F] transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="/download"
                className="bg-[#17335F] text-white px-6 py-2 rounded-full hover:bg-[#17335F]/90 transition-colors"
              >
                Download App
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#17335F] via-[#788ED4] to-[#67D8AF]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pleaze – Your Lifeline in Crisis, Right on Your Phone
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">Free to download on iOS and Android.</p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="https://apps.apple.com/ie/app/pleaze-mental-health-help/id6502616534"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#17335F] px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                <Download className="mr-2 w-5 h-5" />
                App Store
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#17335F] transition-colors inline-flex items-center justify-center"
              >
                <Download className="mr-2 w-5 h-5" />
                Google Play
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-current" />
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>10,000+ Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>100% Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pleaze Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Pleaze? Because every second counts.
            </h2>
            <p className="text-xl text-gray-600">
              Pleaze isn't just another mental health app, it's designed for the moments where you need help most.
              Unlike apps built around mood tracking or meditation streaks, Pleaze prioritises crisis support and
              connection, ensuring that help is just one tap away, even when talking feels impossible.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Pleaze Essential Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Makes Pleaze Essential</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Help Buttons</h3>
              <p className="text-gray-600">
                Instantly alert your trusted network with a single press. When words fail, your Help Button speaks for
                you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resources & Support Badges</h3>
              <p className="text-gray-600">
                Learn essential mental health skills, take short quizzes, and earn shareable badges of support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">News Feed of Hope</h3>
              <p className="text-gray-600">
                Access uplifting stories, articles, and visuals in moments when you need encouragement most.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Hub</h3>
              <p className="text-gray-600">
                Build your Help Card, Guided Journal, Coping Toolbox, and engage in private, safe chats within the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works in 3 Steps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#17335F] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Download the app</h3>
              <p className="text-gray-600">
                Available free on both the App Store and Google Play. No subscription required, no hidden fees.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#788ED4] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Set up your support network</h3>
              <p className="text-gray-600">
                Create groups and set up your personal hub. Add trusted contacts who can respond when you need help.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#67D8AF] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Use Pleaze when it matters</h3>
              <p className="text-gray-600">
                Tap the Help Button, explore resources, and access relief anytime, even in the toughest moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Story Section */}
      <section className="py-20 bg-gradient-to-r from-[#67D8AF]/10 to-[#788ED4]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Your Story, Your Safety</h2>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                Pleaze was built specifically for the toughest moments, not just general well-being. We focus on
                providing support when everything else feels overwhelming.
              </p>
              <p className="text-gray-600">
                Created by people who understand the struggle, Pleaze bridges the gap between crisis and care, ensuring
                you're never truly alone in your darkest moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Download CTA Section */}
      <section className="py-20 bg-[#17335F]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Download Pleaze - Your Support, Just a Tap Away
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're in crisis, rebuilding, or supporting someone else, Pleaze delivers connection, tools, and
              compassion instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="https://apps.apple.com/ie/app/pleaze-mental-health-help/id6502616534"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#17335F] px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                Download on the App Store
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#17335F] transition-colors inline-flex items-center justify-center"
              >
                Get it on Google Play
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/70">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>No Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Privacy Focused</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Crisis Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#17335F] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/assets/pleaze-logo-new.png"
                  alt="Pleaze Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold">Pleaze</span>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                The go-to app for Mental Health and Addiction support. Get the support you deserve with Pleaze.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.pleaze.pleaze_app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src="/assets/mobile-play-store-badge.png"
                    alt="Get it on Google Play"
                    width={140}
                    height={42}
                    className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    style={{ width: "140px", height: "42px", objectFit: "fill" }}
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/ie/app/pleaze-mental-health-help/id6502616534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src="/assets/mobile-app-store-badge.png"
                    alt="Download on the App Store"
                    width={140}
                    height={42}
                    className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    style={{ width: "140px", height: "42px", objectFit: "fill" }}
                  />
                </Link>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    All Features
                  </Link>
                </li>
                <li>
                  <Link href="/features/help-buttons" className="hover:text-white transition-colors">
                    Help Buttons
                  </Link>
                </li>
                <li>
                  <Link href="/features/training-resources" className="hover:text-white transition-colors">
                    Training Resources
                  </Link>
                </li>
                <li>
                  <Link href="/features/news-feed" className="hover:text-white transition-colors">
                    News Feed
                  </Link>
                </li>
                <li>
                  <Link href="/features/personal-hub" className="hover:text-white transition-colors">
                    Personal Hub
                  </Link>
                </li>
              </ul>
            </div>

            {/* For You */}
            <div>
              <h4 className="font-semibold mb-4">For You</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/for-individuals" className="hover:text-white transition-colors">
                    For Individuals
                  </Link>
                </li>
                <li>
                  <Link href="/for-loved-ones" className="hover:text-white transition-colors">
                    For Loved Ones
                  </Link>
                </li>
                <li>
                  <Link href="/for-professionals" className="hover:text-white transition-colors">
                    For Professionals
                  </Link>
                </li>
                <li>
                  <Link href="/resource-hub" className="hover:text-white transition-colors">
                    Resource Hub
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community & Support */}
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/share-your-story" className="hover:text-white transition-colors">
                    Share Your Story
                  </Link>
                </li>
                <li>
                  <Link href="/write-for-us" className="hover:text-white transition-colors">
                    Write for Us
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter" className="hover:text-white transition-colors">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="/ask-jimmy" className="hover:text-white transition-colors">
                    Ask Jimmy
                  </Link>
                </li>
              </ul>

              <h4 className="font-semibold mb-4 mt-6">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="hover:text-white transition-colors">
                    Download
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-6 text-white/80 text-sm mb-4 md:mb-0">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/disclaimers" className="hover:text-white transition-colors">
                  Disclaimers
                </Link>
                <Link href="/sources" className="hover:text-white transition-colors">
                  Sources
                </Link>
              </div>
              <p className="text-white/60 text-sm">© 2024 Pleaze. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
