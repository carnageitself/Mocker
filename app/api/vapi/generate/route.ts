import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body;
    const { function_call } = message;

    if (!function_call) {
      return NextResponse.json(
        { error: "No function call provided" },
        { status: 400 }
      );
    }

    const { name, parameters } = function_call;

    switch (name) {
      case "generate_interview":
        const { role, level, type, techstack, amount, userid } = parameters;

        // Convert techstack array to string for the AI prompt
        const techstackString = Array.isArray(techstack)
          ? techstack.join(", ")
          : techstack;

        // Use your existing AI generation logic
        const { text: questions } = await generateText({
          model: google("gemini-2.0-flash-001"),
          prompt: `Prepare questions for a job interview.
            The job role is ${role}.
            The job experience level is ${level}.
            The tech stack used in the job is: ${techstackString}.
            The focus between behavioural and technical questions should lean towards: ${type}.
            The amount of questions required is: ${amount}.
            Please return only the questions, without any additional text.
            The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
            Return the questions formatted like this:
            ["Question 1", "Question 2", "Question 3"]
            
            Thank you! <3
          `,
        });

        // Parse the generated questions
        let parsedQuestions;
        try {
          parsedQuestions = JSON.parse(questions);
        } catch (parseError) {
          console.error("Failed to parse questions:", parseError);
          // Fallback: try to extract questions manually if JSON parsing fails
          parsedQuestions = questions
            .split("\n")
            .filter((q) => q.trim().length > 0);
        }

        // Create interview object using your existing structure
        const interview = {
          role: role,
          type: type,
          level: level,
          techstack: Array.isArray(techstack)
            ? techstack
            : techstack.split(",").map((t: string) => t.trim()),
          questions: parsedQuestions,
          userId: userid || "anonymous",
          finalized: true,
          coverImage: getRandomInterviewCover(),
          createdAt: new Date().toISOString(),
        };

        // Save to Firebase using your existing logic
        const docRef = await db.collection("interviews").add(interview);

        return NextResponse.json({
          result: {
            success: true,
            message: `Perfect! I've successfully generated ${parsedQuestions.length} ${type} interview questions for a ${level} ${role} position focusing on ${techstackString}. The interview has been created and saved to your account. You can find it in your dashboard, or would you like me to conduct this interview with you right now?`,
            interview: {
              ...interview,
              id: docRef.id,
            },
          },
        });

      case "save_interview":
        const { interview_data } = parameters;

        // Save to Firebase
        const saveDocRef = await db.collection("interviews").add({
          ...interview_data,
          finalized: true,
          coverImage: getRandomInterviewCover(),
          createdAt: new Date().toISOString(),
        });

        return NextResponse.json({
          result: {
            success: true,
            message:
              "Excellent! Your interview has been saved successfully. You can find it in your dashboard and start practicing whenever you're ready.",
            interviewId: saveDocRef.id,
          },
        });

      default:
        return NextResponse.json(
          { error: "Unknown function" },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error("Function call error:", error);
    return NextResponse.json(
      {
        result: {
          success: false,
          message:
            "I apologize, but there was an error generating your interview. Please try again or contact support if the issue persists.",
          error: error instanceof Error ? error.message : "Unknown error",
        },
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: true, data: "Vapi Functions endpoint is working!" },
    { status: 200 }
  );
}
