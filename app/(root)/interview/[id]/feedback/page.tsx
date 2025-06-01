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

  // Await params before using
  const { id } = await params;
  const interview = await getInterviewById(id);

  if (!interview) {
    notFound();
  }

  // Check if user owns this interview
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
        <div className="max-w-md mx-auto text-center">
          <div className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-indigo-400 rounded-full mb-4"></div>
          <h1 className="text-2xl font-bold mb-4 text-white">
            Generating Feedback...
          </h1>
          <p className="text-gray-300 mb-6">
            Please wait while we analyze your interview performance. This may
            take a few moments.
          </p>
          <div className="space-y-3">
            <Button
              asChild
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <Link href={`/interview/${id}`}>Back to Interview</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <Link href="/">Return to Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80)
      return "text-emerald-400 bg-emerald-900/30 border-emerald-400/50";
    if (score >= 60)
      return "text-amber-400 bg-amber-900/30 border-amber-400/50";
    return "text-rose-400 bg-rose-900/30 border-rose-400/50";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Excellent";
    if (score >= 80) return "Very Good";
    if (score >= 70) return "Good";
    if (score >= 60) return "Fair";
    return "Needs Improvement";
  };

  const getProgressBarColor = (score: number) => {
    if (score >= 80) return "bg-emerald-500";
    if (score >= 60) return "bg-amber-500";
    return "bg-rose-500";
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-700 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Interview Feedback
                </h1>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-gray-300">
                  <span className="flex items-center space-x-1">
                    <span>💼</span>
                    <span>{interview.role}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <span>📊</span>
                    <span>{interview.level} Level</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <span>📅</span>
                    <span>
                      {new Date(feedback.createdAt).toLocaleDateString()}
                    </span>
                  </span>
                </div>
              </div>
              <div className="text-center sm:text-right mt-4 sm:mt-0">
                <div
                  className={`inline-flex items-center px-6 py-3 rounded-full font-bold border-2 ${getScoreColor(
                    feedback.totalScore
                  )}`}
                >
                  <span className="text-3xl mr-2">{feedback.totalScore}</span>
                  <span className="text-lg">/100</span>
                </div>
                <p className="text-sm text-gray-300 mt-2 font-medium">
                  {getScoreLabel(feedback.totalScore)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Overall Performance */}
        <div className="bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-700">
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-2xl">📈</span>
            <h2 className="text-2xl font-bold text-white">
              Overall Performance
            </h2>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex-1">
              <div className="w-full bg-gray-700 rounded-full h-4 shadow-inner">
                <div
                  className={`h-4 rounded-full transition-all duration-1000 ease-out ${getProgressBarColor(
                    feedback.totalScore
                  )}`}
                  style={{ width: `${feedback.totalScore}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold text-white">
                {feedback.totalScore}
              </span>
              <p className="text-sm text-gray-300">out of 100</p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-700">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-xl">🛠️</span>
            <h2 className="text-xl font-semibold text-white">
              Technologies Covered
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {interview.techstack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium border border-indigo-400/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Category Scores */}
        <div className="bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-700">
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-2xl">📊</span>
            <h2 className="text-2xl font-bold text-white">
              Category Breakdown
            </h2>
          </div>
          <div className="space-y-6">
            {feedback.categoryScores.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-4 border-l-4 border-indigo-400"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-white text-lg">
                    {category.name}
                  </h3>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold border-2 ${getScoreColor(
                      category.score
                    )}`}
                  >
                    {category.score}/100
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                  <div
                    className={`h-3 rounded-full transition-all duration-700 ease-out ${getProgressBarColor(
                      category.score
                    )}`}
                    style={{ width: `${category.score}%` }}
                  ></div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {category.comment}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Strengths */}
          <div className="bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-700">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl">💪</span>
              <h2 className="text-2xl font-bold text-emerald-400">
                Your Strengths
              </h2>
            </div>
            <div className="space-y-4">
              {feedback.strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-emerald-900/20 rounded-lg border border-emerald-400/30"
                >
                  <span className="text-emerald-400 text-lg mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-200 leading-relaxed">
                    {strength}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Areas for Improvement */}
          <div className="bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-700">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl">🎯</span>
              <h2 className="text-2xl font-bold text-amber-400">
                Growth Opportunities
              </h2>
            </div>
            <div className="space-y-4">
              {feedback.areasForImprovement.map((area, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-amber-900/20 rounded-lg border border-amber-400/30"
                >
                  <span className="text-amber-400 text-lg mt-0.5 flex-shrink-0">
                    →
                  </span>
                  <span className="text-gray-200 leading-relaxed">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Assessment */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-sm p-8 border border-gray-700">
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-2xl">🎓</span>
            <h2 className="text-2xl font-bold text-white">Final Assessment</h2>
          </div>
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 border border-gray-600/30">
            <p className="text-gray-200 leading-relaxed text-lg">
              {feedback.finalAssessment}
            </p>
          </div>
        </div>

        {/* Interview Summary Stats */}
        <div className="bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-700">
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-2xl">📋</span>
            <h2 className="text-2xl font-bold text-white">Interview Summary</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-indigo-900/30 rounded-lg border border-indigo-400/50">
              <div className="text-2xl font-bold text-indigo-400">
                {interview.questions.length}
              </div>
              <div className="text-sm text-indigo-300 font-medium">
                Questions Asked
              </div>
            </div>
            <div className="text-center p-4 bg-purple-900/30 rounded-lg border border-purple-400/50">
              <div className="text-2xl font-bold text-purple-400">
                {interview.type}
              </div>
              <div className="text-sm text-purple-300 font-medium">
                Interview Type
              </div>
            </div>
            <div className="text-center p-4 bg-cyan-900/30 rounded-lg border border-cyan-400/50">
              <div className="text-2xl font-bold text-cyan-400">
                {interview.level}
              </div>
              <div className="text-sm text-cyan-300 font-medium">
                Experience Level
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            asChild
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-medium"
          >
            <Link href="/create-interview">
              <span className="mr-2">🚀</span>
              Practice More
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg font-medium"
          >
            <Link href={`/interview/${id}`}>
              <span className="mr-2">🔄</span>
              Retake Interview
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg font-medium"
          >
            <Link href="/">
              <span className="mr-2">🏠</span>
              Dashboard
            </Link>
          </Button>
        </div>

        {/* Share Results (Optional) */}
        <div className="text-center pt-4">
          <p className="text-sm text-gray-400">
            💡 Tip: Take note of your improvement areas and practice regularly
            to enhance your interview skills!
          </p>
        </div>
      </div>
    </div>
  );
}
