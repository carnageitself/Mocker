import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

// Dummy interview templates for new users
const dummyInterviewTemplates = [
  {
    id: "template-1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: "React, JavaScript, CSS",
    createdAt: new Date("2024-12-01"),
    isTemplate: true,
    description: "Perfect for frontend roles focusing on React ecosystem",
    difficulty: "Intermediate",
    duration: "45 minutes",
    questions: 12,
  },
  {
    id: "template-2",
    role: "Full Stack Developer",
    type: "Technical",
    techstack: "Node.js, React, MongoDB",
    createdAt: new Date("2024-11-28"),
    isTemplate: true,
    description: "Comprehensive full-stack interview preparation",
    difficulty: "Advanced",
    duration: "60 minutes",
    questions: 15,
  },
  {
    id: "template-3",
    role: "Data Scientist",
    type: "Technical",
    techstack: "Python, Machine Learning, SQL",
    createdAt: new Date("2024-11-25"),
    isTemplate: true,
    description: "Data science and ML focused interview questions",
    difficulty: "Advanced",
    duration: "50 minutes",
    questions: 10,
  },
  {
    id: "template-4",
    role: "Product Manager",
    type: "Behavioral",
    techstack: "Product Strategy, Analytics",
    createdAt: new Date("2024-11-22"),
    isTemplate: true,
    description: "Product management and strategy interview prep",
    difficulty: "Intermediate",
    duration: "40 minutes",
    questions: 8,
  },
  {
    id: "template-5",
    role: "Backend Developer",
    type: "Technical",
    techstack: "Java, Spring Boot, PostgreSQL",
    createdAt: new Date("2024-11-20"),
    isTemplate: true,
    description: "Backend development with Java ecosystem",
    difficulty: "Intermediate",
    duration: "45 minutes",
    questions: 14,
  },
  {
    id: "template-6",
    role: "DevOps Engineer",
    type: "Technical",
    techstack: "AWS, Docker, Kubernetes",
    createdAt: new Date("2024-11-18"),
    isTemplate: true,
    description: "Cloud infrastructure and DevOps practices",
    difficulty: "Advanced",
    duration: "55 minutes",
    questions: 11,
  },
];

// Enhanced InterviewCard component for templates
const TemplateCard = ({ template }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-400 bg-green-500/20";
      case "Intermediate":
        return "text-yellow-400 bg-yellow-500/20";
      case "Advanced":
        return "text-red-400 bg-red-500/20";
      default:
        return "text-gray-400 bg-gray-500/20";
    }
  };

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 h-full backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {template.role}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs font-medium">
                {template.type}
              </span>
              <span
                className={`px-2 py-1 rounded-md text-xs font-medium ${getDifficultyColor(
                  template.difficulty
                )}`}
              >
                {template.difficulty}
              </span>
            </div>
          </div>
          <div className="text-2xl">📝</div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {template.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="text-xs text-gray-400 mb-2">Tech Stack:</div>
          <div className="flex flex-wrap gap-1">
            {template.techstack.split(", ").map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="text-lg font-bold text-white">
              {template.questions}
            </div>
            <div className="text-xs text-gray-400">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">
              {template.duration}
            </div>
            <div className="text-xs text-gray-400">Duration</div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          asChild
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform group-hover:scale-105"
        >
          <Link href={`/interview/${template.id}`}>
            Start Practice Interview
          </Link>
        </Button>
      </div>
    </div>
  );
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
      {/* Hero Section - Unique Design */}
      <section className="relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/40 to-pink-900/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold backdrop-blur-sm">
                  <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3 animate-ping"></span>
                  AI-Powered Interview Mastery Platform
                </div>

                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                  Master Your{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Dream Interview
                  </span>{" "}
                  with AI
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-medium">
                  Experience next-generation interview preparation with
                  AI-powered mock interviews, instant feedback, and personalized
                  coaching that gets you hired.
                </p>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    15K+
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Success Stories
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    98%
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Success Rate
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Tech Stacks
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  asChild
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-6 px-10 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
                >
                  <Link
                    href="/templates"
                    className="flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative flex items-center">
                      <span className="text-2xl mr-3">🚀</span>
                      Start AI Interview
                      <svg
                        className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300"
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
                  className="group relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-6 px-10 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-500 shadow-xl"
                >
                  <Link
                    href="/createinterview"
                    className="flex items-center justify-center"
                  >
                    <span className="text-2xl mr-3">⚡</span>
                    Create Custom Interview
                    <svg
                      className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
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

            {/* Enhanced Robot Image Section */}
            <div className="relative lg:justify-self-end">
              <div className="relative w-96 h-96 lg:w-[480px] lg:h-[480px] mx-auto">
                {/* Multiple glow layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute inset-8 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-xl animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>

                <Image
                  src="/robot.png"
                  alt="AI Interview Coach"
                  width={480}
                  height={480}
                  className="relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Styled like Create Interview Page */}
      <section className="relative py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/15 to-pink-900/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3 animate-pulse"></span>
              Platform Features
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Platform?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Experience the most advanced interview preparation technology with
              cutting-edge AI insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  AI-Powered Analysis
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Advanced AI analyzes your responses in real-time, providing
                  instant feedback on communication, technical skills, and
                  overall performance.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                    Real-time Feedback
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                    Smart Scoring
                  </span>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Comprehensive Analytics
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Track your progress with detailed performance analytics,
                  identify improvement areas, and monitor your growth over time.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                    Performance Tracking
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                    Progress Insights
                  </span>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-500 h-full backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Personalized Questions
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Get questions specifically tailored to your target role,
                  experience level, and required tech stack for maximum
                  relevance.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">
                    Role-Specific
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">
                    Tech-Focused
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interview History Section */}
      <section className="relative py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/15 to-blue-900/10"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-4 backdrop-blur-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Your Progress
              </div>
              <h2 className="text-4xl font-black text-white mb-3">
                Interview{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  History
                </span>
              </h2>
              <p className="text-xl text-gray-300 font-medium">
                Review your past performances and track your improvement journey
              </p>
            </div>
            {hasPastInterviews && (
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Link href="/interviews">View All History</Link>
              </Button>
            )}
          </div>

          {hasPastInterviews ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userInterviews?.slice(0, 6).map((interview) => (
                <div
                  key={interview.id}
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  <InterviewCard
                    userId={user?.id}
                    interviewId={interview.id}
                    role={interview.role}
                    type={interview.type}
                    techstack={interview.techstack}
                    createdAt={interview.createdAt}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <span className="text-5xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Start Your Interview Journey
                </h3>
                <p className="text-gray-300 mb-8 text-lg max-w-md mx-auto">
                  Begin your first AI-powered interview practice to see your
                  progress and growth here
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/templates">Take Your First Interview</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Popular Interview Templates Section - Always Show Templates */}
      <section className="relative py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/15 to-indigo-900/10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-4 backdrop-blur-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                Ready-to-Use Templates
              </div>
              <h2 className="text-4xl font-black text-white mb-3">
                Popular Interview{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Templates
                </span>
              </h2>
              <p className="text-xl text-gray-300 font-medium">
                Start practicing immediately with our expert-crafted interview
                templates
              </p>
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              <Link href="/templates">Browse All Templates</Link>
            </Button>
          </div>

          {/* Always show dummy templates */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyInterviewTemplates.slice(0, 6).map((template) => (
              <div
                key={template.id}
                className="transform hover:scale-105 transition-all duration-300"
              >
                <TemplateCard template={template} />
              </div>
            ))}
          </div>

          {/* Additional Templates Section */}
          {hasUpcomingInterviews && allInterview && allInterview.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Community Created Templates
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allInterview.slice(0, 3).map((interview) => (
                  <div
                    key={interview.id}
                    className="transform hover:scale-105 transition-all duration-300"
                  >
                    <InterviewCard
                      userId={user?.id}
                      interviewId={interview.id}
                      role={interview.role}
                      type={interview.type}
                      techstack={interview.techstack}
                      createdAt={interview.createdAt}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Section */}
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

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Ready to Ace Your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dream Interview?
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 font-medium">
              Join thousands of successful candidates who transformed their
              careers with our AI-powered interview preparation platform
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
              >
                <Link
                  href="/templates"
                  className="flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative">Start Practicing Now</span>
                </Link>
              </Button>

              <Button
                asChild
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-6 px-12 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-500 shadow-xl"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 text-lg">✓</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">
                    Trusted by 15K+
                  </div>
                  <div className="text-gray-400 text-sm">
                    Successful candidates
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 text-lg">🎯</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">
                    98% Success Rate
                  </div>
                  <div className="text-gray-400 text-sm">Interview success</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 text-lg">📈</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">AI-Powered</div>
                  <div className="text-gray-400 text-sm">Advanced feedback</div>
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
