import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

// SEO Metadata
export const metadata: Metadata = {
  title: "AI Interview Coach | Practice Mock Interviews & Get Hired Faster",
  description:
    "Master your dream job interview with our AI-powered platform. Get instant feedback, personalized coaching, and practice with 50+ tech stacks. 98% success rate among 15K+ users.",
  keywords:
    "AI interview practice, mock interviews, interview preparation, job interview coaching, technical interviews, behavioral interviews, interview feedback, career development",
  authors: [{ name: "InterviewAI Team" }],
  openGraph: {
    title: "AI Interview Coach - Master Your Dream Interview",
    description:
      "Practice mock interviews with AI coaching. Instant feedback, personalized questions, and proven results. Join 15K+ successful candidates.",
    type: "website",
    siteName: "InterviewAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Interview Coach Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Interview Coach | Practice Mock Interviews & Get Hired",
    description:
      "Master interviews with AI-powered coaching. 98% success rate. Start practicing now!",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

async function Home() {
  const user = await getCurrentUser();

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = allInterview?.length! > 0;

  return (
    <div className="min-h-screen bg-black">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "AI Interview Coach",
            description:
              "AI-powered interview preparation platform with mock interviews, instant feedback, and personalized coaching",
            url: "https://yourdomain.com",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "15000",
            },
          }),
        }}
      />

      {/* Hero Section - MOBILE RESPONSIVE */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/40 to-pink-900/30"></div>
        {/* Mobile-friendly background elements */}
        <div className="absolute top-0 left-0 sm:left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 sm:right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-2 sm:mr-3 animate-ping"></span>
                <span className="hidden sm:inline">
                  #1 AI-Powered Interview Preparation Platform
                </span>
                <span className="sm:hidden">#1 AI Interview Platform</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight px-2">
                Master Your{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Dream Job Interview
                </span>{" "}
                with AI Coach
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-medium max-w-4xl mx-auto px-4">
                Get hired faster with AI-powered mock interviews, real-time
                feedback, and personalized coaching. Practice with 50+ tech
                stacks and behavioral scenarios used by top companies like
                Google, Amazon, and Microsoft.
              </p>

              {/* Enhanced Social Proof Stats - Mobile Optimized */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-2xl mx-auto">
                <div className="text-center group">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    15K+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">
                    <span className="hidden sm:inline">Candidates Hired</span>
                    <span className="sm:hidden">Hired</span>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    98%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">
                    <span className="hidden sm:inline">Success Rate</span>
                    <span className="sm:hidden">Success</span>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    4.9★
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">
                    <span className="hidden sm:inline">User Rating</span>
                    <span className="sm:hidden">Rating</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons - Original Layout */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
                <Button
                  asChild
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 sm:py-6 px-8 sm:px-10 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 w-full sm:w-auto"
                >
                  <Link
                    href="/templates"
                    className="flex items-center justify-center"
                    aria-label="Start free AI mock interview practice"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative flex items-center text-base sm:text-lg lg:text-xl">
                      <span className="text-xl sm:text-2xl mr-3">🚀</span>
                      Start Free Mock Interview
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                </Button>

                <Button
                  asChild
                  className="group relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 sm:py-6 px-8 sm:px-10 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-500 shadow-xl w-full sm:w-auto"
                >
                  <Link
                    href="/createinterview"
                    className="flex items-center justify-center"
                    aria-label="Create custom interview preparation"
                  >
                    <span className="text-xl sm:text-2xl mr-3">⚡</span>
                    <span className="text-base sm:text-lg lg:text-xl">
                      Create Custom Interview
                    </span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section - Mobile Responsive */}
      <section className="relative py-12 sm:py-20" id="features">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/15 to-pink-900/10"></div>
        <div className="absolute top-0 left-0 sm:left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 sm:right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6">
          <header className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
              <span className="hidden sm:inline">
                Revolutionary AI Technology
              </span>
              <span className="sm:hidden">AI Technology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 px-4">
              Why 15,000+ Professionals{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Trust Our Platform
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium px-4">
              Experience the most advanced interview preparation technology with
              proven results
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Feature 1: Advanced AI Analysis */}
            <article className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-xl sm:text-2xl">🧠</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
                  Advanced AI Analysis Engine
                </h3>
                <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed mb-4 sm:mb-6">
                  Our proprietary AI evaluates 15+ key metrics including
                  technical accuracy, communication clarity, confidence level,
                  and problem-solving approach. Get detailed scorecards that
                  pinpoint exactly what to improve.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center text-xs sm:text-sm text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Real-time speech pattern analysis
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Technical accuracy scoring (95% precision)
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Behavioral competency assessment
                  </div>
                </div>
              </div>
            </article>

            {/* Feature 2: Industry-Specific Preparation */}
            <article className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-xl sm:text-2xl">🎯</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
                  FAANG-Level Question Bank
                </h3>
                <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed mb-4 sm:mb-6">
                  Access 5,000+ interview questions used by Google, Amazon,
                  Microsoft, Apple, and Meta. Our content team of ex-FAANG
                  engineers ensures you practice with the exact questions asked
                  in real interviews.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center text-xs sm:text-sm text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Updated weekly with new questions
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    50+ programming languages & frameworks
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    System design & behavioral scenarios
                  </div>
                </div>
              </div>
            </article>

            {/* Feature 3: Proven Success System */}
            <article className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-xl sm:text-2xl">📈</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
                  Proven Results & Success Tracking
                </h3>
                <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed mb-4 sm:mb-6">
                  Track your journey from first practice to job offer. Our users
                  see average 73% improvement in interview performance and
                  receive 3.2x more job offers compared to traditional
                  preparation methods.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center text-xs sm:text-sm text-gray-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Detailed progress analytics dashboard
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Weakness identification & improvement plans
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Interview readiness score (0-100)
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Additional Benefits Section - Mobile Responsive */}
          <div className="mt-12 sm:mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-gray-700">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ace Any Interview
              </span>
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-blue-400 text-lg sm:text-xl">⚡</span>
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                  Instant Feedback
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Get immediate, actionable feedback on every response
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-purple-400 text-lg sm:text-xl">🎭</span>
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                  Role-Play Scenarios
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Practice with realistic interviewer personas
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-green-400 text-lg sm:text-xl">📱</span>
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                  Mobile Friendly
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Practice anywhere, anytime on any device
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-pink-400 text-lg sm:text-xl">🏆</span>
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                  Achievement System
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Gamified learning with progress badges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interview History Section - Mobile Responsive */}
      <section className="relative py-12 sm:py-20" id="dashboard">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/15 to-blue-900/10"></div>
        <div className="absolute top-0 right-0 sm:right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0">
            <div>
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Your Learning Journey
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-3">
                Interview{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Progress Dashboard
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium">
                Track your improvement and celebrate your successes
              </p>
            </div>
            {hasPastInterviews && (
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base self-start sm:self-auto"
              >
                <Link href="/interviews">
                  <span className="hidden sm:inline">
                    View Complete History
                  </span>
                  <span className="sm:hidden">View History</span>
                </Link>
              </Button>
            )}
          </div>

          {hasPastInterviews ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {userInterviews?.slice(0, 6).map((interview) => (
                <InterviewCard
                  key={interview.id}
                  userId={user?.id}
                  interviewId={interview.id}
                  role={interview.role}
                  type={interview.type}
                  techstack={interview.techstack}
                  createdAt={interview.createdAt}
                />
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-8 sm:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl">
                  <span className="text-3xl sm:text-5xl">🎯</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Begin Your Success Story
                </h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg max-w-md mx-auto">
                  Take your first AI-powered mock interview and start tracking
                  your journey to landing your dream job
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  <Link href="/templates">Start Your First Interview</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Popular Templates Section - Mobile Responsive */}
      <section className="relative py-12 sm:py-20" id="templates">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/15 to-indigo-900/10"></div>
        <div className="absolute bottom-0 left-0 sm:left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0">
            <div>
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                Most Popular Templates
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-3">
                Start with Expert-Crafted{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Interview Templates
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium">
                Proven templates used by 15,000+ successful candidates
              </p>
            </div>
            {hasUpcomingInterviews && (
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base self-start sm:self-auto"
              >
                <Link href="/templates">
                  <span className="hidden sm:inline">
                    Explore All Templates
                  </span>
                  <span className="sm:hidden">Explore Templates</span>
                </Link>
              </Button>
            )}
          </div>

          {hasUpcomingInterviews && allInterview && allInterview.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {allInterview.slice(0, 6).map((interview) => (
                <InterviewCard
                  key={interview.id}
                  userId={user?.id}
                  interviewId={interview.id}
                  role={interview.role}
                  type={interview.type}
                  techstack={interview.techstack}
                  createdAt={interview.createdAt}
                />
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-8 sm:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl">
                  <span className="text-3xl sm:text-5xl">🌟</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Be the First Success Story
                </h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg max-w-md mx-auto">
                  Join our community and start your journey to interview
                  success. Your story could be featured here next!
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  <Link href="/templates">Start Your Journey</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Bottom CTA Section - Mobile Responsive */}
      <section className="relative py-12 sm:py-20" id="get-started">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-pink-900/20"></div>
        <div className="absolute top-1/4 left-0 sm:left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-2 sm:mr-3 animate-ping"></span>
              <span className="hidden sm:inline">
                Join 15,000+ Successful Professionals
              </span>
              <span className="sm:hidden">Join 15,000+ Professionals</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
              Ready to Land Your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dream Job?
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 font-medium px-4">
              Start your free AI-powered interview preparation today. No credit
              card required. Join thousands who already landed their dream jobs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
              <Button
                asChild
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 w-full sm:w-auto"
              >
                <Link
                  href="/templates"
                  className="flex items-center justify-center"
                  aria-label="Start free mock interview preparation now"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative text-sm sm:text-base">
                    <span className="hidden sm:inline">
                      Start Free Interview Prep
                    </span>
                    <span className="sm:hidden">Start Free Prep</span>
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-500 shadow-xl w-full sm:w-auto"
              >
                <Link
                  href="/about"
                  aria-label="Learn more about our AI interview platform"
                  className="text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">
                    Learn More About Our AI
                  </span>
                  <span className="sm:hidden">Learn More</span>
                </Link>
              </Button>
            </div>

            {/* Enhanced trust indicators with testimonials - Mobile Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 bg-white/5 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 text-lg sm:text-xl">✅</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-base sm:text-lg">
                    15,000+
                  </div>
                  <div className="text-gray-400 text-sm">Success Stories</div>
                  <div className="text-green-400 text-xs mt-1">
                    "Got my FAANG offer!"
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 bg-white/5 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 text-lg sm:text-xl">🎯</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-base sm:text-lg">
                    98%
                  </div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                  <div className="text-blue-400 text-xs mt-1">
                    "Exceeded expectations"
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 bg-white/5 rounded-xl p-4 sm:p-6 backdrop-blur-sm sm:col-span-1 col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 text-lg sm:text-xl">⚡</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-base sm:text-lg">
                    4.9★
                  </div>
                  <div className="text-gray-400 text-sm">User Rating</div>
                  <div className="text-purple-400 text-xs mt-1">
                    "Best prep platform"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
