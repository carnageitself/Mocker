"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface InterviewGeneratorFormProps {
  userId: string;
}

interface FormData {
  role: string;
  level: "entry" | "mid" | "senior";
  type: "behavioural" | "technical" | "mixed";
  amount: number;
  techstack: string;
  jobDescription: string;
}

interface GeminiAnalysis {
  role: string;
  level: "entry" | "mid" | "senior";
  type: "behavioural" | "technical" | "mixed";
  techstack: string[];
  confidence: number;
  reasoning: string;
}

export default function InterviewGeneratorForm({
  userId,
}: InterviewGeneratorFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessingFile, setIsProcessingFile] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [geminiAnalysis, setGeminiAnalysis] = useState<GeminiAnalysis | null>(
    null
  );
  const [formData, setFormData] = useState<FormData>({
    role: "",
    level: "mid",
    type: "technical",
    amount: 5,
    techstack: "",
    jobDescription: "",
  });

  // Gemini AI Analysis Function
  const analyzeWithGemini = async (
    text: string
  ): Promise<GeminiAnalysis | null> => {
    if (!text || text.trim().length < 20) return null;

    setIsAnalyzing(true);

    try {
      const response = await fetch("/api/gemini/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobDescription: text,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze with Gemini");
      }

      const analysis = await response.json();
      return analysis;
    } catch (error) {
      console.error("Gemini analysis error:", error);
      // Fallback to basic pattern matching if Gemini fails
      return fallbackAnalysis(text);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Fallback analysis function (your existing logic)
  const fallbackAnalysis = (text: string): GeminiAnalysis => {
    const lowerText = text.toLowerCase();

    // Role detection
    const rolePatterns = [
      {
        pattern: /(frontend|front-end|front end).*(developer|engineer)/i,
        role: "Frontend Developer",
      },
      {
        pattern: /(backend|back-end|back end).*(developer|engineer)/i,
        role: "Backend Developer",
      },
      {
        pattern: /(fullstack|full-stack|full stack).*(developer|engineer)/i,
        role: "Full Stack Developer",
      },
      {
        pattern: /(react|reactjs).*(developer|engineer)/i,
        role: "React Developer",
      },
      {
        pattern: /(node|nodejs).*(developer|engineer)/i,
        role: "Node.js Developer",
      },
      {
        pattern: /(software|web).*(developer|engineer)/i,
        role: "Software Developer",
      },
      {
        pattern: /(ui\/ux|ux\/ui|user experience|user interface).*(designer)/i,
        role: "UX/UI Designer",
      },
      { pattern: /(data scientist)/i, role: "Data Scientist" },
      { pattern: /(devops|dev ops).*(engineer)/i, role: "DevOps Engineer" },
    ];

    let detectedRole = "Software Developer";
    for (const { pattern, role } of rolePatterns) {
      if (pattern.test(text)) {
        detectedRole = role;
        break;
      }
    }

    // Level detection
    let level: "entry" | "mid" | "senior" = "mid";
    if (/(senior|lead|principal|staff|architect)/i.test(text)) {
      level = "senior";
    } else if (/(junior|entry|graduate|intern|0-2 years)/i.test(text)) {
      level = "entry";
    }

    // Type detection
    let type: "behavioural" | "technical" | "mixed" = "technical";
    if (/(behavioral|behaviour|culture|team|leadership)/i.test(text)) {
      type = "mixed";
    }

    // Tech stack detection
    const techPatterns = [
      "react",
      "vue",
      "angular",
      "javascript",
      "typescript",
      "node.js",
      "nodejs",
      "python",
      "java",
      "c#",
      "php",
      "ruby",
      "go",
      "rust",
      "swift",
      "kotlin",
      "html",
      "css",
      "sass",
      "scss",
      "tailwind",
      "bootstrap",
      "jquery",
      "express",
      "fastapi",
      "django",
      "flask",
      "spring",
      "laravel",
      "mongodb",
      "mysql",
      "postgresql",
      "redis",
      "elasticsearch",
      "aws",
      "azure",
      "gcp",
      "docker",
      "kubernetes",
      "jenkins",
      "git",
      "github",
      "gitlab",
      "jira",
      "figma",
      "sketch",
    ];

    const detectedTechs = techPatterns.filter((tech) =>
      lowerText.includes(tech.toLowerCase())
    );

    return {
      role: detectedRole,
      level,
      type,
      techstack: detectedTechs,
      confidence: 0.7,
      reasoning: "Fallback pattern matching analysis",
    };
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = [
      "text/plain",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a valid file format (.txt, .pdf, .doc, .docx)");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size should be less than 5MB");
      return;
    }

    setUploadedFile(file);
    setIsProcessingFile(true);

    try {
      let extractedText = "";

      if (file.type === "text/plain") {
        extractedText = await file.text();
      } else if (file.type === "application/pdf") {
        // Handle PDF files
        const reader = new FileReader();
        reader.onload = async (event) => {
          const arrayBuffer = event.target?.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);

          try {
            const textDecoder = new TextDecoder("utf-8");
            const pdfText = textDecoder.decode(uint8Array);

            const textMatches = pdfText.match(/BT\s.*?ET/g);
            if (textMatches) {
              extractedText = textMatches
                .join(" ")
                .replace(/BT\s|ET/g, "")
                .replace(/[^\x20-\x7E]/g, " ")
                .replace(/\s+/g, " ")
                .trim();
            }

            if (!extractedText || extractedText.length < 50) {
              extractedText = pdfText
                .replace(/[^\x20-\x7E\n]/g, " ")
                .replace(/\s+/g, " ")
                .split(" ")
                .filter((word) => word.length > 2 && /^[a-zA-Z]/.test(word))
                .join(" ");
            }

            if (extractedText && extractedText.length > 20) {
              setFormData((prev) => ({
                ...prev,
                jobDescription: extractedText,
              }));

              // Use Gemini for analysis
              const analysis = await analyzeWithGemini(extractedText);
              if (analysis) {
                setGeminiAnalysis(analysis);
                applyGeminiAnalysis(analysis);
              }
            } else {
              alert(
                "Could not extract text from PDF. Please copy and paste the content manually."
              );
            }
          } catch (error) {
            console.error("PDF parsing error:", error);
            alert(
              "Could not read PDF content. Please copy and paste the text manually."
            );
          }
          setIsProcessingFile(false);
        };
        reader.readAsArrayBuffer(file);
        return;
      } else if (
        file.type === "application/msword" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        // Handle Word documents
        const reader = new FileReader();
        reader.onload = async (event) => {
          const arrayBuffer = event.target?.result as ArrayBuffer;

          if (
            file.type ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          ) {
            try {
              const uint8Array = new Uint8Array(arrayBuffer);
              const textDecoder = new TextDecoder("utf-8", { fatal: false });
              const docxText = textDecoder.decode(uint8Array);

              const textMatches = docxText.match(/<w:t[^>]*>([^<]*)<\/w:t>/g);
              if (textMatches) {
                extractedText = textMatches
                  .map((match) => match.replace(/<w:t[^>]*>|<\/w:t>/g, ""))
                  .join(" ")
                  .replace(/\s+/g, " ")
                  .trim();
              }

              if (extractedText && extractedText.length > 20) {
                setFormData((prev) => ({
                  ...prev,
                  jobDescription: extractedText,
                }));

                // Use Gemini for analysis
                const analysis = await analyzeWithGemini(extractedText);
                if (analysis) {
                  setGeminiAnalysis(analysis);
                  applyGeminiAnalysis(analysis);
                }
              } else {
                alert(
                  "Could not extract text from Word document. Please copy and paste the content manually."
                );
              }
            } catch (error) {
              console.error("DOCX parsing error:", error);
              alert(
                "Could not read Word document. Please copy and paste the text manually."
              );
            }
          } else {
            alert(
              "Legacy .doc files are not supported. Please save as .docx or copy and paste the content manually."
            );
          }
          setIsProcessingFile(false);
        };
        reader.readAsArrayBuffer(file);
        return;
      }

      // For plain text files
      if (extractedText) {
        setFormData((prev) => ({ ...prev, jobDescription: extractedText }));

        // Use Gemini for analysis
        const analysis = await analyzeWithGemini(extractedText);
        if (analysis) {
          setGeminiAnalysis(analysis);
          applyGeminiAnalysis(analysis);
        }
      }
    } catch (error) {
      console.error("Error processing file:", error);
      alert(
        "Error processing file. Please try again or paste the content manually."
      );
    } finally {
      if (file.type === "text/plain") {
        setIsProcessingFile(false);
      }
    }
  };

  const applyGeminiAnalysis = (analysis: GeminiAnalysis) => {
    setFormData((prev) => ({
      ...prev,
      role: analysis.role,
      level: analysis.level,
      type: analysis.type,
      techstack: analysis.techstack.join(", "),
    }));
  };

  const handleManualAnalysis = async () => {
    if (
      !formData.jobDescription ||
      formData.jobDescription.trim().length < 20
    ) {
      alert("Please enter a job description first");
      return;
    }

    setIsAnalyzing(true);
    const analysis = await analyzeWithGemini(formData.jobDescription);
    if (analysis) {
      setGeminiAnalysis(analysis);
      applyGeminiAnalysis(analysis);
    }
    setIsAnalyzing(false);
  };

  const clearFile = () => {
    setUploadedFile(null);
    setGeminiAnalysis(null);
    setFormData((prev) => ({
      ...prev,
      jobDescription: "",
      role: "",
      techstack: "",
      level: "mid",
      type: "technical",
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const response = await fetch("/api/vapi/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            function_call: {
              name: "generate_interview",
              parameters: {
                role: formData.role,
                level: formData.level,
                type: formData.type,
                amount: formData.amount,
                techstack: formData.techstack,
                jobDescription: formData.jobDescription,
                userid: userId,
              },
            },
          },
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("API Response:", result);

        if (
          result.result &&
          result.result.interview &&
          result.result.interview.id
        ) {
          router.push(`/interview/${result.result.interview.id}`);
        } else {
          console.error("Unexpected response structure:", result);
          throw new Error("Interview ID not found in response");
        }
      } else {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(errorData.error || "Failed to generate interview");
      }
    } catch (error) {
      console.error("Error generating interview:", error);
      alert("Failed to generate interview. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? parseInt(value) || 1 : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Job Description Upload Section */}
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <span className="mr-2">🤖</span>
            AI-Powered Job Analysis
          </h3>
          {uploadedFile && (
            <button
              type="button"
              onClick={clearFile}
              className="text-red-400 hover:text-red-300 text-sm"
            >
              Clear File
            </button>
          )}
        </div>

        <p className="text-gray-400 text-sm mb-4">
          Upload or paste a job description for AI-powered analysis using Google
          Gemini
        </p>

        {/* File Upload */}
        <div className="mb-4">
          <input
            ref={fileInputRef}
            type="file"
            accept=".txt,.pdf,.doc,.docx"
            onChange={handleFileUpload}
            className="hidden"
            id="jobDescFile"
          />
          <label
            htmlFor="jobDescFile"
            className="cursor-pointer inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
          >
            <span className="mr-2">📎</span>
            {uploadedFile ? "Change File" : "Upload File"}
          </label>

          {uploadedFile && (
            <div className="mt-2 flex items-center text-sm text-gray-300">
              <span className="mr-2">✅</span>
              <span>{uploadedFile.name}</span>
              <span className="ml-2 text-gray-500">
                ({Math.round(uploadedFile.size / 1024)}KB)
              </span>
            </div>
          )}
        </div>

        {/* Manual Job Description Input */}
        <div>
          <label
            htmlFor="jobDescription"
            className="block text-sm font-medium text-white mb-2"
          >
            Or paste job description manually:
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleInputChange}
            placeholder="Paste the job description here for AI analysis..."
            rows={4}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-gray-400">
              Powered by Google Gemini AI for intelligent field detection
            </p>
            {formData.jobDescription && (
              <button
                type="button"
                onClick={handleManualAnalysis}
                disabled={isAnalyzing}
                className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded font-medium disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <span className="animate-spin inline-block w-3 h-3 border border-current border-t-transparent rounded-full mr-1"></span>
                    Analyzing...
                  </>
                ) : (
                  <>🔍 Analyze with AI</>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Processing indicators */}
        {(isProcessingFile || isAnalyzing) && (
          <div className="mt-2 flex items-center text-indigo-400 text-sm">
            <div className="animate-spin inline-block w-4 h-4 border-[2px] border-current border-t-transparent rounded-full mr-2"></div>
            {isProcessingFile
              ? "Processing file..."
              : "Analyzing with Gemini AI..."}
          </div>
        )}
      </div>

      {/* Gemini Analysis Results */}
      {geminiAnalysis && (
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-4 rounded-lg border border-indigo-500/50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <span className="text-indigo-400 mr-2">🧠</span>
              <h4 className="text-white font-medium">Gemini AI Analysis</h4>
              <span className="ml-2 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                {Math.round(geminiAnalysis.confidence * 100)}% Confidence
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-sm mb-3">
            <div className="flex items-center text-gray-300">
              <span className="text-emerald-400 mr-2">✓</span>
              <span>Role: {geminiAnalysis.role}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-emerald-400 mr-2">✓</span>
              <span>
                Level:{" "}
                {geminiAnalysis.level.charAt(0).toUpperCase() +
                  geminiAnalysis.level.slice(1)}
              </span>
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-emerald-400 mr-2">✓</span>
              <span>
                Type:{" "}
                {geminiAnalysis.type.charAt(0).toUpperCase() +
                  geminiAnalysis.type.slice(1)}
              </span>
            </div>
            {geminiAnalysis.techstack.length > 0 && (
              <div className="flex items-start text-gray-300 sm:col-span-2">
                <span className="text-emerald-400 mr-2 mt-0.5">✓</span>
                <div>
                  <span>Tech Stack: </span>
                  <span className="text-indigo-300">
                    {geminiAnalysis.techstack.join(", ")}
                  </span>
                </div>
              </div>
            )}
          </div>

          {geminiAnalysis.reasoning && (
            <div className="bg-gray-800/50 p-3 rounded text-xs text-gray-400">
              <strong>AI Reasoning:</strong> {geminiAnalysis.reasoning}
            </div>
          )}
        </div>
      )}

      {/* Form Fields */}
      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-white mb-2"
        >
          Job Role *{" "}
          {geminiAnalysis && (
            <span className="text-emerald-400 text-xs">(AI-detected)</span>
          )}
        </label>
        <input
          type="text"
          id="role"
          name="role"
          required
          value={formData.role}
          onChange={handleInputChange}
          placeholder="e.g., Frontend Developer, Full Stack Engineer, UX Designer"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label
          htmlFor="level"
          className="block text-sm font-medium text-white mb-2"
        >
          Experience Level *{" "}
          {geminiAnalysis && (
            <span className="text-emerald-400 text-xs">(AI-detected)</span>
          )}
        </label>
        <select
          id="level"
          name="level"
          required
          value={formData.level}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="entry">Entry Level (0-2 years)</option>
          <option value="mid">Mid Level (2-5 years)</option>
          <option value="senior">Senior Level (5+ years)</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="type"
          className="block text-sm font-medium text-white mb-2"
        >
          Interview Type *{" "}
          {geminiAnalysis && (
            <span className="text-emerald-400 text-xs">(AI-detected)</span>
          )}
        </label>
        <select
          id="type"
          name="type"
          required
          value={formData.type}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="technical">Technical Questions</option>
          <option value="behavioural">Behavioral Questions</option>
          <option value="mixed">Mixed (Technical + Behavioral)</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-white mb-2"
        >
          Number of Questions *
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          required
          min="1"
          max="20"
          value={formData.amount}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label
          htmlFor="techstack"
          className="block text-sm font-medium text-white mb-2"
        >
          Technologies/Skills *{" "}
          {geminiAnalysis && (
            <span className="text-emerald-400 text-xs">(AI-detected)</span>
          )}
        </label>
        <textarea
          id="techstack"
          name="techstack"
          required
          value={formData.techstack}
          onChange={handleInputChange}
          placeholder="e.g., React, Node.js, TypeScript, PostgreSQL, AWS"
          rows={3}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <p className="text-sm text-gray-400 mt-1">
          Separate multiple technologies with commas
        </p>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isGenerating || isProcessingFile || isAnalyzing}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? "Generating Interview..." : "Generate Interview"}
      </Button>

      {isGenerating && (
        <div className="text-center">
          <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-indigo-400 rounded-full"></div>
          <p className="text-gray-300 mt-2">
            Creating your personalized interview questions...
          </p>
        </div>
      )}

      {/* Enhanced Help Text */}
      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
        <div className="flex items-start space-x-2">
          <span className="text-indigo-400 mt-0.5">🚀</span>
          <div className="text-sm text-gray-300">
            <p className="font-medium mb-1">Powered by Google Gemini AI:</p>
            <ul className="space-y-1 text-gray-400">
              <li>
                • <strong>Intelligent Analysis</strong>: Advanced AI understands
                context and nuance
              </li>
              <li>
                • <strong>Role Detection</strong>: Accurately identifies job
                roles and responsibilities
              </li>
              <li>
                • <strong>Experience Level</strong>: Analyzes requirements to
                determine seniority
              </li>
              <li>
                • <strong>Tech Stack Extraction</strong>: Identifies
                technologies, frameworks, and tools
              </li>
              <li>
                • <strong>Interview Type</strong>: Determines optimal question
                mix based on role
              </li>
              <li>
                • <strong>Confidence Scoring</strong>: Shows analysis
                reliability for transparency
              </li>
              <li>
                • <strong>Fallback Support</strong>: Pattern matching backup if
                AI is unavailable
              </li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
}
