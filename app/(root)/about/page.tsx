import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/40 to-pink-900/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3 animate-ping"></span>
              About PrepWise AI
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
              Revolutionizing{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Career Success
              </span>{" "}
              Through AI
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12 font-medium max-w-4xl mx-auto">
              We're not just another interview prep platform. We're the
              AI-powered career transformation engine that's helped over 15,000
              professionals land their dream jobs with confidence and expertise.
            </p>

            {/* Key Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  15K+
                </div>
                <div className="text-sm text-gray-400 font-semibold">
                  Success Stories
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-sm text-gray-400 font-semibold">
                  Success Rate
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-400 font-semibold">
                  Partner Companies
                </div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-400 font-semibold">
                  Industries Covered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/15 to-pink-900/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-4 backdrop-blur-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Our Mission
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Democratizing{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Career Opportunities
                </span>
              </h2>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="font-medium">
                  We believe that talent exists everywhere, but opportunities
                  don't. That's why we've built the world's most advanced AI
                  interview preparation platform that adapts to your unique
                  background, goals, and learning style.
                </p>

                <p>
                  Our cutting-edge technology doesn't just prepare you for
                  interviews – it transforms how you present yourself,
                  communicate your value, and build the confidence needed to
                  succeed in today's competitive job market.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mt-1">
                      <span className="text-blue-400 text-lg">🎯</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Personalized Learning
                      </div>
                      <div className="text-gray-400 text-sm">
                        AI adapts to your industry, role, and experience level
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mt-1">
                      <span className="text-purple-400 text-lg">⚡</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        Real-time Feedback
                      </div>
                      <div className="text-gray-400 text-sm">
                        Instant insights on communication and performance
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
                      Our Vision
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      To create a world where every professional has equal
                      access to career opportunities, regardless of their
                      background, location, or network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section className="relative py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/15 to-indigo-900/10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              Advanced Technology
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Powered by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cutting-Edge AI
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Our proprietary AI technology combines natural language
              processing, behavioral analysis, and industry expertise to deliver
              unprecedented interview preparation experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* AI Analysis */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Advanced NLP Analysis
                </h3>
                <p className="text-gray-300 text-center leading-relaxed mb-6">
                  Our AI analyzes speech patterns, word choice, confidence
                  levels, and communication effectiveness to provide detailed,
                  actionable feedback.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-blue-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Speech pattern analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-blue-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Confidence assessment</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-blue-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Communication scoring</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Personalization Engine */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Smart Personalization
                </h3>
                <p className="text-gray-300 text-center leading-relaxed mb-6">
                  Dynamic question generation based on your target role,
                  experience level, industry trends, and specific company
                  requirements.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-purple-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Role-specific questions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-purple-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Industry adaptation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-purple-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Difficulty scaling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Tracking */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Performance Analytics
                </h3>
                <p className="text-gray-300 text-center leading-relaxed mb-6">
                  Comprehensive tracking of your improvement over time with
                  detailed metrics, progress reports, and personalized coaching
                  recommendations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-green-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Progress tracking</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Skill gap analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Personalized coaching</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Impact */}
      <section className="relative py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-blue-900/15 to-cyan-900/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
              Success Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Real People,{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Real Results
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              See how PrepWise has transformed careers across industries and
              experience levels.
            </p>
          </div>

          {/* Detailed Impact Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl"></div>
              <div className="relative">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  89%
                </div>
                <div className="text-sm text-gray-400 font-semibold mb-2">
                  Job Offer Rate
                </div>
                <div className="text-xs text-gray-500">
                  Within 3 months of using PrepWise
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl"></div>
              <div className="relative">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  47%
                </div>
                <div className="text-sm text-gray-400 font-semibold mb-2">
                  Salary Increase
                </div>
                <div className="text-xs text-gray-500">
                  Average salary improvement
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl"></div>
              <div className="relative">
                <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  12
                </div>
                <div className="text-sm text-gray-400 font-semibold mb-2">
                  Days Average
                </div>
                <div className="text-xs text-gray-500">
                  Time to secure job offer
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl"></div>
              <div className="relative">
                <div className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  92%
                </div>
                <div className="text-sm text-gray-400 font-semibold mb-2">
                  Confidence Boost
                </div>
                <div className="text-xs text-gray-500">
                  Report increased interview confidence
                </div>
              </div>
            </div>
          </div>

          {/* Industry Coverage */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl"></div>
            <div className="relative text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Industries We Cover
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Technology</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Finance</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Healthcare</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>Consulting</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span>Marketing</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span>Engineering</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span>Sales</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  <span>Product</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/15 to-indigo-900/10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              Leadership Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Meet the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Visionaries
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Industry veterans and AI pioneers dedicated to transforming how
              the world prepares for career success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Former Head of Talent at Google with 12+ years of experience
                    in tech recruitment. Led hiring for 500+ engineering roles.
                  </p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <div>• Ex-Google, Microsoft, Amazon</div>
                    <div>• Stanford MBA</div>
                    <div>• 50+ speaking engagements</div>
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
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    AI researcher and former Principal Engineer at OpenAI. PhD
                    in Machine Learning from MIT, 15+ published papers in NLP.
                  </p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <div>• Ex-OpenAI, DeepMind</div>
                    <div>• MIT PhD, CS</div>
                    <div>• 15+ research publications</div>
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
                    Head of Product
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Former Product Lead at Stripe, scaled products from 0 to
                    10M+ users. Expert in user experience and behavioral
                    psychology.
                  </p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <div>• Ex-Stripe, Airbnb, Uber</div>
                    <div>• Berkeley Psychology</div>
                    <div>• 10M+ users impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        {/* Advanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-pink-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3 animate-ping"></span>
              Ready to Transform Your Career?
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Join{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                15,000+ Professionals
              </span>{" "}
              Who Landed Their Dream Jobs
            </h2>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 font-medium">
              Don't let another opportunity slip by. Start your AI-powered
              interview preparation today and join the thousands who've
              transformed their careers with PrepWise.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/interview"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative">Start Your Success Story</span>
              </Link>

              <Link
                href="/contact"
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-6 px-12 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-500 shadow-xl"
              >
                Schedule a Demo
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <span className="text-green-400">✓</span>
                <span>Free 7-day trial</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <span className="text-green-400">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <span className="text-green-400">✓</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
