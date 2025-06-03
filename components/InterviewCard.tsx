import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import DisplayTechIcons from "./DisplayTechIcons";
import { cn, getRandomInterviewCover } from "@/lib/utils";
import { getFeedbackByInterviewId } from "@/lib/actions/general.action";
import {
  Calendar,
  Award,
  Play,
  Eye,
  Zap,
  Users,
  Layers,
  CheckCircle,
  Clock,
  Star,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const InterviewCard = async ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback =
    userId && interviewId
      ? await getFeedbackByInterviewId({
          interviewId,
          userId,
        })
      : null;

  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  const typeConfig = {
    Behavioral: {
      icon: Users,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/10 via-indigo-500/5 to-blue-600/10",
      borderGradient: "from-blue-500/30 to-indigo-500/30",
      badge: "bg-blue-500/15 text-blue-300 border border-blue-500/30",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      glowColor: "shadow-blue-500/20",
    },
    Mixed: {
      icon: Layers,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 via-pink-500/5 to-purple-600/10",
      borderGradient: "from-purple-500/30 to-pink-500/30",
      badge: "bg-purple-500/15 text-purple-300 border border-purple-500/30",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
      glowColor: "shadow-purple-500/20",
    },
    Technical: {
      icon: Zap,
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-500/10 via-green-500/5 to-emerald-600/10",
      borderGradient: "from-emerald-500/30 to-green-500/30",
      badge: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
      iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
      glowColor: "shadow-emerald-500/20",
    },
  };

  const config =
    typeConfig[normalizedType as keyof typeof typeConfig] || typeConfig.Mixed;
  const IconComponent = config.icon;

  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  const isCompleted = !!feedback;
  const score = feedback?.totalScore;

  // Fix: Different URLs for completed vs new interviews
  const interviewUrl = isCompleted
    ? `/interview/${interviewId}/feedback`
    : `/interview/${interviewId}`;

  // Get score styling
  const getScoreConfig = (score: number) => {
    if (score >= 90)
      return {
        bg: "bg-gradient-to-r from-emerald-500 to-green-600",
        text: "text-white",
        icon: "🏆",
        label: "Excellent",
        color: "text-emerald-400",
      };
    if (score >= 80)
      return {
        bg: "bg-gradient-to-r from-blue-500 to-indigo-600",
        text: "text-white",
        icon: "⭐",
        label: "Great",
        color: "text-blue-400",
      };
    if (score >= 70)
      return {
        bg: "bg-gradient-to-r from-amber-500 to-orange-600",
        text: "text-white",
        icon: "👍",
        label: "Good",
        color: "text-amber-400",
      };
    return {
      bg: "bg-gradient-to-r from-red-500 to-pink-600",
      text: "text-white",
      icon: "💪",
      label: "Keep Improving",
      color: "text-red-400",
    };
  };

  const scoreConfig = score ? getScoreConfig(score) : null;

  return (
    <div className="group relative">
      {/* Enhanced glow effect */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500",
          config.bgGradient
        )}
      ></div>

      <div
        className={cn(
          "relative bg-gradient-to-br from-slate-900/90 via-gray-900/95 to-slate-800/90 backdrop-blur-xl",
          "rounded-2xl border border-gray-700/50 transition-all duration-500 overflow-hidden",
          "hover:scale-[1.02] hover:shadow-2xl transform",
          config.glowColor
        )}
      >
        {/* Top accent line */}
        <div className={cn("h-1 bg-gradient-to-r", config.gradient)}></div>

        {/* Main content */}
        <div className="p-6">
          {/* Header with icon, title, and status */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Enhanced icon */}
              <div className="relative">
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300",
                    config.iconBg,
                    "group-hover:scale-110 group-hover:rotate-3"
                  )}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                {/* Icon glow effect */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 blur-md transition-all duration-300",
                    config.iconBg
                  )}
                ></div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                  {role}
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm transition-all duration-300",
                      config.badge,
                      "group-hover:scale-105"
                    )}
                  >
                    {normalizedType}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    ~25 min
                  </span>
                </div>
              </div>
            </div>

            {/* Status badge */}
            {isCompleted && (
              <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-xl text-sm font-semibold backdrop-blur-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Completed</span>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          {techstack && Array.isArray(techstack) && techstack.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={cn(
                    "w-2 h-2 rounded-full bg-gradient-to-r",
                    config.gradient
                  )}
                ></div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Tech Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techstack
                  .filter(Boolean)
                  .slice(0, 5)
                  .map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-gray-800/60 border border-gray-700/50 text-gray-300 rounded-lg text-xs font-medium backdrop-blur-sm hover:bg-gray-700/60 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                {techstack.length > 5 && (
                  <span className="px-2.5 py-1 bg-gray-700/40 border border-gray-600/40 text-gray-400 rounded-lg text-xs font-medium">
                    +{techstack.length - 5}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Performance Summary */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div
                className={cn(
                  "w-2 h-2 rounded-full bg-gradient-to-r",
                  config.gradient
                )}
              ></div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                {feedback ? "Performance Summary" : "Description"}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
              {feedback?.finalAssessment ||
                "AI-powered interview simulation designed to replicate real-world scenarios with comprehensive feedback and confidence building exercises."}
            </p>
          </div>

          {/* Performance metrics */}
          {isCompleted && score && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={cn(
                    "w-2 h-2 rounded-full bg-gradient-to-r",
                    config.gradient
                  )}
                ></div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Performance
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                <div className="text-center">
                  <div
                    className={cn("text-3xl font-black", scoreConfig?.color)}
                  >
                    {score}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Score</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">25</div>
                  <div className="text-xs text-gray-400 font-medium">
                    Minutes
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">12</div>
                  <div className="text-xs text-gray-400 font-medium">
                    Questions
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
            <div className="flex items-center gap-3">
              <div className={cn("p-2 rounded-lg", config.iconBg)}>
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-300">
                  {formattedDate}
                </div>
                <div className="text-xs text-gray-500">
                  {isCompleted ? "Completed" : "Created"}
                </div>
              </div>
            </div>

            <Link href={interviewUrl} className="group/link">
              <Button
                className={cn(
                  "group/btn relative overflow-hidden px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                  "transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl",
                  "text-white border-0",
                  isCompleted
                    ? "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700"
                    : cn(
                        "bg-gradient-to-r",
                        config.gradient,
                        "hover:saturate-110"
                      )
                )}
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-out"></div>

                <div className="relative flex items-center gap-2.5">
                  {isCompleted ? (
                    <>
                      <Eye className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                      <span>View Results</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                      <span>Start Practice</span>
                    </>
                  )}
                  <ChevronRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                </div>
              </Button>
            </Link>
          </div>
        </div>

        {/* Hover overlay with shimmer effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
          <div
            className={cn(
              "absolute inset-0 rounded-2xl opacity-5",
              config.bgGradient
            )}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
