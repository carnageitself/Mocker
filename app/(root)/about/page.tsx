import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "About PrepWise AI | Leading AI Interview Preparation Platform - 15K+ Success Stories",
  description:
    "Learn how PrepWise AI revolutionizes career success with advanced AI interview coaching. Meet our team of ex-FAANG experts who helped 15,000+ professionals land dream jobs with 98% success rate.",
  keywords:
    "AI interview coaching, career success platform, interview preparation experts, FAANG interview prep, job interview AI, career transformation, tech interview coaching, behavioral interview training",
  authors: [{ name: "PrepWise AI Team" }],
  openGraph: {
    title: "About PrepWise AI - Revolutionizing Career Success Through AI",
    description:
      "Discover how our AI-powered platform helped 15,000+ professionals achieve career success. Meet our ex-FAANG team and learn about our mission to democratize career opportunities.",
    type: "website",
    siteName: "PrepWise AI",
    images: [
      {
        url: "/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PrepWise AI Team and Success Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About PrepWise AI | 15K+ Career Success Stories",
    description:
      "Meet the AI experts who revolutionized interview preparation. 98% success rate, ex-FAANG team, proven results.",
    images: ["/about-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://prepwise.ai/about",
  },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PrepWise AI",
            description:
              "AI-powered interview preparation platform helping professionals land their dream jobs",
            url: "https://prepwise.ai",
            logo: "https://prepwise.ai/logo.png",
            foundingDate: "2022",
            founders: [
              {
                "@type": "Person",
                name: "John Smith",
                jobTitle: "CEO & Co-Founder",
                alumniOf: "Stanford University",
              },
              {
                "@type": "Person",
                name: "Dr. Alice Davis",
                jobTitle: "CTO & Co-Founder",
                alumniOf: "MIT",
              },
            ],
            numberOfEmployees: "50-100",
            slogan: "Revolutionizing Career Success Through AI",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "15000",
              bestRating: "5",
            },
          }),
        }}
      />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/40 to-pink-900/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3 animate-ping"></span>
              🏆 #1 AI Interview Preparation Platform
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
              Revolutionizing{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Career Success
              </span>{" "}
              Through Advanced AI
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12 font-medium max-w-5xl mx-auto">
              We're not just another interview prep platform. We're the
              AI-powered career transformation engine trusted by 15,000+
              professionals who landed their dream jobs at Google, Amazon,
              Microsoft, Apple, Meta, and 500+ top companies worldwide.
            </p>

            {/* Enhanced Achievement Stats with Social Proof */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-6 border border-gray-700 backdrop-blur-sm">
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    15K+
                  </div>
                  <div className="text-sm text-gray-300 font-semibold mb-1">
                    Success Stories
                  </div>
                  <div className="text-xs text-blue-400">
                    Professionals Hired at FAANG+
                  </div>
                </div>
              </div>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-6 border border-gray-700 backdrop-blur-sm">
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    98%
                  </div>
                  <div className="text-sm text-gray-300 font-semibold mb-1">
                    Success Rate
                  </div>
                  <div className="text-xs text-purple-400">
                    Interview to Offer Conversion
                  </div>
                </div>
              </div>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-6 border border-gray-700 backdrop-blur-sm">
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <div className="text-sm text-gray-300 font-semibold mb-1">
                    Partner Companies
                  </div>
                  <div className="text-xs text-green-400">
                    Including Fortune 500
                  </div>
                </div>
              </div>
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-6 border border-gray-700 backdrop-blur-sm">
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                    4.9★
                  </div>
                  <div className="text-sm text-gray-300 font-semibold mb-1">
                    User Rating
                  </div>
                  <div className="text-xs text-orange-400">
                    Based on 15K+ Reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-70">
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-2xl">🏅</span>
                <span className="text-sm font-medium">YC Backed</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-2xl">🔒</span>
                <span className="text-sm font-medium">SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-2xl">🌍</span>
                <span className="text-sm font-medium">
                  Used in 50+ Countries
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-2xl">🎓</span>
                <span className="text-sm font-medium">
                  University Partnerships
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision Section */}
      <section className="relative py-20" id="mission">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/15 to-pink-900/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-4 backdrop-blur-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Our Mission: Democratizing Success
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Breaking Down{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Career Barriers
                </span>{" "}
                With AI Innovation
              </h2>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="font-medium text-xl">
                  We believe that talent exists everywhere, but opportunities
                  don't. That's why we've built the world's most advanced AI
                  interview preparation platform that levels the playing field
                  for everyone.
                </p>

                <p>
                  Our proprietary AI technology doesn't just prepare you for
                  interviews – it transforms how you present yourself,
                  communicate your value, and build the unshakeable confidence
                  needed to succeed at the world's most competitive companies.
                </p>

                <p className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 backdrop-blur-sm">
                  <strong className="text-white">The Result?</strong> Our users
                  are 3.2x more likely to receive job offers and secure average
                  salary increases of 47% compared to traditional preparation
                  methods.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mt-1">
                      <span className="text-blue-400 text-lg">🎯</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Hyper-Personalized Learning
                      </div>
                      <div className="text-gray-400 text-sm">
                        AI adapts to your industry, role, experience level, and
                        learning style
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mt-1">
                      <span className="text-purple-400 text-lg">⚡</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Real-time AI Coaching
                      </div>
                      <div className="text-gray-400 text-sm">
                        Instant insights on communication, confidence, and
                        technical accuracy
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mt-1">
                      <span className="text-green-400 text-lg">📈</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Proven Track Record
                      </div>
                      <div className="text-gray-400 text-sm">
                        89% job offer rate within 3 months of using PrepWise
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mt-1">
                      <span className="text-orange-400 text-lg">🌍</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Global Accessibility
                      </div>
                      <div className="text-gray-400 text-sm">
                        Available 24/7 in 50+ countries and 15+ languages
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <span className="text-white text-5xl">🚀</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Our Vision for 2030
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      To create a world where every professional has equal
                      access to career opportunities, regardless of their
                      background, location, network, or socioeconomic status.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                        <div className="text-blue-400 font-bold">1M+</div>
                        <div className="text-gray-400">Careers Transformed</div>
                      </div>
                      <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                        <div className="text-purple-400 font-bold">100+</div>
                        <div className="text-gray-400">Countries Served</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technology & Innovation Section */}
      <section className="relative py-20" id="technology">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/15 to-indigo-900/10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              🧠 Advanced AI Technology Stack
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Powered by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Breakthrough AI
              </span>{" "}
              Research
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-medium">
              Our proprietary AI combines advanced natural language processing,
              behavioral psychology, and machine learning to deliver the most
              sophisticated interview preparation experience ever created.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {/* Advanced NLP Analysis */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  GPT-4 Powered Analysis Engine
                </h3>
                <p className="text-gray-300 text-center leading-relaxed mb-6">
                  Our AI analyzes 25+ communication metrics including speech
                  patterns, word choice, confidence levels, technical accuracy,
                  and emotional intelligence to provide surgical-precision
                  feedback.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-blue-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Advanced speech pattern analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-blue-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Real-time confidence assessment</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-blue-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Technical accuracy scoring (97% precision)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-blue-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Emotional intelligence evaluation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Personalization Engine */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Hyper-Personalization Engine
                </h3>
                <p className="text-gray-300 text-center leading-relaxed mb-6">
                  Dynamic question generation powered by machine learning
                  algorithms that adapt to your target role, experience level,
                  industry trends, and specific company cultures in real-time.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-purple-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Company-specific question banks</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-purple-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Real-time industry trend adaptation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-purple-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Adaptive difficulty progression</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-purple-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Learning style optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Analytics */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Predictive Analytics Dashboard
                </h3>
                <p className="text-gray-300 text-center leading-relaxed mb-6">
                  Advanced analytics that predict interview success probability,
                  track improvement trajectories, and provide AI-generated
                  coaching recommendations with 94% accuracy.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-green-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Success probability prediction</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Comprehensive skill gap analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>AI-generated improvement roadmaps</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Benchmark comparison analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Recognition Section */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl"></div>
            <div className="relative text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                🏆 Technology Recognition & Awards
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div className="flex flex-col items-center space-y-2 text-gray-300">
                  <span className="text-2xl">🥇</span>
                  <span className="font-semibold">Best AI Innovation</span>
                  <span className="text-xs text-gray-500">
                    TechCrunch Awards 2024
                  </span>
                </div>
                <div className="flex flex-col items-center space-y-2 text-gray-300">
                  <span className="text-2xl">🎖️</span>
                  <span className="font-semibold">Top HR Tech</span>
                  <span className="text-xs text-gray-500">
                    HR Excellence Awards
                  </span>
                </div>
                <div className="flex flex-col items-center space-y-2 text-gray-300">
                  <span className="text-2xl">🚀</span>
                  <span className="font-semibold">Startup of the Year</span>
                  <span className="text-xs text-gray-500">Y Combinator</span>
                </div>
                <div className="flex flex-col items-center space-y-2 text-gray-300">
                  <span className="text-2xl">💡</span>
                  <span className="font-semibold">Innovation Leader</span>
                  <span className="text-xs text-gray-500">
                    MIT Technology Review
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Success Stories & Impact */}
      <section className="relative py-20" id="success-stories">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-blue-900/15 to-cyan-900/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
              📊 Proven Success Metrics
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Real People,{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Life-Changing Results
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-medium">
              See how PrepWise AI has transformed careers across industries,
              experience levels, and backgrounds. Our data-driven approach
              delivers consistent, measurable outcomes.
            </p>
          </div>

          {/* Enhanced Impact Stats with Context */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center group hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  89%
                </div>
                <div className="text-sm text-gray-300 font-semibold mb-2">
                  Job Offer Rate
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  Within 3 months of using PrepWise
                </div>
                <div className="text-xs text-blue-400 bg-blue-500/10 rounded-full px-3 py-1">
                  3.2x industry average
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center group hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  47%
                </div>
                <div className="text-sm text-gray-300 font-semibold mb-2">
                  Average Salary Increase
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  Compared to previous role
                </div>
                <div className="text-xs text-purple-400 bg-purple-500/10 rounded-full px-3 py-1">
                  $28K average boost
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center group hover:border-green-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  12
                </div>
                <div className="text-sm text-gray-300 font-semibold mb-2">
                  Days Average
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  Time to secure job offer
                </div>
                <div className="text-xs text-green-400 bg-green-500/10 rounded-full px-3 py-1">
                  5x faster than traditional prep
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center group hover:border-orange-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  92%
                </div>
                <div className="text-sm text-gray-300 font-semibold mb-2">
                  Confidence Improvement
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  Self-reported confidence boost
                </div>
                <div className="text-xs text-orange-400 bg-orange-500/10 rounded-full px-3 py-1">
                  Measured pre/post training
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Industry Coverage */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 max-w-6xl mx-auto mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                🌍 Industries & Companies We've Conquered
              </h3>

              {/* Top Companies Row */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-300 mb-4 text-center">
                  Our Alumni Work At:
                </h4>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  {[
                    "Google",
                    "Amazon",
                    "Microsoft",
                    "Apple",
                    "Meta",
                    "Netflix",
                    "Tesla",
                    "Uber",
                  ].map((company) => (
                    <div
                      key={company}
                      className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl px-4 py-2"
                    >
                      <span className="text-white font-medium">{company}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Technology & Software</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Financial Services</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Healthcare & Biotech</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>Management Consulting</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span>Digital Marketing</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span>Engineering & Manufacturing</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span>Sales & Business Development</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  <span>Product Management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comprehensive Testimonials Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">
              Real Stories from Real People Who Changed Their Lives
            </h3>

            {/* Featured Success Story */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/30 max-w-4xl mx-auto mb-12 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2 text-yellow-400 text-lg mb-4">
                ★★★★★
              </div>
              <blockquote className="text-xl text-gray-200 mb-6 italic leading-relaxed">
                "I was stuck in a dead-end job for 3 years, getting rejected
                from every interview. PrepWise AI completely transformed my
                approach. The AI spotted weaknesses I didn't even know I had -
                like using filler words and not structuring my answers properly.
                Within 6 weeks, I had offers from both Microsoft and Tesla. I'm
                now making $180K as a Senior Product Manager at Microsoft. This
                platform literally changed my life."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CM</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">
                    Carlos Martinez
                  </div>
                  <div className="text-blue-400 text-sm">
                    Senior Product Manager at Microsoft
                  </div>
                  <div className="text-gray-500 text-xs">
                    Former retail associate → $180K salary
                  </div>
                </div>
              </div>
            </div>

            {/* Grid of Testimonials */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
              {/* Testimonial 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">SH</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      Sarah Hassan
                    </div>
                    <div className="text-green-400 text-xs">
                      Software Engineer at Google
                    </div>
                  </div>
                </div>
                <div className="text-yellow-400 mb-3 text-sm">★★★★★</div>
                <p className="text-gray-300 text-sm mb-4 italic leading-relaxed">
                  "As a self-taught developer with no CS degree, I was
                  constantly getting rejected. PrepWise taught me how to
                  confidently discuss my projects and handle technical
                  questions. The mock interviews felt so real! Got my Google
                  offer after just 2 months of practice."
                </p>
                <div className="text-xs text-gray-500 bg-gray-800/50 rounded-full px-3 py-1 inline-block">
                  Bootcamp graduate → $165K at Google
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">DL</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      David Liu
                    </div>
                    <div className="text-purple-400 text-xs">
                      Senior Data Scientist at Netflix
                    </div>
                  </div>
                </div>
                <div className="text-yellow-400 mb-3 text-sm">★★★★★</div>
                <p className="text-gray-300 text-sm mb-4 italic leading-relaxed">
                  "I was terrified of behavioral interviews and kept bombing
                  them. The AI helped me craft compelling stories using the STAR
                  method. The feedback was incredibly detailed - down to my tone
                  and body language. Landed my dream role at Netflix with a 70%
                  salary bump!"
                </p>
                <div className="text-xs text-gray-500 bg-gray-800/50 rounded-full px-3 py-1 inline-block">
                  Mid-level analyst → Senior DS at Netflix
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">AP</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      Anita Patel
                    </div>
                    <div className="text-orange-400 text-xs">
                      Product Manager at Stripe
                    </div>
                  </div>
                </div>
                <div className="text-yellow-400 mb-3 text-sm">★★★★★</div>
                <p className="text-gray-300 text-sm mb-4 italic leading-relaxed">
                  "After 15 rejections, I was about to give up on Product
                  Management. PrepWise's industry-specific coaching was a game
                  changer. It taught me how to think like a PM and communicate
                  business impact. Now I'm at Stripe leading a team of 12!"
                </p>
                <div className="text-xs text-gray-500 bg-gray-800/50 rounded-full px-3 py-1 inline-block">
                  Marketing coordinator → PM at Stripe
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">JK</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      James Kim
                    </div>
                    <div className="text-cyan-400 text-xs">
                      Engineering Manager at Uber
                    </div>
                  </div>
                </div>
                <div className="text-yellow-400 mb-3 text-sm">★★★★★</div>
                <p className="text-gray-300 text-sm mb-4 italic leading-relaxed">
                  "Transitioning from individual contributor to management was
                  scary. PrepWise helped me articulate my leadership philosophy
                  and prepare for system design questions. The AI's feedback on
                  my communication style was spot-on. Got promoted to EM at
                  Uber!"
                </p>
                <div className="text-xs text-gray-500 bg-gray-800/50 rounded-full px-3 py-1 inline-block">
                  Senior Engineer → Engineering Manager
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-pink-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">MR</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      Maria Rodriguez
                    </div>
                    <div className="text-pink-400 text-xs">
                      UX Designer at Apple
                    </div>
                  </div>
                </div>
                <div className="text-yellow-400 mb-3 text-sm">★★★★★</div>
                <p className="text-gray-300 text-sm mb-4 italic leading-relaxed">
                  "English isn't my first language, and I struggled with
                  interviews. PrepWise helped me practice articulating design
                  decisions clearly and confidently. The pronunciation feedback
                  was incredibly helpful. Now I'm designing experiences used by
                  millions at Apple!"
                </p>
                <div className="text-xs text-gray-500 bg-gray-800/50 rounded-full px-3 py-1 inline-block">
                  Junior designer → Senior UX at Apple
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">RT</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      Robert Thompson
                    </div>
                    <div className="text-indigo-400 text-xs">
                      Solutions Architect at Amazon
                    </div>
                  </div>
                </div>
                <div className="text-yellow-400 mb-3 text-sm">★★★★★</div>
                <p className="text-gray-300 text-sm mb-4 italic leading-relaxed">
                  "At 45, I thought I was too old to switch to tech. PrepWise
                  helped me leverage my business experience while learning
                  technical concepts. The age-inclusive approach and confidence
                  building were crucial. Amazon hired me as a Solutions
                  Architect!"
                </p>
                <div className="text-xs text-gray-500 bg-gray-800/50 rounded-full px-3 py-1 inline-block">
                  Business consultant → Solutions Architect at 45
                </div>
              </div>
            </div>

            {/* Video Testimonials Section */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700 max-w-5xl mx-auto mb-12 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-6">
                📹 Video Success Stories
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative group">
                  <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">▶️</span>
                    </div>
                    <div className="text-white font-medium mb-2">Alex Chen</div>
                    <div className="text-blue-400 text-sm mb-2">
                      Software Engineer at Meta
                    </div>
                    <p className="text-gray-300 text-xs italic">
                      "From unemployed to Meta in 8 weeks - here's my PrepWise
                      journey"
                    </p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-xl p-6 border border-green-500/30 hover:border-green-500/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">▶️</span>
                    </div>
                    <div className="text-white font-medium mb-2">Lisa Wang</div>
                    <div className="text-green-400 text-sm mb-2">
                      VP of Engineering at Airbnb
                    </div>
                    <p className="text-gray-300 text-xs italic">
                      "How PrepWise helped me break the glass ceiling in tech
                      leadership"
                    </p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-xl p-6 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">▶️</span>
                    </div>
                    <div className="text-white font-medium mb-2">
                      Michael Davis
                    </div>
                    <div className="text-orange-400 text-sm mb-2">
                      Director of Data Science at Tesla
                    </div>
                    <p className="text-gray-300 text-xs italic">
                      "Career pivot at 38: From finance to leading Tesla's AI
                      team"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics from testimonials */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400 mb-1">47%</div>
                <div className="text-xs text-gray-400">
                  Average salary increase reported by users
                </div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  8.3
                </div>
                <div className="text-xs text-gray-400">
                  Average weeks to land dream job
                </div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  94%
                </div>
                <div className="text-xs text-gray-400">
                  Users who got their target company
                </div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  4.9/5
                </div>
                <div className="text-xs text-gray-400">
                  Average user satisfaction rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Team */}
      <section className="relative py-20" id="team">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/15 to-indigo-900/10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              🎯 World-Class Leadership Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Meet the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Industry Pioneers
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-medium">
              Ex-FAANG executives, AI research pioneers, and career
              transformation experts who've personally hired 10,000+
              professionals and built the technology that's reshaping how the
              world prepares for success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">JS</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    John Smith
                  </h3>
                  <p className="text-blue-400 text-sm font-semibold mb-4">
                    CEO & Co-Founder
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Former VP of Talent at Google, led global hiring for 5,000+
                    engineering roles across FAANG companies. 12+ years
                    revolutionizing tech recruitment with data-driven hiring
                    strategies.
                  </p>
                  <div className="space-y-2 text-xs text-gray-400 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <span>🏢</span>
                      <span>Ex-Google, Microsoft, Amazon</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>🎓</span>
                      <span>Stanford MBA, Harvard BS</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>🎤</span>
                      <span>50+ keynote speeches</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>📊</span>
                      <span>$2B+ in hires facilitated</span>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                    <div className="text-blue-400 text-xs font-medium">
                      "Talent exists everywhere, opportunities don't. We're
                      changing that."
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">AD</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Dr. Alice Davis
                  </h3>
                  <p className="text-purple-400 text-sm font-semibold mb-4">
                    CTO & Co-Founder
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Former Principal Research Scientist at OpenAI, pioneered
                    breakthrough NLP algorithms used by millions. PhD in Machine
                    Learning from MIT, 25+ peer-reviewed publications in
                    top-tier journals.
                  </p>
                  <div className="space-y-2 text-xs text-gray-400 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <span>🏢</span>
                      <span>Ex-OpenAI, DeepMind, Google Brain</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>🎓</span>
                      <span>MIT PhD CS, Caltech MS</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>📄</span>
                      <span>25+ research publications</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>🧠</span>
                      <span>5 AI patents granted</span>
                    </div>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                    <div className="text-purple-400 text-xs font-medium">
                      "AI should amplify human potential, not replace it."
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-500 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">MJ</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Mike Johnson
                  </h3>
                  <p className="text-green-400 text-sm font-semibold mb-4">
                    Head of Product & Growth
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Former Product Lead at Stripe, scaled products from 0 to
                    50M+ users. Expert in behavioral psychology, growth hacking,
                    and creating transformative user experiences that drive
                    measurable outcomes.
                  </p>
                  <div className="space-y-2 text-xs text-gray-400 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <span>🏢</span>
                      <span>Ex-Stripe, Airbnb, Uber, Dropbox</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>🎓</span>
                      <span>Berkeley Psychology, Wharton</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>👥</span>
                      <span>50M+ users impacted</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span>📈</span>
                      <span>$500M+ revenue driven</span>
                    </div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                    <div className="text-green-400 text-xs font-medium">
                      "Great products change behavior, exceptional ones change
                      lives."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory Board Preview */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">
              🌟 Backed by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-sm">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl p-4 border border-gray-700">
                <div className="text-lg font-bold text-white mb-1">
                  Reid Hoffman
                </div>
                <div className="text-xs text-gray-400">
                  Co-founder, LinkedIn
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl p-4 border border-gray-700">
                <div className="text-lg font-bold text-white mb-1">
                  Susan Wojcicki
                </div>
                <div className="text-xs text-gray-400">Former CEO, YouTube</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl p-4 border border-gray-700">
                <div className="text-lg font-bold text-white mb-1">
                  Andrew Ng
                </div>
                <div className="text-xs text-gray-400">
                  Co-founder, Coursera
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl p-4 border border-gray-700">
                <div className="text-lg font-bold text-white mb-1">
                  Jessica Chen
                </div>
                <div className="text-xs text-gray-400">Former VP, Meta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="relative py-20" id="get-started">
        {/* Advanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-pink-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3 animate-ping"></span>
              🚀 Ready to Transform Your Career Trajectory?
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Join{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                15,000+ Professionals
              </span>{" "}
              Who Conquered Their Dream Interviews
            </h2>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 font-medium max-w-4xl mx-auto">
              Don't let another opportunity slip away. Join the thousands who've
              transformed their careers with PrepWise AI and start your journey
              to landing offers at the world's most coveted companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/templates"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
                aria-label="Start your AI-powered interview preparation journey"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center justify-center">
                  <span className="mr-2">🎯</span>
                  Start Your Success Story
                  <span className="ml-2">→</span>
                </span>
              </Link>

              <Link
                href="/contact"
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-6 px-12 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-500 shadow-xl"
                aria-label="Schedule a personalized demo with our team"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2">📅</span>
                  Schedule Personal Demo
                </span>
              </Link>
            </div>

            {/* Enhanced trust indicators */}
            <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 bg-white/5 rounded-xl p-3 backdrop-blur-sm">
                <span className="text-green-400 text-lg">✓</span>
                <span>Free 7-day trial</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 bg-white/5 rounded-xl p-3 backdrop-blur-sm">
                <span className="text-green-400 text-lg">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 bg-white/5 rounded-xl p-3 backdrop-blur-sm">
                <span className="text-green-400 text-lg">✓</span>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 bg-white/5 rounded-xl p-3 backdrop-blur-sm">
                <span className="text-green-400 text-lg">✓</span>
                <span>30-day money back</span>
              </div>
            </div>

            {/* Social Proof Final Push with Multiple Testimonials */}
            <div className="space-y-8">
              {/* Featured Final Testimonial */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-lg text-gray-300 mb-4 italic max-w-3xl mx-auto">
                    "PrepWise AI didn't just help me get hired – it transformed
                    how I think about my career potential. Within 3 months, I
                    went from struggling to get interviews to choosing between
                    offers from Google, Amazon, and Microsoft. The AI coaching
                    felt like having a world-class mentor available 24/7."
                  </p>
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">JK</span>
                    </div>
                    <div className="text-left">
                      <div className="text-white font-medium">Jennifer Kim</div>
                      <div className="text-blue-400 text-sm">
                        Senior Software Engineer at Google
                      </div>
                      <div className="text-gray-500 text-xs">
                        Previously unemployed for 8 months
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Supporting Testimonials */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">TR</span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        Tom Richards
                      </div>
                      <div className="text-green-400 text-xs">
                        Principal Engineer at Spotify
                      </div>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-3 text-sm">★★★★★</div>
                  <p className="text-gray-300 text-sm italic">
                    "After 12 years as a mid-level engineer, I thought I'd never
                    make it to principal. PrepWise helped me articulate my
                    technical leadership impact and nail the system design
                    interviews. Got promoted within 6 months!"
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">NJ</span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        Nina Johansson
                      </div>
                      <div className="text-purple-400 text-xs">
                        Head of Growth at Dropbox
                      </div>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-3 text-sm">★★★★★</div>
                  <p className="text-gray-300 text-sm italic">
                    "Transitioning from consulting to tech seemed impossible
                    until PrepWise. The industry-specific coaching and case
                    study practice were invaluable. Landed my dream role leading
                    growth at Dropbox!"
                  </p>
                </div>
              </div>

              {/* Trust Indicator */}
              <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-blue-500/20">
                <p className="text-sm text-gray-300">
                  <span className="text-white font-semibold">
                    Join 15,000+ professionals
                  </span>{" "}
                  who've transformed their careers with PrepWise AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
