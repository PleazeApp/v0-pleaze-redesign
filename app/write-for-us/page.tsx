import Image from "next/image"
import Link from "next/link"
import SubmissionForm from "@/components/submission-form"
import {
  ArrowRight,
  PenTool,
  Users,
  Heart,
  BookOpen,
  Phone,
  MessageCircle,
  Mail,
  CheckCircle,
  Edit3,
} from "lucide-react"

export default function WriteForUsPage() {
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
              Write for Us – Share Your Voice on Pleaze
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              At Pleaze, we believe in the power of human connection. Our mission is to create a safe, engaging, and
              uplifting space where people can share their stories, experiences, and insights, inspiring real
              conversations that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#submission-form"
                className="bg-white text-[#17335F] px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                <Edit3 className="mr-2 w-5 h-5" />
                Submit Your Story
              </a>
              <a
                href="#guidelines"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#17335F] transition-colors inline-flex items-center justify-center"
              >
                View Guidelines
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              We're inviting writers, storytellers, and thought leaders to contribute to our platform. Whether you want
              to inspire, inform, or spark change, your voice matters here.
            </p>
          </div>
        </div>
      </section>

      {/* Why Write for Pleaze Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Write for Pleaze?</h2>
            <p className="text-xl text-gray-600 mb-12">
              When you write for us, you're not just submitting an article, you're joining a community dedicated to
              authentic, meaningful interactions. Your content will:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reach an Engaged Audience</h3>
              <p className="text-gray-600">Reach an engaged and growing audience across our app and online presence.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Help Others Feel Heard</h3>
              <p className="text-gray-600">Help others feel heard, understood, and inspired.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <PenTool className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Build Community</h3>
              <p className="text-gray-600">Contribute to a platform built on respect, empathy, and connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Looking For Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We're Looking For</h2>
            <p className="text-xl text-gray-600">
              We welcome original, well-written contributions that align with our mission and resonate with our
              audience. Topics may include (but are not limited to):
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Growth & Wellbeing</h3>
              <p className="text-gray-700">Mental health, self-care, mindfulness, and overcoming challenges.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Human Connection & Relationships</h3>
              <p className="text-gray-700">Friendship, family, romance, and building deeper bonds.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Life Stories & Experiences</h3>
              <p className="text-gray-700">Inspiring journeys, lessons learned, and moments that shaped you.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kindness & Positivity</h3>
              <p className="text-gray-700">Acts of kindness, community stories, and uplifting messages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Guidelines Section */}
      <section id="guidelines" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Submission Guidelines</h2>
            <p className="text-xl text-gray-600">To maintain quality and ensure your work has the best impact:</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#17335F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Original Content Only</h3>
                    <p className="text-gray-600">Your submission must be unique and not published elsewhere.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#788ED4] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Edit3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Word Count</h3>
                    <p className="text-gray-600">800–1,500 words is ideal.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#67D8AF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <PenTool className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Style</h3>
                    <p className="text-gray-600">
                      Clear, engaging, and accessible. Use a conversational yet professional tone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Formatting</h3>
                    <p className="text-gray-600">
                      Break up your article with headings, bullet points, and short paragraphs for readability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Links</h3>
                    <p className="text-gray-600">
                      You may include one relevant link to your own website or profile in your bio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Images</h3>
                    <p className="text-gray-600">If including images, ensure they are copyright-free or your own.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form Section */}
      <section id="submission-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Submit Your Article</h2>
            <p className="text-xl text-gray-600">
              Ready to share your story? Use our online submission form below to send us your article.
            </p>
          </div>

          <SubmissionForm />

          {/* Alternative Contact */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prefer Email?</h3>
              <p className="text-gray-600 mb-4">You can also send your submission directly to our editorial team:</p>
              <Link
                href="mailto:info@pleazeapp.com"
                className="inline-flex items-center text-[#17335F] hover:text-[#17335F]/80 font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@pleazeapp.com
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-20 bg-gradient-to-r from-[#67D8AF]/10 to-[#788ED4]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Join the Pleaze Community</h2>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                By writing for Pleaze, you're helping to build a space where people feel safe to share, connect, and
                grow together. We look forward to reading your story and welcoming you to our contributor network.
              </p>
              <a
                href="#submission-form"
                className="bg-[#17335F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#17335F]/90 transition-colors inline-flex items-center justify-center"
              >
                <Edit3 className="mr-2 w-5 h-5" />
                Start Writing Today
              </a>
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
