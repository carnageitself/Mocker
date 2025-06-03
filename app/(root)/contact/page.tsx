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
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      subtitle: "Instant Response",
      description: "Get immediate help from our support team",
      detail: "Average response: 2 minutes",
      action: "#",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-500/20 to-green-500/20",
      available: true,
      badge: "Online Now",
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "24h Response",
      description: "Detailed assistance via email",
      detail: "support@prepwise.ai",
      action: "mailto:support@prepwise.ai",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/20 to-indigo-500/20",
      available: true,
      badge: "Priority Support",
    },
    {
      icon: Phone,
      title: "Phone Support",
      subtitle: "Direct Line",
      description: "Speak with our experts instantly",
      detail: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      available: true,
      badge: "Business Hours",
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      subtitle: "Book Meeting",
      description: "Schedule a personalized consultation",
      detail: "30-60 minute sessions",
      action: "/schedule",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-500/20 to-orange-500/20",
      available: true,
      badge: "Premium Feature",
    },
  ];

  const supportStats = [
    {
      icon: Zap,
      value: "< 2min",
      label: "Avg Response",
      color: "text-emerald-400",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Support Rating",
      color: "text-yellow-400",
    },
    {
      icon: Users,
      value: "50K+",
      label: "Happy Users",
      color: "text-blue-400",
    },
    { icon: Shield, value: "99.9%", label: "Uptime", color: "text-purple-400" },
  ];

  const quickHelp = [
    {
      icon: HelpCircle,
      title: "Getting Started",
      description: "New to PrepWise? Learn the basics",
      link: "/help/getting-started",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Bug,
      title: "Report Bug",
      description: "Found an issue? Let us know",
      link: "#bug-report",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Lightbulb,
      title: "Feature Request",
      description: "Suggest improvements or new features",
      link: "#feature-request",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Award,
      title: "Success Stories",
      description: "See how others achieved their goals",
      link: "/success-stories",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const faqItems = [
    {
      question: "How quickly will I receive support?",
      answer:
        "Live chat: Within 2 minutes • Email: Within 4 hours • Phone: Immediate during business hours",
    },
    {
      question: "What are your support hours?",
      answer:
        "Live chat: 24/7 • Phone: Mon-Fri 9AM-6PM PST • Email: Always monitored with 4-hour response guarantee",
    },
    {
      question: "Do you offer personalized help?",
      answer:
        "Yes! Schedule 1-on-1 consultation calls, get custom interview preparation plans, and receive dedicated account management.",
    },
    {
      question: "How can I provide feedback?",
      answer:
        "Use our contact form, email us directly, join our community Discord, or schedule a feedback call with our product team.",
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/40 to-pink-900/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-xl">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              24/7 Support Team • Always Here to Help
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
              Let's{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>

            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-medium mb-12 leading-relaxed">
              Whether you need instant support, want to share feedback, or have
              questions about PrepWise, our dedicated team is ready to help you
              succeed.
            </p>

            {/* Support Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
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
                      <div className="text-gray-400 text-sm font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods - Enhanced */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                <Headphones className="w-4 h-4 mr-2" />
                Multiple Ways to Reach Us
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Support Channel
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get help the way you prefer - instant chat, detailed emails,
                direct calls, or scheduled consultations
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="group relative">
                    {/* Glow Effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${method.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    ></div>

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full">
                      {/* Status Badge */}
                      {method.available && (
                        <div className="absolute top-6 right-6">
                          <div
                            className={`px-3 py-1 bg-gradient-to-r ${method.gradient} rounded-full text-white text-xs font-bold`}
                          >
                            {method.badge}
                          </div>
                        </div>
                      )}

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
                        <p className="text-gray-400 text-sm font-medium">
                          {method.detail}
                        </p>
                      </div>

                      {/* Action Button */}
                      <Link href={method.action} className="group/btn">
                        <Button
                          className={`w-full bg-gradient-to-r ${method.gradient} hover:saturate-110 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl`}
                        >
                          <span className="relative flex items-center justify-center gap-2">
                            Connect Now
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

      {/* Contact Form & Info Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form - 2/3 width */}
              <div className="lg:col-span-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50">
                    {/* Form Header */}
                    <div className="text-center mb-10">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                        <Send className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        Send us a Message
                      </h3>
                      <p className="text-gray-400 text-lg">
                        Get personalized help from our support experts
                      </p>
                    </div>

                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Name & Email Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                              Full Name
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
                              Email Address
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

                        {/* Category */}
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                            Support Category
                          </label>
                          <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                            className="w-full h-14 px-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-all duration-300"
                          >
                            <option value="">Select a category</option>
                            <option value="general">General Support</option>
                            <option value="technical">Technical Issue</option>
                            <option value="billing">Billing & Account</option>
                            <option value="feature">Feature Request</option>
                            <option value="bug">Bug Report</option>
                            <option value="partnership">
                              Partnership Inquiry
                            </option>
                            <option value="feedback">
                              Feedback & Suggestions
                            </option>
                          </select>
                        </div>

                        {/* Subject */}
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                            Subject
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

                        {/* Message */}
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                            Message
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            placeholder="Please provide detailed information about your inquiry. The more details you provide, the better we can assist you."
                            required
                            className="w-full px-4 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none resize-none transition-all duration-300"
                          />
                        </div>

                        {/* Submit Button */}
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
                            </div>
                          )}
                        </Button>
                      </form>
                    ) : (
                      <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                          <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-3xl font-bold text-white mb-6">
                          Message Sent Successfully!
                        </h4>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
                          Thank you for reaching out! We've received your
                          message and our team will respond within 4 hours.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar Info - 1/3 width */}
              <div className="space-y-8">
                {/* Quick Help */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <HelpCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          Quick Help
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Common resources
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {quickHelp.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={index}
                            href={item.link}
                            className="group/item"
                          >
                            <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group-hover/item:scale-105">
                              <div
                                className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}
                              >
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <p className="text-white font-semibold">
                                  {item.title}
                                </p>
                                <p className="text-gray-400 text-sm">
                                  {item.description}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-white group-hover/item:translate-x-1 transition-all" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-xl"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          Support Hours
                        </h4>
                        <p className="text-gray-400 text-sm">
                          When we're available
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        <span className="text-white font-medium">
                          Live Chat
                        </span>
                        <span className="text-emerald-400 font-bold">24/7</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                        <span className="text-white font-medium">
                          Phone Support
                        </span>
                        <span className="text-gray-300">9AM-6PM PST</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                        <span className="text-white font-medium">Email</span>
                        <span className="text-gray-300">4 hour response</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          Follow Us
                        </h4>
                        <p className="text-gray-400 text-sm">Stay connected</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {
                          icon: Twitter,
                          name: "Twitter",
                          url: "https://twitter.com/prepwise",
                          color: "from-blue-500 to-blue-600",
                        },
                        {
                          icon: Linkedin,
                          name: "LinkedIn",
                          url: "https://linkedin.com/company/prepwise",
                          color: "from-blue-600 to-indigo-600",
                        },
                        {
                          icon: Github,
                          name: "GitHub",
                          url: "https://github.com/prepwise",
                          color: "from-gray-600 to-gray-700",
                        },
                      ].map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <Link
                            key={index}
                            href={social.url}
                            className="group/social"
                          >
                            <div
                              className={`w-full aspect-square bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg`}
                            >
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Redesigned */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                <HelpCircle className="w-4 h-4 mr-2" />
                Frequently Asked Questions
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Got{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Questions?
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Quick answers to help you get started faster
              </p>
            </div>

            {/* FAQ Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {faqItems.map((faq, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full">
                    <h4 className="text-xl font-bold text-white mb-4 leading-tight">
                      {faq.question}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ CTA */}
            <div className="text-center">
              <Button
                asChild
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Link href="/help">
                  <span className="flex items-center gap-3">
                    Browse Full Help Center
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Bottom CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/30 to-pink-900/20"></div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse">
              <Heart className="w-12 h-12 text-white" />
            </div>

            {/* Content */}
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Your Success is{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>

            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              We're not just a support team – we're your partners in achieving
              interview success. Every question, every challenge, every victory
              matters to us.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
              >
                <Link href="mailto:support@prepwise.ai">
                  <span className="flex items-center gap-3 text-lg">
                    <Mail className="w-6 h-6" />
                    Get Instant Help
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-6 px-12 rounded-2xl border-2 border-gray-600 hover:border-gray-500 transition-all duration-300 shadow-xl"
              >
                <Link href="/">
                  <span className="flex items-center gap-3 text-lg">
                    <ArrowRight className="w-6 h-6" />
                    Back to Platform
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
