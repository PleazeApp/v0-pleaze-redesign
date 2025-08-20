import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Shield, Users, BookOpen, Phone, MessageCircle, Clock } from "lucide-react"

export default function ForLovedOnesPage() {
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
              Supporting Someone You Love Through Their Mental Health Journey
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              When someone you care about is struggling, you want to help but don't always know how. Pleaze gives you
              the tools, resources, and support to be there for them—and yourself.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <span className="flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>Family Support Tools</span>
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <span className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Crisis Prevention</span>
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <span className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Community Support</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download"
                className="bg-white text-[#17335F] px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                Download Pleaze Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/features"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#17335F] transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Weight of Loving Someone Who's Struggling
            </h2>
            <p className="text-xl text-gray-600">
              Being a loved one isn't easy. You feel the pain, helplessness, and burnout that comes with watching
              someone you care about struggle with their mental health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Pain You Feel</h3>
              <p className="text-gray-600">
                You hurt when they hurt. Their struggles become your struggles, and you carry the emotional weight of
                their journey alongside your own daily challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Helplessness</h3>
              <p className="text-gray-600">
                You want to fix everything but don't know how. You feel powerless watching them struggle, unsure of what
                to say or do to make things better.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Burnout</h3>
              <p className="text-gray-600">
                Constantly being "on" as a support person is exhausting. You neglect your own needs while trying to be
                everything for someone else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Pleaze Helps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Pleaze Supports You as a Loved One
            </h2>
            <p className="text-xl text-gray-600">
              We understand that supporting someone through mental health challenges affects you too. Pleaze provides
              tools and resources designed specifically for loved ones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Understanding the Struggle</h3>
                  <p className="text-gray-600">
                    Access educational resources that help you understand mental health conditions, treatment options,
                    and how to provide effective support without burning out.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Tools</h3>
                  <p className="text-gray-600">
                    Learn communication strategies, crisis intervention techniques, and how to set healthy boundaries
                    while still being supportive and present.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Care Resources</h3>
                  <p className="text-gray-600">
                    Discover tools and strategies for maintaining your own mental health while supporting someone else.
                    You can't pour from an empty cup.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Community Connection</h3>
                  <p className="text-gray-600">
                    Connect with other loved ones who understand your journey. Share experiences, get advice, and find
                    comfort in knowing you're not alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Self-Care Matters Section */}
      <section className="py-20 bg-gradient-to-r from-[#67D8AF]/10 to-[#788ED4]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Your Well-being Matters Too</h2>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                "You can't support someone else if you're falling apart yourself. Taking care of your own mental health
                isn't selfish—it's essential. When you're strong and healthy, you can be a better support system for the
                person you love."
              </p>
              <p className="text-gray-600 italic">
                Supporting someone through mental health challenges is a marathon, not a sprint. Pleaze helps you pace
                yourself for the long journey ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#17335F]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be the Support They Need—While Taking Care of Yourself
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Download Pleaze today and access the tools, resources, and community support you need to help your loved
              one while maintaining your own well-being.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="https://apps.apple.com/ie/app/pleaze-mental-health-help/id6502616534"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#17335F] px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                Download on App Store
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

            <p className="text-white/70">
              Free to download • Available on iOS and Android • Join thousands of families finding hope
            </p>
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
