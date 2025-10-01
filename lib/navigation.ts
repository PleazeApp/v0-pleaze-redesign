import {
  Shield,
  Newspaper,
  BookOpen,
  GraduationCap,
  User,
  Heart,
  Building2,
  Stethoscope,
  MessageCircle,
  PenLine,
  Users,
  Library,
  FileText
} from "lucide-react"

export interface NavItem {
  icon: any
  title: string
  description: string
  href: string
}

export interface MegaMenuContent {
  features: NavItem[]
  about: NavItem[]
  community: NavItem[]
  resources: NavItem[]
}

export const megaMenuContent: MegaMenuContent = {
  features: [
    {
      icon: Shield,
      title: "Help Buttons",
      description: "Instantly alert your support network during a crisis with one tap.",
      href: "/features/help-buttons",
    },
    {
      icon: Newspaper,
      title: "News Feed",
      description: "Stay informed with curated mental health news and community stories.",
      href: "/features/news-feed",
    },
    {
      icon: BookOpen,
      title: "Personal Hub",
      description: "Your private space for journaling, tracking progress, and reflection.",
      href: "/features/personal-hub",
    },
    {
      icon: GraduationCap,
      title: "Training Resources",
      description: "Learn how to support others with professional training modules.",
      href: "/features/training-resources",
    },
  ],
  about: [
    {
      icon: User,
      title: "For Individuals",
      description: "Personal tools and support for your mental health journey.",
      href: "/for-individuals",
    },
    {
      icon: Heart,
      title: "For Loved Ones",
      description: "Resources to help you support family and friends effectively.",
      href: "/for-loved-ones",
    },
    {
      icon: Building2,
      title: "For Institutions",
      description: "Comprehensive solutions for schools, workplaces, and organizations.",
      href: "/for-institutions",
    },
    {
      icon: Stethoscope,
      title: "For Professionals",
      description: "Tools and resources designed for mental health practitioners.",
      href: "/for-professionals",
    },
  ],
  community: [
    {
      icon: MessageCircle,
      title: "Contact Us",
      description: "Get in touch with our team for support and inquiries.",
      href: "/contact",
    },
    {
      icon: PenLine,
      title: "Share Your Story",
      description: "Inspire others by sharing your mental health journey.",
      href: "/share-your-story",
    },
    {
      icon: Users,
      title: "Ask Jimmy",
      description: "Get personalized guidance from our AI-powered mental health assistant.",
      href: "/ask-jimmy",
    },
    {
      icon: FileText,
      title: "Write For Us",
      description: "Contribute articles and insights to our community blog.",
      href: "/write-for-us",
    },
  ],
  resources: [
    {
      icon: BookOpen,
      title: "Blog",
      description: "Read the latest articles on mental health and addiction recovery.",
      href: "/blog",
    },
    {
      icon: Library,
      title: "Resource Hub",
      description: "Access comprehensive mental health resources and support services.",
      href: "/resource-hub",
    },
    {
      icon: Newspaper,
      title: "Newsletter",
      description: "Stay updated with our weekly mental health insights and tips.",
      href: "/newsletter",
    },
    {
      icon: FileText,
      title: "Sources",
      description: "Explore the research and sources behind our content.",
      href: "/sources",
    },
  ],
}
