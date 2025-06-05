"use client";

import React, { useState } from "react";
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

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      subtitle: "Instant Response",
      description:
        "Get immediate help from our AI-powered chat system and expert support agents",
      detail: "Average response: 2 minutes",
      action: "#",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-500/20 to-green-500/20",
      available: true,
      badge: "Online Now",
      features: [
        "AI-powered responses",
        "Human escalation",
        "Screen sharing",
        "Multi-language",
      ],
      mostPopular: true,
    },
    {
      icon: Calendar,
      title: "Expert Consultation",
      subtitle: "1-on-1 Sessions",
      description:
        "Book personalized sessions with ex-FAANG interview coaches and career experts",
      detail: "30-60 minute sessions",
      action: "/schedule",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/20 to-indigo-500/20",
      available: true,
      badge: "Premium Feature",
      features: [
        "Career coaching",
        "Mock interviews",
        "Resume review",
        "Salary negotiation",
      ],
      mostPopular: false,
    },
    {
      icon: Phone,
      title: "Priority Phone Support",
      subtitle: "Direct Hotline",
      description:
        "Speak directly with our technical specialists for urgent issues and complex queries",
      detail: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      available: true,
      badge: "Business Hours",
      features: [
        "Technical support",
        "Billing assistance",
        "Account recovery",
        "Priority queue",
      ],
      mostPopular: false,
    },
    {
      icon: Mail,
      title: "Email Support Hub",
      subtitle: "Detailed Assistance",
      description:
        "Get comprehensive written support with screenshots, guides, and follow-up care",
      detail: "support@prepwise.ai",
      action: "mailto:support@prepwise.ai",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-500/20 to-orange-500/20",
      available: true,
      badge: "4 Hour Response",
      features: [
        "Detailed responses",
        "Screenshot guides",
        "Follow-up care",
        "Documentation",
      ],
      mostPopular: false,
    },
  ];

  const supportStats = [
    {
      icon: Zap,
      value: "< 2min",
      label: "Avg Response Time",
      color: "text-emerald-400",
      description: "Fastest in the industry",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Support Satisfaction",
      color: "text-yellow-400",
      description: "Based on 15K+ reviews",
    },
    {
      icon: Users,
      value: "50K+",
      label: "Users Helped Monthly",
      color: "text-blue-400",
      description: "Growing community",
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Platform Uptime",
      color: "text-purple-400",
      description: "Enterprise reliability",
    },
  ];

  const quickHelp = [
    {
      icon: BookOpen,
      title: "Getting Started Guide",
      description: "Complete onboarding for new users with video tutorials",
      link: "/help/getting-started",
      color: "from-blue-500 to-indigo-600",
      time: "5 min read",
      popular: true,
    },
    {
      icon: PlayCircle,
      title: "Video Tutorials",
      description: "Step-by-step video guides for all platform features",
      link: "/help/tutorials",
      color: "from-green-500 to-emerald-600",
      time: "Watch now",
      popular: true,
    },
    {
      icon: Bug,
      title: "Report Technical Issue",
      description: "Found a bug? Report it with our automated diagnostic tool",
      link: "#bug-report",
      color: "from-red-500 to-pink-600",
      time: "2 min form",
      popular: false,
    },
    {
      icon: Lightbulb,
      title: "Feature Requests",
      description: "Suggest improvements or vote on upcoming features",
      link: "#feature-request",
      color: "from-yellow-500 to-orange-600",
      time: "Community driven",
      popular: false,
    },
    {
      icon: Award,
      title: "Success Stories",
      description: "See how 15K+ users landed their dream jobs",
      link: "/success-stories",
      color: "from-purple-500 to-pink-600",
      time: "Inspiring reads",
      popular: true,
    },
    {
      icon: LifeBuoy,
      title: "Emergency Support",
      description: "Urgent issues during important interviews",
      link: "/emergency-support",
      color: "from-red-600 to-red-700",
      time: "24/7 available",
      popular: false,
    },
  ];

  const enhancedFaqItems = [
    {
      question: "How quickly will I receive support?",
      answer:
        "Live chat: Within 2 minutes • Email: Within 4 hours • Phone: Immediate during business hours (Mon-Fri 9AM-6PM PST) • Emergency support: Available 24/7 for urgent issues",
      category: "Response Time",
      popular: true,
    },
    {
      question: "What types of support do you offer?",
      answer:
        "We provide technical support, interview coaching, career guidance, platform tutorials, billing assistance, feature requests, bug reports, and emergency support during live interviews.",
      category: "Support Types",
      popular: true,
    },
    {
      question: "Do you offer personalized interview coaching?",
      answer:
        "Yes! Book 1-on-1 sessions with ex-FAANG coaches for mock interviews, resume reviews, salary negotiation coaching, and personalized career strategy sessions. Sessions range from 30-90 minutes.",
      category: "Coaching",
      popular: true,
    },
    {
      question: "Is support available in different languages?",
      answer:
        "Our platform supports 15+ languages including English, Spanish, French, German, Japanese, Korean, Mandarin, and more. Live chat offers real-time translation for seamless communication.",
      category: "Languages",
      popular: false,
    },
    {
      question: "What if I need help during a live interview?",
      answer:
        "Our Emergency Support hotline (+1-555-HELP-NOW) is available 24/7 for urgent technical issues during live interviews. We also offer panic button support within the platform.",
      category: "Emergency",
      popular: false,
    },
    {
      question: "How can I provide feedback or request features?",
      answer:
        "Use our in-app feedback system, join our Discord community, email suggestions@prepwise.ai, or schedule a feedback session with our product team. We review all suggestions monthly.",
      category: "Feedback",
      popular: false,
    },
    {
      question: "Do you offer enterprise or team support?",
      answer:
        "Yes! We provide dedicated account managers, custom onboarding, bulk licensing, integration support, and priority assistance for teams of 10+ users. Contact enterprise@prepwise.ai",
      category: "Enterprise",
      popular: false,
    },
    {
      question: "What's included with premium support?",
      answer:
        "Premium users get priority queue access, 1-hour response guarantee, unlimited coaching sessions, direct phone support, beta feature access, and dedicated success manager.",
      category: "Premium",
      popular: true,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      avatar: "SC",
      rating: 5,
      text: "The support team helped me troubleshoot a technical issue during my final round interview with Google. Their emergency hotline saved my dream job opportunity!",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager at Microsoft",
      avatar: "MR",
      rating: 5,
      text: "The 1-on-1 coaching session was incredible. My coach (ex-Microsoft PM) helped me structure my answers perfectly. Got the offer the next day!",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      name: "Emily Watson",
      role: "Data Scientist at Amazon",
      avatar: "EW",
      rating: 5,
      text: "Live chat support is phenomenal. Got instant help at 2 AM while preparing for my Amazon interview. The team is available when you need them most.",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "PrepWise AI",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-555-123-4567",
                  contactType: "customer service",
                  availableLanguage: [
                    "English",
                    "Spanish",
                    "French",
                    "German",
                    "Japanese",
                    "Korean",
                    "Mandarin",
                  ],
                  hoursAvailable: "Mo-Fr 09:00-18:00 PST",
                },
                {
                  "@type": "ContactPoint",
                  email: "support@prepwise.ai",
                  contactType: "customer service",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Innovation Drive",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94105",
                addressCountry: "US",
              },
            },
          }),
        }}
      />

      {/* Enhanced Hero Section */}
      <section className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/40 to-pink-900/30"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto text-center">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-xl">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              🏆 Award-Winning Support Team • 4.9/5 Rating • 15K+ Happy Users
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
              Get Expert{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Support & Coaching
              </span>
            </h1>

            <p className="text-2xl text-gray-300 max-w-5xl mx-auto font-medium mb-12 leading-relaxed">
              Whether you need instant technical support, personalized interview
              coaching, or emergency help during live interviews, our
              world-class team of ex-FAANG experts is here to ensure your
              success 24/7.
            </p>

            {/* Enhanced Support Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {supportStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                      <IconComponent
                        className={`w-8 h-8 ${stat.color} mx-auto mb-3`}
                      />
                      <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-300 font-medium text-sm mb-1">
                        {stat.label}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">
                  24/7 Emergency Support
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium">15+ Languages</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Industry Leading</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Methods Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                <Headphones className="w-4 h-4 mr-2" />
                Choose Your Preferred Support Channel
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                World-Class{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Support Experience
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Get the help you need, when you need it. From instant AI-powered
                chat to personalized coaching sessions with ex-FAANG experts.
              </p>
            </div>

            {/* Enhanced Contact Cards Grid */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="group relative">
                    {/* Enhanced Glow Effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${method.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700`}
                    ></div>

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full">
                      {/* Header with badges */}
                      <div className="flex items-start justify-between mb-6">
                        {/* Status Badge */}
                        <div
                          className={`px-3 py-1 bg-gradient-to-r ${method.gradient} rounded-full text-white text-xs font-bold`}
                        >
                          {method.badge}
                        </div>
                        {method.mostPopular && (
                          <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-xs font-bold">
                            Most Popular
                          </div>
                        )}
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {method.title}
                        </h3>
                        <div
                          className={`text-lg font-semibold bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent mb-3`}
                        >
                          {method.subtitle}
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {method.description}
                        </p>
                        <p className="text-gray-400 text-sm font-medium mb-4">
                          {method.detail}
                        </p>

                        {/* Features List */}
                        <div className="space-y-2 mb-6">
                          {method.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-sm text-gray-300"
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link href={method.action} className="group/btn">
                        <Button
                          className={`w-full bg-gradient-to-r ${method.gradient} hover:saturate-110 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl`}
                        >
                          <span className="relative flex items-center justify-center gap-2">
                            Get Started
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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

      {/* User Testimonials for Support */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                What Our Users Say About Support
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Support That Changes
                </span>{" "}
                Career Outcomes
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient
                      .replace("to-", "to-")
                      .split(" ")
                      .map((c) => c + "/20")
                      .join(
                        " "
                      )} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}
                  ></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}
                      >
                        <span className="text-white font-bold text-sm">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-gray-300 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form & Info Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Enhanced Contact Form - 2/3 width */}
              <div className="lg:col-span-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50">
                    {/* Enhanced Form Header */}
                    <div className="text-center mb-10">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                        <Send className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        Get Personalized Support
                      </h3>
                      <p className="text-gray-400 text-lg">
                        Tell us about your needs and we'll connect you with the
                        right expert
                      </p>
                    </div>

                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Enhanced Name & Email Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
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
                              className="h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                            />
                          </div>
                          <div className="space-y-2">
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
                              className="h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                            />
                          </div>
                        </div>

                        {/* Company & Role Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                              Company (Optional)
                            </label>
                            <Input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Your company name"
                              className="h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                              Current Role
                            </label>
                            <Input
                              type="text"
                              name="role"
                              value={formData.role}
                              onChange={handleInputChange}
                              placeholder="e.g. Software Engineer, Product Manager"
                              className="h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                            />
                          </div>
                        </div>

                        {/* Category & Priority Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                              Support Category *
                            </label>
                            <select
                              name="category"
                              value={formData.category}
                              onChange={handleInputChange}
                              required
                              className="w-full h-14 px-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-all duration-300"
                            >
                              <option value="">Select a category</option>
                              <option value="technical">
                                Technical Support
                              </option>
                              <option value="coaching">
                                Interview Coaching
                              </option>
                              <option value="billing">Billing & Account</option>
                              <option value="feature">Feature Request</option>
                              <option value="bug">Bug Report</option>
                              <option value="enterprise">
                                Enterprise Inquiry
                              </option>
                              <option value="partnership">Partnership</option>
                              <option value="feedback">General Feedback</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                              Priority Level
                            </label>
                            <select
                              name="priority"
                              value={formData.priority}
                              onChange={handleInputChange}
                              className="w-full h-14 px-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-all duration-300"
                            >
                              <option value="">Select priority</option>
                              <option value="low">Low - General inquiry</option>
                              <option value="medium">
                                Medium - Need help soon
                              </option>
                              <option value="high">High - Urgent issue</option>
                              <option value="critical">
                                Critical - Interview today
                              </option>
                            </select>
                          </div>
                        </div>

                        {/* Subject */}
                        <div className="space-y-2">
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
                            className="h-14 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                          />
                        </div>

                        {/* Enhanced Message */}
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                            Detailed Message *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            placeholder="Please provide detailed information about your inquiry. Include:&#10;• What you were trying to do&#10;• What happened instead&#10;• Any error messages&#10;• Your goals or expectations&#10;&#10;The more details you provide, the better we can assist you."
                            required
                            className="w-full px-4 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none resize-none transition-all duration-300"
                          />
                        </div>

                        {/* Newsletter Signup */}
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
                            className="text-gray-300 text-sm"
                          >
                            Subscribe to our newsletter for interview tips,
                            success stories, and platform updates
                          </label>
                        </div>

                        {/* Enhanced Submit Button */}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white font-bold py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none shadow-2xl hover:shadow-purple-500/25"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center gap-3">
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span className="text-lg">
                                Sending Message...
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-3">
                              <Send className="w-5 h-5" />
                              <span className="text-lg">Send Message</span>
                              <ArrowRight className="w-5 h-5" />
                            </div>
                          )}
                        </Button>

                        {/* Form Footer */}
                        <div className="text-center text-gray-400 text-sm">
                          <p>
                            Expected response time:{" "}
                            <span className="text-white font-semibold">
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
                      </form>
                    ) : (
                      <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                          <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-3xl font-bold text-white mb-6">
                          Message Received Successfully!
                        </h4>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto mb-6">
                          Thank you for reaching out! We've received your
                          message and assigned it ticket #
                          {Math.floor(Math.random() * 100000)}.
                        </p>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 max-w-sm mx-auto">
                          <p className="text-green-400 font-semibold">
                            Expected Response:{" "}
                            {formData.priority === "critical"
                              ? "< 30 minutes"
                              : formData.priority === "high"
                              ? "< 2 hours"
                              : formData.priority === "medium"
                              ? "< 4 hours"
                              : "< 24 hours"}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Enhanced Sidebar Info - 1/3 width */}
              <div className="space-y-8">
                {/* Quick Help Enhanced */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
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
                            className="group/item"
                          >
                            <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group-hover/item:scale-105 border border-transparent hover:border-gray-600/50">
                              <div
                                className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                              >
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className="text-white font-semibold text-sm truncate">
                                    {item.title}
                                  </p>
                                  {item.popular && (
                                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold ml-2">
                                      Popular
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-400 text-xs mt-1">
                                  {item.description}
                                </p>
                                <p className="text-gray-500 text-xs mt-1">
                                  {item.time}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-white group-hover/item:translate-x-1 transition-all flex-shrink-0" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Enhanced Office Hours */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-xl"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
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

                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        <div>
                          <span className="text-white font-medium">
                            Live Chat
                          </span>
                          <div className="text-emerald-400 text-xs">
                            AI + Human support
                          </div>
                        </div>
                        <span className="text-emerald-400 font-bold">24/7</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <div>
                          <span className="text-white font-medium">
                            Phone Support
                          </span>
                          <div className="text-blue-400 text-xs">
                            Direct specialist line
                          </div>
                        </div>
                        <span className="text-blue-300">9AM-6PM PST</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        <div>
                          <span className="text-white font-medium">
                            Email Support
                          </span>
                          <div className="text-purple-400 text-xs">
                            Detailed assistance
                          </div>
                        </div>
                        <span className="text-purple-300">4h response</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                        <div>
                          <span className="text-white font-medium">
                            Emergency Line
                          </span>
                          <div className="text-red-400 text-xs">
                            Live interview help
                          </div>
                        </div>
                        <span className="text-red-300">24/7</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Social Links */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          Community & Social
                        </h4>
                        <p className="text-gray-400 text-sm">Connect with us</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {
                          icon: Twitter,
                          name: "Twitter",
                          url: "https://twitter.com/prepwise",
                          color: "from-blue-500 to-blue-600",
                          followers: "12K",
                        },
                        {
                          icon: Linkedin,
                          name: "LinkedIn",
                          url: "https://linkedin.com/company/prepwise",
                          color: "from-blue-600 to-indigo-600",
                          followers: "25K",
                        },
                        {
                          icon: Github,
                          name: "GitHub",
                          url: "https://github.com/prepwise",
                          color: "from-gray-600 to-gray-700",
                          followers: "8K",
                        },
                      ].map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <Link
                            key={index}
                            href={social.url}
                            className="group/social relative"
                          >
                            <div
                              className={`w-full aspect-square bg-gradient-to-r ${social.color} rounded-xl flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden`}
                            >
                              <IconComponent className="w-6 h-6 text-white mb-1" />
                              <span className="text-white text-xs font-semibold">
                                {social.followers}
                              </span>
                              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-4 p-3 bg-gray-800/30 rounded-lg text-center">
                      <p className="text-gray-400 text-xs">
                        Join our Discord community for peer support and live Q&A
                        sessions
                      </p>
                      <Link
                        href="/discord"
                        className="text-purple-400 hover:text-purple-300 text-sm font-semibold"
                      >
                        Join Discord →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                <HelpCircle className="w-4 h-4 mr-2" />
                Support FAQ - Everything You Need to Know
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Support Questions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quick answers to help you get the support you need faster
              </p>
            </div>

            {/* Enhanced FAQ Accordion */}
            <div className="space-y-4 mb-12">
              {enhancedFaqItems.map((faq, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/5 to-gray-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
                    <button
                      onClick={() =>
                        setExpandedFaq(expandedFaq === index ? null : index)
                      }
                      className="w-full p-6 text-left flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-white">
                            {faq.question}
                          </h4>
                          {faq.popular && (
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-400">
                          Category: {faq.category}
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          expandedFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-700/50 pt-4">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced FAQ CTA */}
            <div className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <Link href="/help">
                    <span className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5" />
                      Browse Full Help Center
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </Link>
                </Button>

                <Button
                  asChild
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <Link href="#live-chat">
                    <span className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5" />
                      Start Live Chat
                    </span>
                  </Link>
                </Button>
              </div>

              <p className="text-gray-400 text-sm">
                Can't find what you're looking for? Our support team responds in
                under 2 minutes via live chat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Bottom CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/30 to-pink-900/20"></div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced Icon */}
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse">
              <Heart className="w-12 h-12 text-white" />
            </div>

            {/* Enhanced Content */}
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Your Success is{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Our Obsession
              </span>
            </h2>

            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              We're not just a support team – we're your career transformation
              partners. Every question matters, every challenge is our
              opportunity to help you succeed, and every victory is celebrated
              together.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
              >
                <Link href="mailto:support@prepwise.ai">
                  <span className="flex items-center gap-3 text-lg">
                    <Mail className="w-6 h-6" />
                    Get Instant Help Now
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-6 px-12 rounded-2xl border-2 border-gray-600 hover:border-gray-500 transition-all duration-300 shadow-xl"
              >
                <Link href="/templates">
                  <span className="flex items-center gap-3 text-lg">
                    <Target className="w-6 h-6" />
                    Start Interview Prep
                  </span>
                </Link>
              </Button>
            </div>

            {/* Final Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-emerald-400 mb-1">
                  24/7
                </div>
                <div className="text-gray-300 text-sm">
                  Emergency support available
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  2min
                </div>
                <div className="text-gray-300 text-sm">
                  Average response time
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  4.9★
                </div>
                <div className="text-gray-300 text-sm">
                  Support satisfaction rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
