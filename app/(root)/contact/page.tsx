"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Twitter,
  Linkedin,
  Github,
  HelpCircle,
  Bug,
  Lightbulb,
  Heart,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Shield,
  Star,
  Headphones,
  Calendar,
  Award,
  ChevronRight,
  ExternalLink,
  Building,
  Briefcase,
  UserCheck,
  TrendingUp,
  MessageSquare,
  FileText,
  Target,
  Rocket,
  ChevronDown,
  PlayCircle,
  BookOpen,
  LifeBuoy,
  Sparkles,
  ArrowUp,
  Menu,
  X,
  Search,
  Filter,
  Bookmark,
  Share2,
  Download,
  Eye,
  AlertCircle,
  Info,
  CheckCircle2,
  XCircle,
  User,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    subject: "",
    category: "",
    priority: "",
    message: "",
    newsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      // Update active section for navigation
      const sections = ["hero", "contact-methods", "form", "faq"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with realistic timing
    await new Promise((resolve) => setTimeout(resolve, 2500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        subject: "",
        category: "",
        priority: "",
        message: "",
        newsletter: false,
      });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "AI-Powered Live Chat",
      subtitle: "Instant Response",
      description:
        "Get immediate help from our AI assistant with seamless escalation to human experts when needed",
      detail: "Average response: 45 seconds",
      action: "#",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-500/10 to-green-500/10",
      available: true,
      badge: "Online Now",
      features: [
        "24/7 AI-powered responses",
        "Instant human escalation",
        "Screen sharing capability",
        "Multi-language support",
        "Chat history & transcripts",
      ],
      mostPopular: true,
      responseTime: "< 1 min",
      satisfaction: "98%",
    },
    {
      icon: Calendar,
      title: "1-on-1 Expert Coaching",
      subtitle: "Personalized Sessions",
      description:
        "Book exclusive sessions with ex-FAANG engineers and career coaches for tailored guidance",
      detail: "30-90 minute sessions",
      action: "/schedule",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
      available: true,
      badge: "Premium Feature",
      features: [
        "Ex-FAANG interview coaches",
        "Custom mock interviews",
        "Resume & portfolio review",
        "Salary negotiation strategy",
        "Career roadmap planning",
      ],
      mostPopular: false,
      responseTime: "Same day",
      satisfaction: "99%",
    },
    {
      icon: Phone,
      title: "Priority Phone Line",
      subtitle: "Direct Specialist Access",
      description:
        "Connect directly with our technical specialists for urgent issues and complex technical queries",
      detail: "+1 (555) PREP-WISE",
      action: "tel:+15557737947",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      available: true,
      badge: "9AM-9PM PST",
      features: [
        "Direct technical support",
        "Account & billing help",
        "Emergency interview support",
        "Priority queue access",
        "Follow-up scheduling",
      ],
      mostPopular: false,
      responseTime: "Immediate",
      satisfaction: "97%",
    },
    {
      icon: Mail,
      title: "Comprehensive Email Support",
      subtitle: "Detailed Documentation",
      description:
        "Receive thorough written support with step-by-step guides, screenshots, and follow-up assistance",
      detail: "support@prepwise.ai",
      action: "mailto:support@prepwise.ai",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-500/10 to-orange-500/10",
      available: true,
      badge: "2 Hour Response",
      features: [
        "Detailed written responses",
        "Visual step-by-step guides",
        "Follow-up care included",
        "Searchable documentation",
        "File attachment support",
      ],
      mostPopular: false,
      responseTime: "< 2 hours",
      satisfaction: "96%",
    },
  ];

  const supportStats = [
    {
      icon: Zap,
      value: "< 45s",
      label: "Avg Response Time",
      color: "text-emerald-400",
      description: "Industry-leading speed",
      change: "+15% faster this month",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Support Satisfaction",
      color: "text-yellow-400",
      description: "Based on 25K+ reviews",
      change: "↑ 0.2 from last quarter",
    },
    {
      icon: Users,
      value: "50K+",
      label: "Users Helped Monthly",
      color: "text-blue-400",
      description: "Growing community",
      change: "+23% month over month",
    },
    {
      icon: Shield,
      value: "99.97%",
      label: "Platform Uptime",
      color: "text-purple-400",
      description: "Enterprise reliability",
      change: "Above industry standard",
    },
  ];

  const quickHelp = [
    {
      icon: BookOpen,
      title: "Getting Started Guide",
      description:
        "Complete walkthrough for new users with interactive tutorials",
      link: "/help/getting-started",
      color: "from-blue-500 to-indigo-600",
      time: "5 min read",
      popular: true,
      views: "15K views",
    },
    {
      icon: PlayCircle,
      title: "Video Tutorial Library",
      description: "Comprehensive video guides covering all platform features",
      link: "/help/tutorials",
      color: "from-green-500 to-emerald-600",
      time: "Watch now",
      popular: true,
      views: "8K views",
    },
    {
      icon: Bug,
      title: "Bug Report Tool",
      description:
        "Automated diagnostic tool to quickly identify and report issues",
      link: "#bug-report",
      color: "from-red-500 to-pink-600",
      time: "2 min form",
      popular: false,
      views: "2K reports",
    },
    {
      icon: Lightbulb,
      title: "Feature Request Hub",
      description:
        "Submit ideas and vote on upcoming features with the community",
      link: "#feature-request",
      color: "from-yellow-500 to-orange-600",
      time: "Community driven",
      popular: false,
      views: "5K suggestions",
    },
    {
      icon: Award,
      title: "Success Stories",
      description:
        "Inspiring journeys from our 25K+ users who landed dream jobs",
      link: "/success-stories",
      color: "from-purple-500 to-pink-600",
      time: "Inspiring reads",
      popular: true,
      views: "12K reads",
    },
    {
      icon: LifeBuoy,
      title: "Emergency Support",
      description:
        "24/7 crisis support for urgent issues during live interviews",
      link: "/emergency-support",
      color: "from-red-600 to-red-700",
      time: "24/7 available",
      popular: false,
      views: "Always ready",
    },
  ];

  const enhancedFaqItems = [
    {
      question: "How quickly will I receive support?",
      answer:
        "Response times vary by channel: Live chat (45 seconds), Email (2 hours), Phone (immediate during 9AM-9PM PST), Emergency support (24/7 for urgent interview issues). Premium users get priority access.",
      category: "Response Time",
      popular: true,
      tags: ["response-time", "support-speed", "premium"],
    },
    {
      question: "What types of support do you offer?",
      answer:
        "We provide comprehensive support including technical assistance, personalized interview coaching, career strategy guidance, platform tutorials, billing help, feature requests, bug reports, and emergency support during live interviews.",
      category: "Support Types",
      popular: true,
      tags: ["support-types", "services", "coaching"],
    },
    {
      question: "Do you offer personalized interview coaching?",
      answer:
        "Yes! Book 1-on-1 sessions with ex-FAANG engineers and career coaches. Services include mock interviews, resume reviews, salary negotiation coaching, and personalized career strategy sessions (30-90 minutes).",
      category: "Coaching",
      popular: true,
      tags: ["coaching", "mock-interviews", "faang", "career"],
    },
    {
      question: "Is support available in different languages?",
      answer:
        "Our platform supports 20+ languages including English, Spanish, French, German, Japanese, Korean, Mandarin, Hindi, Portuguese, and more. Live chat offers real-time translation for seamless communication.",
      category: "Languages",
      popular: false,
      tags: ["languages", "international", "translation"],
    },
    {
      question: "What if I need help during a live interview?",
      answer:
        "Our Emergency Support hotline (+1-555-HELP-NOW) is available 24/7 for urgent technical issues during live interviews. We also provide in-platform panic button support and real-time chat assistance.",
      category: "Emergency",
      popular: false,
      tags: ["emergency", "live-interview", "urgent"],
    },
    {
      question: "How can I provide feedback or request features?",
      answer:
        "Multiple channels available: in-app feedback system, Discord community, email (suggestions@prepwise.ai), or schedule a feedback session with our product team. We review all suggestions in our monthly product planning meetings.",
      category: "Feedback",
      popular: false,
      tags: ["feedback", "feature-request", "product"],
    },
    {
      question: "Do you offer enterprise or team support?",
      answer:
        "Yes! Enterprise packages include dedicated account managers, custom onboarding, bulk licensing, API integration support, and priority assistance for teams of 10+ users. Contact enterprise@prepwise.ai for details.",
      category: "Enterprise",
      popular: false,
      tags: ["enterprise", "teams", "business"],
    },
    {
      question: "What's included with premium support?",
      answer:
        "Premium users enjoy priority queue access, 30-second response guarantee, unlimited coaching sessions, direct phone support, beta feature access, dedicated success manager, and exclusive webinars.",
      category: "Premium",
      popular: true,
      tags: ["premium", "priority", "benefits"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Software Engineer",
      company: "Google",
      avatar: "SC",
      rating: 5,
      text: "PrepWise support team literally saved my Google interview! When I had technical issues during my final round, their emergency hotline connected me with a specialist in under 30 seconds. Got the offer!",
      gradient: "from-blue-500 to-indigo-600",
      verified: true,
      helpfulVotes: 247,
    },
    {
      name: "Marcus Rodriguez",
      role: "Principal Product Manager",
      company: "Microsoft",
      avatar: "MR",
      rating: 5,
      text: "The 1-on-1 coaching was game-changing. My ex-Microsoft coach helped me structure behavioral answers perfectly and gave insider tips. The personalized approach made all the difference.",
      gradient: "from-green-500 to-emerald-600",
      verified: true,
      helpfulVotes: 189,
    },
    {
      name: "Emily Watson",
      role: "Lead Data Scientist",
      company: "Amazon",
      avatar: "EW",
      rating: 5,
      text: "24/7 support isn't just marketing - it's real! Got detailed help at 3 AM while prepping for my Amazon interview. The team's dedication to user success is incredible.",
      gradient: "from-purple-500 to-pink-600",
      verified: true,
      helpfulVotes: 156,
    },
  ];

  const faqCategories = [
    { id: "all", name: "All Questions", count: enhancedFaqItems.length },
    {
      id: "Response Time",
      name: "Response Time",
      count: enhancedFaqItems.filter(
        (item) => item.category === "Response Time"
      ).length,
    },
    {
      id: "Support Types",
      name: "Support Types",
      count: enhancedFaqItems.filter(
        (item) => item.category === "Support Types"
      ).length,
    },
    {
      id: "Coaching",
      name: "Coaching",
      count: enhancedFaqItems.filter((item) => item.category === "Coaching")
        .length,
    },
    {
      id: "Premium",
      name: "Premium",
      count: enhancedFaqItems.filter((item) => item.category === "Premium")
        .length,
    },
  ];

  const filteredFaqItems = enhancedFaqItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Enhanced SEO Meta Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact PrepWise AI - Expert Interview Support & Coaching",
            description:
              "Get 24/7 expert support for your interview preparation. Live chat, phone support, and 1-on-1 coaching with ex-FAANG engineers. 4.9/5 rating from 25K+ users.",
            url: "https://prepwise.ai/contact",
            mainEntity: {
              "@type": "Organization",
              name: "PrepWise AI",
              url: "https://prepwise.ai",
              logo: "https://prepwise.ai/logo.png",
              sameAs: [
                "https://twitter.com/prepwise",
                "https://linkedin.com/company/prepwise",
                "https://github.com/prepwise",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-555-773-7947",
                  contactType: "customer service",
                  availableLanguage: [
                    "English",
                    "Spanish",
                    "French",
                    "German",
                    "Japanese",
                    "Korean",
                    "Mandarin",
                    "Hindi",
                    "Portuguese",
                  ],
                  hoursAvailable: "Mo-Su 09:00-21:00 PST",
                  areaServed: "Worldwide",
                },
                {
                  "@type": "ContactPoint",
                  email: "support@prepwise.ai",
                  contactType: "customer service",
                  responseTime: "PT2H",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Innovation Drive, Suite 400",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94105",
                addressCountry: "US",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "25000",
                bestRating: "5",
                worstRating: "1",
              },
            },
          }),
        }}
      />

      {/* Floating Navigation */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-lg border border-gray-700/50 rounded-full px-6 py-3 hidden md:flex items-center space-x-6">
        {[
          { id: "hero", name: "Overview" },
          { id: "contact-methods", name: "Support" },
          { id: "form", name: "Contact" },
          { id: "faq", name: "FAQ" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() =>
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`text-sm font-medium transition-colors duration-200 ${
              activeSection === item.id
                ? "text-purple-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Enhanced Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-pink-900/20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              {/* Enhanced Status Badge */}
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>🏆 Award-Winning Support Team</span>
                  <div className="w-1 h-4 bg-gray-500 mx-2"></div>
                  <span>4.9/5 Rating</span>
                  <div className="w-1 h-4 bg-gray-500 mx-2"></div>
                  <span>25K+ Happy Users</span>
                </div>
              </div>

              {/* Main Heading with Enhanced Typography */}
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
                Expert Support &{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Career Coaching
                </span>
              </h1>

              <p className="text-2xl lg:text-3xl text-gray-300 max-w-6xl mx-auto font-medium mb-16 leading-relaxed">
                Get instant technical support, personalized coaching from
                ex-FAANG engineers, and emergency help during live interviews.
                Your success is our mission.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg">
                  <span className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6" />
                    Start Live Chat Now
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>

                <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-6 px-12 rounded-2xl border-2 border-gray-600 hover:border-gray-500 transition-all duration-300 shadow-xl text-lg">
                  <span className="flex items-center gap-3">
                    <Calendar className="w-6 h-6" />
                    Book Expert Session
                  </span>
                </Button>
              </div>

              {/* Enhanced Support Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {supportStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="group relative">
                      <div className="absolute inset-0 bg-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                        <IconComponent
                          className={`w-10 h-10 ${stat.color} mx-auto mb-4`}
                        />
                        <div
                          className={`text-3xl font-bold ${stat.color} mb-2`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-gray-300 font-medium text-sm mb-2">
                          {stat.label}
                        </div>
                        <div className="text-gray-500 text-xs mb-1">
                          {stat.description}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {stat.change}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              {[
                {
                  icon: Shield,
                  text: "SOC 2 Certified",
                  color: "text-green-400",
                },
                {
                  icon: Clock,
                  text: "24/7 Emergency Support",
                  color: "text-blue-400",
                },
                {
                  icon: Globe,
                  text: "20+ Languages",
                  color: "text-purple-400",
                },
                {
                  icon: Award,
                  text: "Industry Leading",
                  color: "text-yellow-400",
                },
                {
                  icon: Users,
                  text: "25K+ Success Stories",
                  color: "text-pink-400",
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-400"
                  >
                    <IconComponent className={`w-5 h-5 ${item.color}`} />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Methods Section */}
      <section id="contact-methods" className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-8 backdrop-blur-sm">
                <Headphones className="w-4 h-4 mr-2" />
                Choose Your Preferred Support Channel
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                World-Class{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Support Experience
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                From AI-powered instant responses to personalized coaching with
                industry experts, we provide comprehensive support tailored to
                your needs.
              </p>
            </div>

            {/* Enhanced Contact Cards Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="group relative">
                    {/* Enhanced Glow Effect */}
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${method.bgGradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700`}
                    ></div>

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-20 h-20 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                          >
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                          <div>
                            <div
                              className={`px-4 py-2 bg-gradient-to-r ${method.gradient} rounded-full text-white text-sm font-bold mb-2`}
                            >
                              {method.badge}
                            </div>
                            {method.mostPopular && (
                              <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-xs font-bold">
                                Most Popular
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="text-right">
                          <div className="text-sm text-gray-400 mb-1">
                            Response Time
                          </div>
                          <div className="text-lg font-bold text-white mb-2">
                            {method.responseTime}
                          </div>
                          <div className="text-sm text-gray-400 mb-1">
                            Satisfaction
                          </div>
                          <div className="text-lg font-bold text-green-400">
                            {method.satisfaction}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mb-8">
                        <h3 className="text-3xl font-bold text-white mb-3">
                          {method.title}
                        </h3>
                        <div
                          className={`text-xl font-semibold bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent mb-4`}
                        >
                          {method.subtitle}
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {method.description}
                        </p>
                        <p className="text-gray-400 font-medium text-lg mb-6">
                          {method.detail}
                        </p>

                        {/* Enhanced Features List */}
                        <div className="grid grid-cols-1 gap-3 mb-8">
                          {method.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-gray-300 bg-gray-800/30 rounded-lg p-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              <span className="text-sm font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link href={method.action} className="group/btn block">
                        <Button
                          className={`w-full bg-gradient-to-r ${method.gradient} hover:saturate-110 text-white font-bold py-6 rounded-2xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl text-lg`}
                        >
                          <span className="relative flex items-center justify-center gap-3">
                            Get Started Now
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-semibold mb-8 backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                Real Success Stories from Our Community
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Support That Changes
                </span>{" "}
                Career Outcomes
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
                See how our expert support helped thousands land their dream
                jobs at top companies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${testimonial.gradient
                      .replace(/from-|to-/g, "")
                      .split(" ")
                      .map((c) => c + "/20")
                      .join(
                        " "
                      )} rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500`}
                  ></div>

                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4 shadow-lg`}
                        >
                          <span className="text-white font-bold text-lg">
                            {testimonial.avatar}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-300 text-sm">
                            {testimonial.role}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                      {testimonial.verified && (
                        <div className="flex items-center text-green-400">
                          <CheckCircle2 className="w-5 h-5 mr-1" />
                          <span className="text-xs font-medium">Verified</span>
                        </div>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Testimonial */}
                    <p className="text-gray-300 italic leading-relaxed text-lg mb-6">
                      "{testimonial.text}"
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{testimonial.helpfulVotes} found this helpful</span>
                      <div className="flex items-center space-x-2">
                        <button className="hover:text-white transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="hover:text-white transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section id="form" className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Enhanced Contact Form */}
              <div className="lg:col-span-2">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/50">
                    {/* Form Header */}
                    <div className="text-center mb-12">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                        <Send className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-4xl font-black text-white mb-6">
                        Get Personalized Support
                      </h3>
                      <p className="text-gray-400 text-xl leading-relaxed">
                        Tell us about your needs and we'll connect you with the
                        right expert. All fields marked with * are required.
                      </p>
                    </div>

                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Personal Information */}
                        <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                            <User className="w-5 h-5 mr-2" />
                            Personal Information
                          </h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                                Full Name *
                              </label>
                              <Input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                required
                                className="h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300 text-lg"
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                                Email Address *
                              </label>
                              <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="your@email.com"
                                required
                                className="h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300 text-lg"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Professional Information */}
                        <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Briefcase className="w-5 h-5 mr-2" />
                            Professional Information
                          </h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                                Company (Optional)
                              </label>
                              <Input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="Your company name"
                                className="h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300 text-lg"
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                                Current Role
                              </label>
                              <Input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                placeholder="e.g. Software Engineer, Product Manager"
                                className="h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300 text-lg"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Support Request Details */}
                        <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                            <MessageSquare className="w-5 h-5 mr-2" />
                            Support Request Details
                          </h4>

                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-3">
                              <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                                Support Category *
                              </label>
                              <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                required
                                className="w-full h-14 px-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-all duration-300 text-lg"
                              >
                                <option value="">Select a category</option>
                                <option value="technical">
                                  Technical Support
                                </option>
                                <option value="coaching">
                                  Interview Coaching
                                </option>
                                <option value="billing">
                                  Billing & Account
                                </option>
                                <option value="feature">Feature Request</option>
                                <option value="bug">Bug Report</option>
                                <option value="enterprise">
                                  Enterprise Inquiry
                                </option>
                                <option value="partnership">Partnership</option>
                                <option value="feedback">
                                  General Feedback
                                </option>
                              </select>
                            </div>
                            <div className="space-y-3">
                              <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                                Priority Level
                              </label>
                              <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleInputChange}
                                className="w-full h-14 px-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-all duration-300 text-lg"
                              >
                                <option value="">Select priority</option>
                                <option value="low">
                                  Low - General inquiry
                                </option>
                                <option value="medium">
                                  Medium - Need help soon
                                </option>
                                <option value="high">
                                  High - Urgent issue
                                </option>
                                <option value="critical">
                                  Critical - Interview today
                                </option>
                              </select>
                            </div>
                          </div>

                          <div className="space-y-3 mb-6">
                            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                              Subject *
                            </label>
                            <Input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              placeholder="Brief description of your inquiry"
                              required
                              className="h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300 text-lg"
                            />
                          </div>

                          <div className="space-y-3">
                            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                              Detailed Message *
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              rows={8}
                              placeholder="Please provide detailed information about your inquiry. Include:&#10;• What you were trying to do&#10;• What happened instead&#10;• Any error messages&#10;• Your goals or expectations&#10;• Any relevant screenshots or files&#10;&#10;The more details you provide, the better we can assist you."
                              required
                              className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none resize-none transition-all duration-300 text-lg"
                            />
                          </div>
                        </div>

                        {/* Preferences */}
                        <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              name="newsletter"
                              id="newsletter"
                              checked={formData.newsletter}
                              onChange={handleInputChange}
                              className="w-5 h-5 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                            />
                            <label
                              htmlFor="newsletter"
                              className="text-gray-300"
                            >
                              Subscribe to our newsletter for interview tips,
                              success stories, and platform updates
                            </label>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white font-bold py-8 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none shadow-2xl hover:shadow-purple-500/25 text-xl"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center gap-4">
                              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Sending Your Message...</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-4">
                              <Send className="w-6 h-6" />
                              <span>Send Message</span>
                              <ArrowRight className="w-6 h-6" />
                            </div>
                          )}
                        </Button>

                        {/* Form Footer */}
                        <div className="text-center">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-4">
                            <p className="text-blue-400 font-semibold text-lg">
                              Expected Response Time:{" "}
                              <span className="text-white">
                                {formData.priority === "critical"
                                  ? "< 30 minutes"
                                  : formData.priority === "high"
                                  ? "< 2 hours"
                                  : formData.priority === "medium"
                                  ? "< 4 hours"
                                  : "< 24 hours"}
                              </span>
                            </p>
                          </div>
                          <p className="text-gray-400 text-sm">
                            By submitting this form, you agree to our Terms of
                            Service and Privacy Policy.
                          </p>
                        </div>
                      </form>
                    ) : (
                      <div className="text-center py-20">
                        <div className="w-32 h-32 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
                          <CheckCircle className="w-16 h-16 text-white" />
                        </div>
                        <h4 className="text-4xl font-black text-white mb-8">
                          Message Sent Successfully!
                        </h4>
                        <p className="text-gray-300 text-xl leading-relaxed max-w-md mx-auto mb-8">
                          Thank you for reaching out! We've received your
                          message and assigned it ticket #
                          <span className="text-white font-bold">
                            {Math.floor(Math.random() * 100000)}
                          </span>
                        </p>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 max-w-sm mx-auto">
                          <p className="text-green-400 font-bold text-lg">
                            Expected Response:{" "}
                            <span className="text-white">
                              {formData.priority === "critical"
                                ? "< 30 minutes"
                                : formData.priority === "high"
                                ? "< 2 hours"
                                : formData.priority === "medium"
                                ? "< 4 hours"
                                : "< 24 hours"}
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Enhanced Sidebar */}
              <div className="space-y-8">
                {/* Quick Help Resources */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Sparkles className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          Quick Help Resources
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Self-service options
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {quickHelp.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={index}
                            href={item.link}
                            className="group/item block"
                          >
                            <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group-hover/item:scale-105 border border-transparent hover:border-gray-600/50">
                              <div
                                className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}
                              >
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                  <p className="text-white font-bold text-sm truncate">
                                    {item.title}
                                  </p>
                                  {item.popular && (
                                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold ml-2">
                                      Popular
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-400 text-xs mb-1">
                                  {item.description}
                                </p>
                                <div className="flex items-center justify-between">
                                  <p className="text-gray-500 text-xs">
                                    {item.time}
                                  </p>
                                  <p className="text-purple-400 text-xs">
                                    {item.views}
                                  </p>
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-white group-hover/item:translate-x-1 transition-all flex-shrink-0" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Support Availability */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Clock className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          Support Availability
                        </h4>
                        <p className="text-gray-400 text-sm">
                          When we're here for you
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {[
                        {
                          name: "Live Chat",
                          status: "24/7",
                          color: "emerald",
                          desc: "AI + Human support",
                        },
                        {
                          name: "Phone Support",
                          status: "9AM-9PM PST",
                          color: "blue",
                          desc: "Direct specialist line",
                        },
                        {
                          name: "Email Support",
                          status: "2h response",
                          color: "purple",
                          desc: "Detailed assistance",
                        },
                        {
                          name: "Emergency Line",
                          status: "24/7",
                          color: "red",
                          desc: "Live interview help",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`flex justify-between items-center p-4 bg-${item.color}-500/10 rounded-lg border border-${item.color}-500/20 hover:bg-${item.color}-500/20 transition-colors`}
                        >
                          <div>
                            <span className="text-white font-bold">
                              {item.name}
                            </span>
                            <div className={`text-${item.color}-400 text-xs`}>
                              {item.desc}
                            </div>
                          </div>
                          <span className={`text-${item.color}-300 font-bold`}>
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl p-8 border border-red-500/50">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse">
                        <AlertCircle className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        Emergency Support
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">
                        Having issues during a live interview?
                      </p>
                      <Button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-3 rounded-xl transition-all duration-300">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Emergency Line
                      </Button>
                      <p className="text-red-400 text-xs mt-2 font-semibold">
                        +1 (555) HELP-NOW
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section id="faq" className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-semibold mb-8 backdrop-blur-sm">
                <HelpCircle className="w-4 h-4 mr-2" />
                Comprehensive Support FAQ
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Support Questions
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
                Find quick answers to common questions and get the help you need
                faster
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search frequently asked questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-amber-500 focus:ring-amber-500 transition-all duration-300 text-lg"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-12 pr-8 h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-all duration-300 text-lg min-w-[200px]"
                  >
                    {faqCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-3">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                        : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-400">
                Showing {filteredFaqItems.length} of {enhancedFaqItems.length}{" "}
                questions
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
              </p>
            </div>

            {/* Enhanced FAQ Accordion */}
            <div className="space-y-4 mb-16">
              {filteredFaqItems.length > 0 ? (
                filteredFaqItems.map((faq, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/5 to-gray-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                    <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
                      <button
                        onClick={() =>
                          setExpandedFaq(expandedFaq === index ? null : index)
                        }
                        className="w-full p-8 text-left flex items-center justify-between"
                      >
                        <div className="flex-1 pr-6">
                          <div className="flex items-center gap-3 mb-3">
                            <h4 className="text-xl font-bold text-white leading-tight">
                              {faq.question}
                            </h4>
                            {faq.popular && (
                              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-gray-400">
                              Category:
                            </span>
                            <span className="text-sm text-amber-400 font-medium">
                              {faq.category}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {faq.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm text-gray-400">
                              Helpful?
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <button className="text-green-400 hover:text-green-300 transition-colors">
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                              <button className="text-red-400 hover:text-red-300 transition-colors">
                                <XCircle className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                              expandedFaq === index ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </button>

                      {expandedFaq === index && (
                        <div className="px-8 pb-8">
                          <div className="border-t border-gray-700/50 pt-6">
                            <p className="text-gray-300 leading-relaxed text-lg">
                              {faq.answer}
                            </p>
                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700/30">
                              <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                  <Bookmark className="w-4 h-4" />
                                  <span className="text-sm">Save</span>
                                </button>
                                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                  <Share2 className="w-4 h-4" />
                                  <span className="text-sm">Share</span>
                                </button>
                              </div>
                              <div className="text-sm text-gray-400">
                                Still need help?{" "}
                                <Link
                                  href="#form"
                                  className="text-amber-400 hover:text-amber-300"
                                >
                                  Contact us
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    No Questions Found
                  </h3>
                  <p className="text-gray-400 mb-6">
                    We couldn't find any questions matching your search
                    criteria.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-3 rounded-xl"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            {/* Enhanced FAQ CTA */}
            <div className="text-center space-y-8">
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-3xl p-12">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Still Need Help?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our expert support
                  team is ready to help you succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
                  >
                    <Link href="/help">
                      <span className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6" />
                        Browse Help Center
                        <ExternalLink className="w-5 h-5" />
                      </span>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
                  >
                    <Link href="#form">
                      <span className="flex items-center gap-3">
                        <MessageCircle className="w-6 h-6" />
                        Contact Support
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-gray-800/30 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">
                    45s
                  </div>
                  <div className="text-gray-300 text-sm">
                    Average response time
                  </div>
                </div>
                <div className="bg-gray-800/30 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-300 text-sm">Emergency support</div>
                </div>
                <div className="bg-gray-800/30 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    4.9★
                  </div>
                  <div className="text-gray-300 text-sm">
                    Support satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Bottom CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/30 to-pink-900/20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            {/* Enhanced Icon */}
            <div className="w-32 h-32 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-12 shadow-2xl animate-pulse">
              <Heart className="w-16 h-16 text-white" />
            </div>

            {/* Enhanced Content */}
            <h2 className="text-6xl lg:text-7xl font-black text-white mb-12 leading-tight">
              Your Success is{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Our Obsession
              </span>
            </h2>

            <p className="text-2xl lg:text-3xl text-gray-300 mb-16 leading-relaxed max-w-5xl mx-auto">
              We're not just a support team – we're your career transformation
              partners. Every question matters, every challenge is our
              opportunity to help you succeed, and every victory is celebrated
              together.
            </p>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
              {[
                {
                  value: "25K+",
                  label: "Users Helped",
                  desc: "Career transformations",
                },
                {
                  value: "98%",
                  label: "Success Rate",
                  desc: "Interview outcomes",
                },
                {
                  value: "4.9/5",
                  label: "Satisfaction",
                  desc: "Support rating",
                },
                {
                  value: "24/7",
                  label: "Availability",
                  desc: "Emergency support",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white font-bold py-8 px-16 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 text-xl"
              >
                <Link href="mailto:support@prepwise.ai">
                  <span className="flex items-center gap-4">
                    <Mail className="w-7 h-7" />
                    Get Expert Help Now
                    <ArrowRight className="w-6 h-6" />
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-8 px-16 rounded-2xl border-2 border-gray-600 hover:border-gray-500 transition-all duration-300 shadow-xl text-xl"
              >
                <Link href="/templates">
                  <span className="flex items-center gap-4">
                    <Target className="w-7 h-7" />
                    Start Your Journey
                  </span>
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
              <p className="text-gray-400 text-lg mb-6">
                Trusted by professionals at leading companies worldwide
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {[
                  "Google",
                  "Microsoft",
                  "Amazon",
                  "Apple",
                  "Netflix",
                  "Meta",
                  "Tesla",
                  "Uber",
                ].map((company, index) => (
                  <div key={index} className="text-gray-400 font-bold text-lg">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
