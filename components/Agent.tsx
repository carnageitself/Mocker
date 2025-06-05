"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { vapi } from "@/lib/vapi.sdk";
import { generator, interviewer } from "@/constants";
import { createFeedback } from "@/lib/actions/general.action";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

const Agent = ({
  userName,
  userId,
  interviewId,
  feedbackId,
  type,
  questions,
  interviewRole = "Product Analyst",
}: AgentProps & { interviewRole?: string }) => {
  const router = useRouter();
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastMessage, setLastMessage] = useState<string>("");
  const [isGeneratingFeedback, setIsGeneratingFeedback] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(10);

  // Generate professional avatar data based on role
  const getAvatarData = (role: string, person: string) => {
    const avatars = {
      hr: {
        initials: "SM",
        gradient: "from-pink-500 to-rose-600",
      },
      technical_recruiter: {
        initials: "MC",
        gradient: "from-blue-500 to-indigo-600",
      },
      junior_developer: {
        initials: "AR",
        gradient: "from-green-500 to-emerald-600",
      },
      junior_designer: {
        initials: "ET",
        gradient: "from-purple-500 to-violet-600",
      },
      junior_analyst: {
        initials: "DP",
        gradient: "from-orange-500 to-amber-600",
      },
      junior_manager: {
        initials: "JK",
        gradient: "from-teal-500 to-cyan-600",
      },
    };

    if (person === "hr") return avatars.hr;
    if (person === "technical_recruiter") return avatars.technical_recruiter;

    const roleKey = `junior_${role.toLowerCase().replace(/\s+/g, "_")}`;
    return avatars[roleKey as keyof typeof avatars] || avatars.junior_developer;
  };

  const getInterviewPanel = () => {
    // Generate deterministic names based on interview ID and role
    const generatePanelNames = (id: string, role: string) => {
      // Create a simple hash from interview ID to ensure consistency
      const hash = id.split("").reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }, 0);

      const hrNames = [
        { name: "Sarah Mitchell", initials: "SM" },
        { name: "Jennifer Davis", initials: "JD" },
        { name: "Lisa Rodriguez", initials: "LR" },
        { name: "Amanda Wilson", initials: "AW" },
        { name: "Rachel Thompson", initials: "RT" },
        { name: "Michelle Garcia", initials: "MG" },
        { name: "Jessica Brown", initials: "JB" },
        { name: "Karen Martinez", initials: "KM" },
      ];

      const leadNames = [
        { name: "Michael Chen", initials: "MC" },
        { name: "David Kumar", initials: "DK" },
        { name: "James Anderson", initials: "JA" },
        { name: "Robert Singh", initials: "RS" },
        { name: "Daniel Johnson", initials: "DJ" },
        { name: "Christopher Lee", initials: "CL" },
        { name: "Matthew Taylor", initials: "MT" },
        { name: "Kevin Zhang", initials: "KZ" },
      ];

      const juniorNames = [
        { name: "Alex Rodriguez", initials: "AR" },
        { name: "Emma Thompson", initials: "ET" },
        { name: "David Park", initials: "DP" },
        { name: "Jordan Kim", initials: "JK" },
        { name: "Casey Johnson", initials: "CJ" },
        { name: "Taylor Davis", initials: "TD" },
        { name: "Morgan Lee", initials: "ML" },
        { name: "Riley Chen", initials: "RC" },
      ];

      const hrIndex = Math.abs(hash) % hrNames.length;
      const leadIndex = Math.abs(hash + 1) % leadNames.length;
      const juniorIndex = Math.abs(hash + 2) % juniorNames.length;

      return {
        hr: hrNames[hrIndex],
        lead: leadNames[leadIndex],
        junior: juniorNames[juniorIndex],
      };
    };

    const names = generatePanelNames(interviewId || "default", interviewRole);
    const roleNormalized = interviewRole.toLowerCase();

    return [
      {
        id: "hr",
        name: names.hr.name,
        role: "HR Manager",
        avatar: {
          initials: names.hr.initials,
          gradient: "from-pink-500 to-rose-600",
        },
        status: "available",
        experience: "8+ years",
        isLead: false,
        statusColor: "green",
      },
      {
        id: "tech_recruiter",
        name: names.lead.name,
        role: `${interviewRole} Lead`,
        avatar: {
          initials: names.lead.initials,
          gradient: "from-blue-500 to-indigo-600",
        },
        status: callStatus === CallStatus.ACTIVE ? "presenting" : "available",
        experience: "12+ years",
        isLead: true,
        statusColor: "blue",
        isSpeaking: isSpeaking,
      },
      {
        id: "junior",
        name: names.junior.name,
        role: `Junior ${interviewRole}`,
        avatar: {
          initials: names.junior.initials,
          gradient: roleNormalized.includes("developer")
            ? "from-green-500 to-emerald-600"
            : roleNormalized.includes("designer")
            ? "from-purple-500 to-violet-600"
            : roleNormalized.includes("analyst")
            ? "from-orange-500 to-amber-600"
            : "from-teal-500 to-cyan-600",
        },
        status: "attentive",
        experience: "2 years",
        isLead: false,
        statusColor: "purple",
      },
    ];
  };

  const interviewPanel = getInterviewPanel();

  useEffect(() => {
    // Set total questions from props
    if (questions && questions.length > 0) {
      setTotalQuestions(questions.length);
    }

    const onCallStart = () => {
      setCallStatus(CallStatus.ACTIVE);
      setCurrentQuestionIndex(1); // Start with question 1
    };

    const onCallEnd = () => {
      setCallStatus(CallStatus.FINISHED);
    };

    const onMessage = (message: Message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { role: message.role, content: message.transcript };
        setMessages((prev) => [...prev, newMessage]);

        // Give users more time between questions - update progress more gradually
        if (message.role === "assistant" && message.transcript.includes("?")) {
          // Only advance question counter if it's actually a question
          setTimeout(() => {
            setCurrentQuestionIndex((prev) =>
              Math.min(prev + 1, totalQuestions)
            );
          }, 3000); // Wait 3 seconds before advancing to give user time to think
        }
      }
    };

    const onSpeechStart = () => {
      setIsSpeaking(true);
    };

    const onSpeechEnd = () => {
      setIsSpeaking(false);
    };

    const onError = (error: Error) => {
      console.log("Error:", error);
    };

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, [questions, totalQuestions]);

  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }

    const handleGenerateFeedback = async (messages: SavedMessage[]) => {
      setIsGeneratingFeedback(true);

      const { success, feedbackId: id } = await createFeedback({
        interviewId: interviewId!,
        userId: userId!,
        transcript: messages,
        feedbackId,
      });

      if (success && id) {
        setTimeout(() => {
          setIsGeneratingFeedback(false);
          router.push(`/interview/${interviewId}/feedback`);
        }, 2000); // Give user time to see the completion message
      } else {
        setIsGeneratingFeedback(false);
        console.log("Error saving feedback");
        router.push("/");
      }
    };

    if (callStatus === CallStatus.FINISHED) {
      if (type === "generate") {
        router.push("/");
      } else {
        handleGenerateFeedback(messages);
      }
    }
  }, [messages, callStatus, feedbackId, interviewId, router, type, userId]);

  const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING);

    if (type === "generate") {
      await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
        variableValues: {
          username: userName,
          userid: userId,
        },
      });
    } else {
      let formattedQuestions = "";
      if (questions) {
        formattedQuestions = questions
          .map((question) => `- ${question}`)
          .join("\n");
      }

      await vapi.start(interviewer, {
        variableValues: {
          questions: formattedQuestions,
        },
      });
    }
  };

  const handleDisconnect = () => {
    setCallStatus(CallStatus.FINISHED);
    vapi.stop();
  };

  const getStatusIndicator = (status: string, isSpeaking?: boolean) => {
    if (isSpeaking) {
      return {
        color: "bg-blue-500 animate-pulse",
        text: "Speaking",
        icon: "●",
      };
    }
    switch (status) {
      case "available":
        return { color: "bg-green-500", text: "Available", icon: "●" };
      case "presenting":
        return {
          color: "bg-blue-500 animate-pulse",
          text: "Presenting",
          icon: "●",
        };
      case "attentive":
        return { color: "bg-purple-500", text: "Listening", icon: "●" };
      default:
        return { color: "bg-gray-500", text: "Connected", icon: "●" };
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Header Bar */}
      <div className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-600/50 px-6 py-3 flex-shrink-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">AI</span>
            </div>
            <div>
              <h1 className="text-white font-semibold">
                Interview Conference Room
              </h1>
              <p className="text-slate-400 text-sm">
                {interviewRole} Position • Panel Interview Session
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-400">Recording</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-400">4K Quality</span>
            </div>
            <span className="text-slate-400">SECURE</span>
            <span className="text-slate-400">12:01 AM</span>
          </div>
        </div>
      </div>

      {/* Main Content Area - Full Width Grid */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Video Grid - Full Width 2x2 Layout */}
        <div className="flex-1 grid grid-cols-2 gap-6 p-6 min-h-0">
          {/* Interviewers and Candidate */}
          {interviewPanel.map((panelist, index) => {
            const statusInfo = getStatusIndicator(
              panelist.status,
              panelist.isSpeaking
            );
            return (
              <div
                key={panelist.id}
                className={`relative bg-gradient-to-br from-slate-700/80 to-slate-800/80 rounded-2xl border transition-all duration-300 ${
                  panelist.isLead
                    ? "border-blue-500/50 bg-gradient-to-br from-blue-900/30 to-slate-800/80"
                    : "border-slate-600/30"
                } ${
                  panelist.isSpeaking
                    ? "ring-2 ring-blue-500/50 scale-[1.02]"
                    : ""
                } flex flex-col justify-center items-center p-6 min-h-[300px]`}
              >
                {/* Lead Badge */}
                {panelist.isLead && (
                  <div className="absolute top-4 right-4 bg-blue-500/90 text-white text-sm px-3 py-1 rounded-full font-medium">
                    Lead Interviewer
                  </div>
                )}

                <div className="text-center">
                  {/* Avatar */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${
                        panelist.avatar.gradient
                      } rounded-full flex items-center justify-center border-3 border-slate-600 ${
                        panelist.isSpeaking ? "animate-pulse" : ""
                      }`}
                    >
                      <span className="text-white text-3xl font-bold">
                        {panelist.avatar.initials}
                      </span>
                    </div>
                    {/* Status Indicator */}
                    <div
                      className={`absolute -bottom-1 -right-1 w-8 h-8 ${statusInfo.color} rounded-full border-3 border-slate-800 flex items-center justify-center`}
                    >
                      <span className="text-white text-sm">
                        {statusInfo.icon}
                      </span>
                    </div>
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-white font-semibold text-xl mb-2">
                    {panelist.name}
                  </h3>
                  <p className="text-slate-400 text-base mb-3">
                    {panelist.role}
                  </p>

                  {/* Status */}
                  <div
                    className={`inline-flex items-center space-x-2 px-3 py-2 rounded-full text-sm ${
                      statusInfo.color.includes("green")
                        ? "text-green-400 bg-green-500/20"
                        : statusInfo.color.includes("blue")
                        ? "text-blue-400 bg-blue-500/20"
                        : statusInfo.color.includes("purple")
                        ? "text-purple-400 bg-purple-500/20"
                        : "text-gray-400 bg-gray-500/20"
                    }`}
                  >
                    <span>{statusInfo.text}</span>
                  </div>

                  {/* Experience */}
                  <div className="mt-3 text-sm text-slate-500">
                    {panelist.experience}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Candidate Panel */}
          <div className="relative bg-gradient-to-br from-indigo-800/50 to-slate-800/80 rounded-2xl border border-indigo-500/50 flex flex-col justify-center items-center p-6 min-h-[300px]">
            <div className="absolute top-4 right-4 bg-indigo-500/90 text-white text-sm px-3 py-1 rounded-full font-medium">
              Candidate
            </div>

            <div className="text-center">
              {/* User Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center border-3 border-indigo-500">
                  <span className="text-white text-3xl font-bold">
                    {userName?.charAt(0)?.toUpperCase() || "Y"}
                  </span>
                </div>
                {/* Status Indicator */}
                <div
                  className={`absolute -bottom-1 -right-1 w-8 h-8 ${
                    callStatus === CallStatus.ACTIVE
                      ? "bg-green-500 animate-pulse"
                      : callStatus === CallStatus.CONNECTING
                      ? "bg-yellow-500 animate-pulse"
                      : "bg-gray-500"
                  } rounded-full border-3 border-slate-800 flex items-center justify-center`}
                >
                  <span className="text-white text-sm">●</span>
                </div>
              </div>

              {/* User Info */}
              <h3 className="text-white font-semibold text-xl mb-2">
                {userName || "Yash Hardie"}
              </h3>
              <p className="text-slate-400 text-base mb-3">Interviewee</p>

              {/* Status */}
              <div
                className={`inline-flex items-center space-x-2 px-3 py-2 rounded-full text-sm ${
                  callStatus === CallStatus.ACTIVE
                    ? "text-green-400 bg-green-500/20"
                    : callStatus === CallStatus.CONNECTING
                    ? "text-yellow-400 bg-yellow-500/20"
                    : "text-gray-400 bg-gray-500/20"
                }`}
              >
                <span>
                  {callStatus === CallStatus.ACTIVE
                    ? "Engaged"
                    : callStatus === CallStatus.CONNECTING
                    ? "Connecting"
                    : "Ready"}
                </span>
              </div>

              {/* Application Role */}
              <div className="mt-3 text-sm text-slate-500">
                Applying for: {interviewRole}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Control Panel - Fixed at bottom */}
        <div className="bg-slate-800/95 backdrop-blur-sm border-t border-slate-600/50 px-6 py-4 flex-shrink-0">
          {/* Control Bar */}
          <div className="flex items-center justify-between w-full">
            {/* Left Side - Status */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-4 h-4 rounded-full ${
                    callStatus === CallStatus.ACTIVE
                      ? "bg-green-500 animate-pulse"
                      : callStatus === CallStatus.CONNECTING
                      ? "bg-yellow-500 animate-pulse"
                      : isGeneratingFeedback
                      ? "bg-blue-500 animate-pulse"
                      : "bg-gray-500"
                  }`}
                ></div>
                <span className="text-white font-medium">
                  {isGeneratingFeedback
                    ? "Generating Feedback..."
                    : callStatus === CallStatus.ACTIVE
                    ? "Interview Active"
                    : callStatus === CallStatus.CONNECTING
                    ? "Connecting..."
                    : callStatus === CallStatus.FINISHED
                    ? "Completed"
                    : "Ready to Start"}
                </span>
              </div>
              <div className="text-slate-400">
                Question{" "}
                {callStatus === CallStatus.ACTIVE ? currentQuestionIndex : 1} of{" "}
                {totalQuestions}
              </div>
              <div className="text-slate-400">
                {Math.ceil(totalQuestions * 3)} min session
              </div>
            </div>

            {/* Center - Main Call Button */}
            <div className="flex items-center">
              {!isGeneratingFeedback && callStatus !== CallStatus.ACTIVE ? (
                <button
                  className={`px-8 py-3 rounded-lg font-semibold transition-all flex items-center space-x-3 ${
                    callStatus === CallStatus.CONNECTING
                      ? "bg-yellow-600 hover:bg-yellow-700 text-white cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 text-white hover:scale-105 shadow-lg"
                  }`}
                  onClick={handleCall}
                  disabled={callStatus === CallStatus.CONNECTING}
                >
                  <span>
                    {callStatus === CallStatus.INACTIVE ||
                    callStatus === CallStatus.FINISHED
                      ? "Join Call"
                      : "Connecting..."}
                  </span>
                  {callStatus === CallStatus.CONNECTING && (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  )}
                </button>
              ) : callStatus === CallStatus.ACTIVE && !isGeneratingFeedback ? (
                <button
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all flex items-center space-x-3 hover:scale-105 shadow-lg"
                  onClick={handleDisconnect}
                >
                  <span className="text-lg">END</span>
                  <span>End Call</span>
                </button>
              ) : isGeneratingFeedback ? (
                <div className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center space-x-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Generating Feedback...</span>
                </div>
              ) : null}
            </div>

            {/* Right Side - Controls */}
            <div className="flex items-center space-x-4">
              {/* Record Button */}
              <button className="w-12 h-12 bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 rounded-full flex items-center justify-center text-red-400 transition-all hover:scale-110">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="6" />
                </svg>
              </button>

              {/* Microphone Button */}
              <button className="w-12 h-12 bg-slate-600/50 hover:bg-slate-600/70 border border-slate-500/50 rounded-full flex items-center justify-center text-slate-300 transition-all hover:scale-110">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </button>

              {/* Camera Button */}
              <button className="w-12 h-12 bg-slate-600/50 hover:bg-slate-600/70 border border-slate-500/50 rounded-full flex items-center justify-center text-slate-300 transition-all hover:scale-110">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>

              {/* Chat Button */}
              <button className="w-12 h-12 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 rounded-full flex items-center justify-center text-blue-400 transition-all hover:scale-110">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Feedback Generation Status */}
          {isGeneratingFeedback && (
            <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-blue-300 font-semibold">
                    Processing Your Interview
                  </h4>
                  <p className="text-blue-200/70 text-sm">
                    Our AI is analyzing your responses and generating
                    personalized feedback. This may take a few moments...
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-blue-500/20 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-400 h-full rounded-full animate-pulse w-3/4"></div>
              </div>
            </div>
          )}

          {/* Live Transcript */}
          {messages.length > 0 && !isGeneratingFeedback && (
            <div className="mt-4 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-600/30 p-4">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-400 font-medium">
                  Live Transcript
                </span>
              </div>
              <p
                className={cn(
                  "text-white transition-opacity duration-500 opacity-0 line-clamp-2",
                  "animate-fadeIn opacity-100"
                )}
              >
                {lastMessage}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Agent;
