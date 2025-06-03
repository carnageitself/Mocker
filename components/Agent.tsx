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
  interviewRole = "Product Analyst", // Add default role
}: AgentProps & { interviewRole?: string }) => {
  const router = useRouter();
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastMessage, setLastMessage] = useState<string>("");

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

    // For junior role, match with interview role
    const roleKey = `junior_${role.toLowerCase().replace(/\s+/g, "_")}`;
    return avatars[roleKey as keyof typeof avatars] || avatars.junior_developer;
  };

  const getInterviewPanel = () => {
    const roleNormalized = interviewRole.toLowerCase();

    return [
      {
        id: "hr",
        name: "Sarah Mitchell",
        role: "HR Manager",
        avatar: getAvatarData(interviewRole, "hr"),
        status: "available",
        experience: "8+ years in Talent Acquisition",
        isLead: false,
        statusColor: "green",
      },
      {
        id: "tech_recruiter",
        name: "Michael Chen",
        role: `Senior ${interviewRole} Recruiter`,
        avatar: getAvatarData(interviewRole, "technical_recruiter"),
        status: callStatus === CallStatus.ACTIVE ? "presenting" : "available",
        experience: `12+ years in ${interviewRole} hiring`,
        isLead: true,
        statusColor: "blue",
        isSpeaking: isSpeaking,
      },
      {
        id: "junior",
        name: roleNormalized.includes("developer")
          ? "Alex Rodriguez"
          : roleNormalized.includes("designer")
          ? "Emma Thompson"
          : roleNormalized.includes("analyst")
          ? "David Park"
          : "Jordan Kim",
        role: `Junior ${interviewRole}`,
        avatar: getAvatarData(interviewRole, "junior"),
        status: "attentive",
        experience: `2 years as ${interviewRole}`,
        isLead: false,
        statusColor: "purple",
      },
    ];
  };

  const interviewPanel = getInterviewPanel();

  useEffect(() => {
    const onCallStart = () => {
      setCallStatus(CallStatus.ACTIVE);
    };

    const onCallEnd = () => {
      setCallStatus(CallStatus.FINISHED);
    };

    const onMessage = (message: Message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { role: message.role, content: message.transcript };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const onSpeechStart = () => {
      console.log("speech start");
      setIsSpeaking(true);
    };

    const onSpeechEnd = () => {
      console.log("speech end");
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
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }

    const handleGenerateFeedback = async (messages: SavedMessage[]) => {
      console.log("handleGenerateFeedback");

      const { success, feedbackId: id } = await createFeedback({
        interviewId: interviewId!,
        userId: userId!,
        transcript: messages,
        feedbackId,
      });

      if (success && id) {
        router.push(`/interview/${interviewId}/feedback`);
      } else {
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
        text: "Presenting",
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
        return { color: "bg-purple-500", text: "Attentive", icon: "●" };
      default:
        return { color: "bg-gray-500", text: "Connected", icon: "●" };
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Meeting Grid - Full Width 2x2 Layout */}
      <div className="flex-1 grid grid-cols-2 gap-6 p-6 min-h-[calc(100vh-200px)]">
        {/* Top Row */}
        {interviewPanel.slice(0, 2).map((panelist, index) => {
          const statusInfo = getStatusIndicator(
            panelist.status,
            panelist.isSpeaking
          );
          return (
            <div
              key={panelist.id}
              className={`relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl border shadow-2xl transition-all duration-300 ${
                panelist.isLead
                  ? "border-blue-500/50 bg-gradient-to-br from-blue-900/20 to-slate-800"
                  : "border-slate-600/50"
              } ${
                panelist.isSpeaking
                  ? "ring-4 ring-blue-500/50 animate-pulse"
                  : ""
              } flex flex-col justify-center items-center p-8`}
            >
              {panelist.isLead && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-4 py-2 rounded-full font-medium border border-slate-600">
                  Lead Interviewer
                </div>
              )}

              <div className="absolute inset-4 border border-slate-500/30 rounded-2xl"></div>

              <div className="relative text-center z-10">
                <div className="relative w-32 h-32 mx-auto mb-6 shadow-2xl border-4 border-slate-600 rounded-full overflow-hidden">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${
                      panelist.avatar.gradient
                    } flex items-center justify-center relative ${
                      panelist.isSpeaking ? "animate-pulse" : ""
                    }`}
                  >
                    <span className="text-white text-5xl font-bold z-10">
                      {panelist.avatar.initials}
                    </span>
                  </div>
                  <div
                    className={`absolute -bottom-2 -right-2 w-8 h-8 ${statusInfo.color} rounded-full border-4 border-slate-800 flex items-center justify-center`}
                  >
                    <span className="text-white text-sm">
                      {statusInfo.icon}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {panelist.name}
                </h3>
                <p className="text-slate-400 text-lg mb-4">{panelist.role}</p>

                <div className="flex items-center justify-center space-x-3 text-sm mb-4">
                  <div
                    className={`flex items-center space-x-2 px-3 py-2 rounded-full ${
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
                </div>

                <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-600/50 mt-6">
                  <div className="text-sm text-slate-400 text-center">
                    {panelist.experience}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Bottom Row */}
        {/* Third Panel Member */}
        {interviewPanel.slice(2, 3).map((panelist, index) => {
          const statusInfo = getStatusIndicator(
            panelist.status,
            panelist.isSpeaking
          );
          return (
            <div
              key={panelist.id}
              className={`relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl border shadow-2xl transition-all duration-300 border-slate-600/50 flex flex-col justify-center items-center p-8`}
            >
              <div className="absolute inset-4 border border-slate-500/30 rounded-2xl"></div>

              <div className="relative text-center z-10">
                <div className="relative w-32 h-32 mx-auto mb-6 shadow-2xl border-4 border-slate-600 rounded-full overflow-hidden">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${panelist.avatar.gradient} flex items-center justify-center relative`}
                  >
                    <span className="text-white text-5xl font-bold z-10">
                      {panelist.avatar.initials}
                    </span>
                  </div>
                  <div
                    className={`absolute -bottom-2 -right-2 w-8 h-8 ${statusInfo.color} rounded-full border-4 border-slate-800 flex items-center justify-center`}
                  >
                    <span className="text-white text-sm">
                      {statusInfo.icon}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {panelist.name}
                </h3>
                <p className="text-slate-400 text-lg mb-4">{panelist.role}</p>

                <div className="flex items-center justify-center space-x-3 text-sm mb-4">
                  <div
                    className={`flex items-center space-x-2 px-3 py-2 rounded-full ${
                      statusInfo.color.includes("purple")
                        ? "text-purple-400 bg-purple-500/20"
                        : "text-gray-400 bg-gray-500/20"
                    }`}
                  >
                    <span>{statusInfo.text}</span>
                  </div>
                </div>

                <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-600/50 mt-6">
                  <div className="text-sm text-slate-400 text-center">
                    {panelist.experience}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Candidate (User) - Bottom Right */}
        <div className="relative bg-gradient-to-br from-indigo-800/50 to-slate-800 rounded-3xl border border-indigo-500/50 shadow-2xl flex flex-col justify-center items-center p-8">
          <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm px-4 py-2 rounded-full font-medium border border-slate-600">
            Candidate
          </div>

          <div className="absolute inset-4 border border-indigo-500/30 rounded-2xl"></div>

          <div className="relative text-center z-10">
            <div className="relative w-32 h-32 mx-auto mb-6 shadow-2xl border-4 border-indigo-500 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-5xl font-bold">
                  {userName?.charAt(0)?.toUpperCase() || "C"}
                </span>
              </div>
              <div
                className={`absolute -bottom-2 -right-2 w-8 h-8 ${
                  callStatus === CallStatus.ACTIVE
                    ? "bg-green-500 animate-pulse"
                    : "bg-gray-500"
                } rounded-full border-4 border-slate-800 flex items-center justify-center`}
              >
                <span className="text-white text-sm">
                  {callStatus === CallStatus.ACTIVE ? "●" : "●"}
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {userName || "Candidate"}
            </h3>
            <p className="text-slate-400 text-lg mb-4">Interviewee</p>

            <div className="flex items-center justify-center space-x-3 text-sm mb-4">
              <div
                className={`flex items-center space-x-2 px-3 py-2 rounded-full ${
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
            </div>

            <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-600/50 mt-6">
              <div className="text-sm text-slate-400 text-center">
                Applying for: {interviewRole}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Control Bar - Fixed at bottom */}
      <div className="bg-gradient-to-r from-slate-800/95 to-slate-700/95 backdrop-blur-sm border-t border-slate-600/50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div
                className={`w-4 h-4 rounded-full ${
                  callStatus === CallStatus.ACTIVE
                    ? "bg-green-500 animate-pulse"
                    : callStatus === CallStatus.CONNECTING
                    ? "bg-yellow-500 animate-pulse"
                    : "bg-gray-500"
                }`}
              ></div>
              <span className="text-white font-semibold">
                {callStatus === CallStatus.ACTIVE
                  ? "Interview Active"
                  : callStatus === CallStatus.CONNECTING
                  ? "Connecting..."
                  : callStatus === CallStatus.FINISHED
                  ? "Interview Completed"
                  : "Ready to Start"}
              </span>
            </div>
            <div className="text-slate-400">Question 1 of 10</div>
            <div className="text-slate-400">30 min session</div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="w-12 h-12 bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 rounded-full flex items-center justify-center text-red-400 transition-all duration-200 hover:scale-110">
              <span className="text-lg">●</span>
            </button>
            <button className="w-12 h-12 bg-slate-600/50 hover:bg-slate-600/70 border border-slate-500/50 rounded-full flex items-center justify-center text-slate-300 transition-all duration-200 hover:scale-110">
              <span className="text-lg">MIC</span>
            </button>
            <button className="w-12 h-12 bg-slate-600/50 hover:bg-slate-600/70 border border-slate-500/50 rounded-full flex items-center justify-center text-slate-300 transition-all duration-200 hover:scale-110">
              <span className="text-lg">CAM</span>
            </button>
            <button className="w-12 h-12 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 rounded-full flex items-center justify-center text-blue-400 transition-all duration-200 hover:scale-110">
              <span className="text-lg">CHAT</span>
            </button>

            {/* Main Call Button */}
            {callStatus !== CallStatus.ACTIVE ? (
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  callStatus === CallStatus.CONNECTING
                    ? "bg-yellow-600 hover:bg-yellow-700 text-white cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 text-white hover:scale-105"
                }`}
                onClick={handleCall}
                disabled={callStatus === CallStatus.CONNECTING}
              >
                <span className="text-lg">CALL</span>
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
            ) : (
              <button
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 hover:scale-105"
                onClick={handleDisconnect}
              >
                <span className="text-lg">END</span>
                <span>End Call</span>
              </button>
            )}
          </div>
        </div>

        {/* Live Transcript */}
        {messages.length > 0 && (
          <div className="mt-4 max-w-7xl mx-auto p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-600/30">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-400 font-medium">
                Live Transcript
              </span>
            </div>
            <p
              key={lastMessage}
              className={cn(
                "text-white transition-opacity duration-500 opacity-0",
                "animate-fadeIn opacity-100"
              )}
            >
              {lastMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agent;
