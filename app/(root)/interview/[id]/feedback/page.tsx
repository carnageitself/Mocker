import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function InterviewFeedbackPage({ params }: Props) {
  const user = await getCurrentUser();

  if (!user?.id) {
    redirect("/sign-in");
  }

  const { id } = await params;
  const interview = await getInterviewById(id);

  if (!interview) {
    notFound();
  }

  if (interview.userId !== user.id) {
    redirect("/");
  }

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user.id,
  });

  if (!feedback) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-6">
          {/* Enhanced Loading Animation */}
          <div className="relative w-40 h-40 mx-auto mb-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-pulse"></div>
            <div
              className="absolute inset-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="absolute inset-4 rounded-full bg-gray-900 flex items-center justify-center">
              <div className="relative">
                <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"></div>
                <div
                  className="absolute inset-2 animate-spin w-8 h-8 border-3 border-blue-400 border-t-transparent rounded-full"
                  style={{
                    animationDirection: "reverse",
                    animationDuration: "1.5s",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
              🧠 AI Performance Analysis
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-medium">
              Our advanced AI is meticulously analyzing your interview
              performance to provide comprehensive insights and personalized
              recommendations.
            </p>

            {/* Progress Steps */}
            <div className="grid gap-4 mt-12">
              <div className="group bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">
                      Analyzing Communication Patterns
                    </div>
                    <div className="text-blue-300 text-sm">
                      Evaluating clarity, structure, and delivery
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <div
                      className="w-3 h-3 bg-white rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">
                      Evaluating Technical Knowledge
                    </div>
                    <div className="text-purple-300 text-sm">
                      Assessing depth and accuracy of responses
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl p-6 border border-emerald-500/30 backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                    <div
                      className="w-3 h-3 bg-white rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">
                      Generating Personalized Recommendations
                    </div>
                    <div className="text-emerald-300 text-sm">
                      Creating tailored improvement strategies
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href={`/interview/${id}`}>
                  <span className="mr-3 text-lg">🔙</span>
                  Back to Interview
                </Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 px-8 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300"
              >
                <Link href="/">
                  <span className="mr-3 text-lg">🏠</span>
                  Return to Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80)
      return "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
    if (score >= 60)
      return "text-amber-400 bg-amber-500/10 border-amber-500/30";
    return "text-rose-400 bg-rose-500/10 border-rose-500/30";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Outstanding";
    if (score >= 80) return "Excellent";
    if (score >= 70) return "Very Good";
    if (score >= 60) return "Good";
    if (score >= 50) return "Fair";
    return "Needs Improvement";
  };

  const getProgressBarColor = (score: number) => {
    if (score >= 80) return "from-emerald-500 to-emerald-400";
    if (score >= 60) return "from-amber-500 to-amber-400";
    return "from-rose-500 to-rose-400";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return "🏆";
    if (score >= 80) return "🌟";
    if (score >= 70) return "👍";
    if (score >= 60) return "👌";
    return "💪";
  };

  const getGradeBadge = (score: number) => {
    if (score >= 90)
      return { grade: "A+", bg: "from-emerald-500 to-green-600" };
    if (score >= 80) return { grade: "A", bg: "from-blue-500 to-indigo-600" };
    if (score >= 70) return { grade: "B", bg: "from-amber-500 to-orange-600" };
    if (score >= 60) return { grade: "C", bg: "from-purple-500 to-pink-600" };
    return { grade: "D", bg: "from-red-500 to-pink-600" };
  };

  const gradeBadge = getGradeBadge(feedback.totalScore);

  return (
    <div className="min-h-screen bg-black">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-pink-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3 animate-pulse"></span>
                Performance Analysis Complete
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Your Interview{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Results
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
                Comprehensive AI-powered analysis of your {interview.role}{" "}
                interview performance
              </p>
            </div>

            {/* Score Hero Card */}
            <div className="relative group mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 rounded-3xl blur-xl"></div>

              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  {/* Score Display */}
                  <div className="flex items-center gap-8">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-600 flex items-center justify-center relative overflow-hidden">
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${getProgressBarColor(
                            feedback.totalScore
                          )} opacity-20`}
                        ></div>
                        <div className="text-center relative z-10">
                          <div className="text-4xl font-black text-white">
                            {feedback.totalScore}
                          </div>
                          <div className="text-sm text-gray-400 font-medium">
                            /100
                          </div>
                        </div>
                      </div>
                      <div className="absolute -top-3 -right-3 text-4xl">
                        {getScoreIcon(feedback.totalScore)}
                      </div>
                    </div>

                    <div className="text-center lg:text-left">
                      <div
                        className={`inline-flex items-center px-6 py-3 rounded-2xl font-bold text-lg border ${getScoreColor(
                          feedback.totalScore
                        )} mb-4`}
                      >
                        <span className="mr-2 text-2xl">
                          {gradeBadge.grade}
                        </span>
                        {getScoreLabel(feedback.totalScore)}
                      </div>
                      <div className="text-gray-300">
                        <div className="text-2xl font-bold text-white">
                          {interview.role}
                        </div>
                        <div className="text-lg">
                          {interview.type} Interview
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div className="bg-blue-500/10 rounded-2xl p-4 border border-blue-500/20">
                      <div className="text-2xl font-bold text-blue-400">
                        {interview.questions.length}
                      </div>
                      <div className="text-sm text-gray-400">Questions</div>
                    </div>
                    <div className="bg-purple-500/10 rounded-2xl p-4 border border-purple-500/20">
                      <div className="text-2xl font-bold text-purple-400">
                        {Math.ceil(interview.questions.length * 2.5)}
                      </div>
                      <div className="text-sm text-gray-400">Minutes</div>
                    </div>
                    <div className="bg-green-500/10 rounded-2xl p-4 border border-green-500/20">
                      <div className="text-2xl font-bold text-green-400">
                        {new Date(feedback.createdAt).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-400">Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-12 space-y-12">
        {/* Performance Overview */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Performance Overview
            </h2>
            <p className="text-gray-400">
              Detailed breakdown of your interview performance
            </p>
          </div>

          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Overall Performance
                </h3>
              </div>

              <div className="relative mb-4">
                <div className="w-full bg-gray-700 rounded-full h-4 shadow-inner overflow-hidden">
                  <div
                    className={`h-4 rounded-full bg-gradient-to-r ${getProgressBarColor(
                      feedback.totalScore
                    )} transition-all duration-2000 ease-out relative`}
                    style={{ width: `${feedback.totalScore}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>0</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75</span>
                  <span>100</span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">
                  {feedback.totalScore} Points
                </div>
                <div className="text-gray-400">Performance Score</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Breakdown */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Category Analysis
            </h2>
            <p className="text-gray-400">
              Performance breakdown by skill categories
            </p>
          </div>

          <div className="grid gap-6">
            {feedback.categoryScores.map((category, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${getProgressBarColor(
                            category.score
                          )} rounded-xl flex items-center justify-center`}
                        >
                          <span className="text-white font-bold">
                            {getScoreIcon(category.score)}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {category.name}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${getScoreColor(
                                category.score
                              )} border`}
                            >
                              {category.score}/100
                            </span>
                            <span className="text-gray-400 text-sm">
                              {getScoreLabel(category.score)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-3 rounded-full bg-gradient-to-r ${getProgressBarColor(
                              category.score
                            )} transition-all duration-1000 ease-out`}
                            style={{ width: `${category.score}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="bg-gray-800/40 rounded-xl p-4 border-l-4 border-purple-500">
                        <p className="text-gray-300 leading-relaxed">
                          {category.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies Covered
            </h2>
            <p className="text-gray-400">
              Skills and technologies assessed in this interview
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex flex-wrap gap-4">
                {interview.techstack.map((tech, index) => (
                  <div
                    key={tech}
                    className="group/tech relative overflow-hidden bg-gradient-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-500/30 rounded-2xl px-6 py-3 hover:from-indigo-500/25 hover:to-purple-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></span>
                      <span className="text-indigo-300 font-semibold text-lg">
                        {tech}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strengths & Improvements */}
        <section className="grid lg:grid-cols-2 gap-8">
          {/* Strengths */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-emerald-500/30 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl">💪</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400">
                    Your Strengths
                  </h3>
                  <p className="text-emerald-300/70">
                    Areas where you excelled
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {feedback.strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="group/item flex items-start gap-4 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 hover:bg-emerald-500/15 transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-emerald-400 text-lg font-bold">
                        ✓
                      </span>
                    </div>
                    <p className="text-gray-200 leading-relaxed font-medium">
                      {strength}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Improvements */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-amber-500/30 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-400">
                    Growth Opportunities
                  </h3>
                  <p className="text-amber-300/70">Areas for improvement</p>
                </div>
              </div>

              <div className="space-y-4">
                {feedback.areasForImprovement.map((area, index) => (
                  <div
                    key={index}
                    className="group/item flex items-start gap-4 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20 hover:bg-amber-500/15 transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-lg font-bold">
                        →
                      </span>
                    </div>
                    <p className="text-gray-200 leading-relaxed font-medium">
                      {area}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final Assessment */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              AI Assessment Summary
            </h2>
            <p className="text-gray-400">
              Comprehensive evaluation and recommendations
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-purple-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Final Assessment
                </h3>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
                <p className="text-gray-200 leading-relaxed text-lg font-medium">
                  {feedback.finalAssessment}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="pt-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/createinterview">
                <span className="mr-3 text-xl">🚀</span>
                Practice More Interviews
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
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
              </Link>
            </Button>

            <Button
              asChild
              className="group bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-10 py-4 text-lg font-bold rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300"
            >
              <Link href={`/interview/${id}`}>
                <span className="mr-3 text-xl">🔄</span>
                Retake Interview
              </Link>
            </Button>

            <Button
              asChild
              className="group bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-10 py-4 text-lg font-bold rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300"
            >
              <Link href="/">
                <span className="mr-3 text-xl">🏠</span>
                Dashboard
              </Link>
            </Button>
          </div>
        </section>

        {/* Pro Tip */}
        <section>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-2xl p-8 border border-gray-600 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">💡</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Pro Tip for Success
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Regular practice with varied question types and technologies
                    will significantly boost your confidence and performance in
                    real interviews. Focus on your improvement areas while
                    leveraging your strengths.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
