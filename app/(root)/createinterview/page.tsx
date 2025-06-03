import InterviewGeneratorForm from "@/components/InterviewGeneratorForm";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

export default async function CreateInterviewPage() {
  const user = await getCurrentUser();

  if (!user?.id) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
              AI-Powered Interview Generator
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Create Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Perfect
              </span>{" "}
              Interview
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Generate personalized interview questions tailored to your role,
              experience level, and tech stack. Practice with AI-powered mock
              interviews that simulate real hiring scenarios.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  10K+
                </div>
                <div className="text-sm text-gray-400">Questions Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  50+
                </div>
                <div className="text-sm text-gray-400">
                  Tech Stacks Supported
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  95%
                </div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form Section - Full Width Container */}
      <div className="container mx-auto px-6 pb-8">
        <div className="w-full">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-6 border-b border-gray-600">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Interview Setup
                  </h2>
                  <p className="text-gray-300">
                    Configure your personalized interview experience
                  </p>
                </div>
              </div>
            </div>

            {/* Form Content - Full Width */}
            <div className="p-8">
              <InterviewGeneratorForm userId={user.id} />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What You&apos;ll Experience
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our advanced AI creates comprehensive interview experiences
              tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Smart Question Generation
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  AI analyzes your job description and generates questions
                  specifically designed for your role, experience level, and
                  required tech stack.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                    Role-Specific
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                    Level-Appropriate
                  </span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Advanced AI Analysis
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Get detailed feedback on communication skills, technical
                  knowledge, and overall performance with actionable insights
                  for improvement.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">
                    Real-time Feedback
                  </span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">
                    Scoring System
                  </span>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🎙️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Realistic Voice Practice
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Practice with voice-based interviews that simulate real hiring
                  scenarios, building confidence for actual interview
                  situations.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                    Voice Recognition
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                    Natural Flow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Simple 4-step process to create your personalized interview
              experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl">📄</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-600">
                  <span className="text-white text-xs font-bold">01</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Upload Job Description
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Paste or upload the job description for AI analysis
              </p>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-600 to-transparent -translate-y-1/2 z-0"></div>
            </div>

            <div className="relative text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-600">
                  <span className="text-white text-xs font-bold">02</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                AI Analysis
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our AI extracts key requirements and tech stack
              </p>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-600 to-transparent -translate-y-1/2 z-0"></div>
            </div>

            <div className="relative text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-600">
                  <span className="text-white text-xs font-bold">03</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Generate Questions
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Personalized questions are created for your interview
              </p>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-600 to-transparent -translate-y-1/2 z-0"></div>
            </div>

            <div className="relative text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-600">
                  <span className="text-white text-xs font-bold">04</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Start Practicing
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Begin your voice-based interview practice session
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Banner */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-pink-900/30 rounded-2xl border border-indigo-500/30">
            <div className="relative px-8 py-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">⭐</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Why Choose PrepWise Interview Platform?
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                Our cutting-edge AI technology creates the most realistic and
                comprehensive interview preparation experience. Build
                unshakeable confidence, receive expert-level feedback, and
                master the skills needed to land your dream job.
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 text-lg">✓</span>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">
                      Industry Experts
                    </div>
                    <div className="text-gray-400 text-sm">
                      Questions from real hiring managers
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 text-lg">🎯</span>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">Personalized</div>
                    <div className="text-gray-400 text-sm">
                      Tailored to your specific role
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 text-lg">📈</span>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">
                      Track Progress
                    </div>
                    <div className="text-gray-400 text-sm">
                      Detailed analytics and insights
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full border border-gray-600">
            <span className="text-2xl mr-3">💡</span>
            <span className="text-gray-300">
              <strong className="text-white">Pro Tip:</strong> Upload your job
              description for the most accurate and relevant interview questions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
