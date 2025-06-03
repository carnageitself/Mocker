import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-300 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Live Interview Session
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              AI Interview{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Practice with our intelligent AI interviewer that adapts to your
              responses, provides real-time feedback, and helps you prepare for
              success.
            </p>

            {/* User Welcome */}
            {user && (
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-full px-6 py-3">
                  {user.profileURL ? (
                    <img
                      src={user.profileURL}
                      alt={user.name || "User"}
                      className="w-8 h-8 rounded-full border-2 border-indigo-400"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {user.name?.charAt(0)?.toUpperCase() || "U"}
                      </span>
                    </div>
                  )}
                  <span className="text-white font-medium">
                    Welcome back, {user.name || "User"}!
                  </span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  Real-time
                </div>
                <div className="text-xs text-gray-400">AI Responses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  Smart
                </div>
                <div className="text-xs text-gray-400">Adaptation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  Instant
                </div>
                <div className="text-xs text-gray-400">Feedback</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Agent Section */}
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Agent Container */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
            {/* Agent Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-6 border-b border-gray-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🎙️</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Interview Assistant
                    </h2>
                    <p className="text-gray-300">
                      AI-powered interview practice session
                    </p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-sm font-medium">
                    Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Agent Content */}
            <div className="p-8">
              <Agent
                userName={user?.name!}
                userId={user?.id}
                profileImage={user?.profileURL}
                type="generate"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interview Features
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our AI assistant provides comprehensive interview practice with
              advanced features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-600/50 hover:border-green-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <span className="text-green-400 text-xl">🎯</span>
              </div>
              <h4 className="text-white font-semibold mb-2">
                Adaptive Questions
              </h4>
              <p className="text-gray-400 text-sm">
                Questions adapt based on your responses and experience level
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <span className="text-blue-400 text-xl">💬</span>
              </div>
              <h4 className="text-white font-semibold mb-2">
                Natural Conversation
              </h4>
              <p className="text-gray-400 text-sm">
                Realistic dialogue that feels like a real interview
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <span className="text-purple-400 text-xl">📊</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Live Analysis</h4>
              <p className="text-gray-400 text-sm">
                Real-time performance analysis and scoring
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-600/50 hover:border-orange-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                <span className="text-orange-400 text-xl">💡</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Instant Tips</h4>
              <p className="text-gray-400 text-sm">
                Get immediate suggestions for improvement
              </p>
            </div>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 rounded-2xl border border-indigo-500/20 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">📋</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  How to Get Started
                </h3>
                <p className="text-indigo-300">
                  Follow these simple steps for the best experience
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-indigo-400 text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Set Your Preferences
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Configure your interview type and difficulty level
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-indigo-400 text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Start Conversation
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Begin chatting with the AI interviewer naturally
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-indigo-400 text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Get Feedback</h4>
                  <p className="text-gray-400 text-sm">
                    Receive detailed analysis and improvement tips
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl p-6 border border-gray-600/50">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-yellow-400 text-xl">💡</span>
              <h4 className="text-white font-semibold">
                Pro Tips for Best Results
              </h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Speak clearly and at a natural pace</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Use the STAR method for behavioral questions</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Ask clarifying questions when needed</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Take your time to think before answering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
