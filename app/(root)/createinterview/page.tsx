import InterviewGeneratorForm from "@/components/InterviewGeneratorForm";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

export default async function CreateInterviewPage() {
  const user = await getCurrentUser();

  if (!user?.id) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Create New Interview
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Generate personalized interview questions tailored to your role and
            experience level. Get ready to practice with AI-powered mock
            interviews.
          </p>
        </div>

        {/* Form-based Creation */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700">
            <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-400 text-lg">📝</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Interview Creation
                  </h2>
                  <p className="text-sm text-gray-300">
                    Fill out the form to generate your personalized interview
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <InterviewGeneratorForm userId={user.id} />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">
            What You'll Get
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-900 rounded-lg shadow-sm border border-gray-700">
              <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-400 text-xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2 text-white">
                Tailored Questions
              </h3>
              <p className="text-gray-300 text-sm">
                Questions specifically designed for your role, experience level,
                and tech stack
              </p>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-lg shadow-sm border border-gray-700">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-400 text-xl">🤖</span>
              </div>
              <h3 className="font-semibold mb-2 text-white">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-300 text-sm">
                Get detailed feedback and scoring after completing your
                interview
              </p>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-lg shadow-sm border border-gray-700">
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 text-xl">🚀</span>
              </div>
              <h3 className="font-semibold mb-2 text-white">
                Real Interview Practice
              </h3>
              <p className="text-gray-300 text-sm">
                Voice-based interviews that simulate real hiring scenarios
              </p>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-sm p-8 border border-gray-700">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-400 text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Why Choose Our Interview Platform?
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Our AI-driven platform creates realistic interview scenarios
                that help you build confidence and improve your performance. Get
                instant feedback, track your progress, and master the interview
                process with personalized questions designed for your specific
                goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
