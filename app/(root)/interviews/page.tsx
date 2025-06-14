"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InterviewCard from "@/components/InterviewCard";
import {
  Search,
  Filter,
  Clock,
  Users,
  Code,
  Briefcase,
  Heart,
  Dna,
  Building,
  Settings,
  Zap,
  Bot,
  TrendingUp,
  Megaphone,
  ShoppingCart,
  GraduationCap,
  Scale,
  BookOpen,
  Leaf,
  Palette,
  Wheat,
  Truck,
  Brain,
  Plane,
  Ship,
  Mountain,
  Building2,
  Pill,
  Shield,
  Radio,
  PawPrint,
  Dumbbell,
  Hotel,
  Gamepad2,
  Calculator,
  Globe,
  X,
  CheckCircle,
  Award,
  Plus,
  Grid3X3,
  List,
  BarChart3,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Import the categories from the templates file
const categories = [
  {
    id: "all",
    name: "All Categories",
    icon: Globe,
  },
  {
    id: "Technology",
    name: "Technology & Software",
    icon: Code,
  },
  {
    id: "Business",
    name: "Business & Strategy",
    icon: Briefcase,
  },
  {
    id: "Finance",
    name: "Finance & Investment",
    icon: TrendingUp,
  },
  {
    id: "Healthcare",
    name: "Healthcare & Medical",
    icon: Heart,
  },
  {
    id: "Biotechnology",
    name: "Biotechnology",
    icon: Dna,
  },
  {
    id: "Civil Engineering",
    name: "Civil Engineering",
    icon: Building,
  },
  {
    id: "Mechanical Engineering",
    name: "Mechanical Engineering",
    icon: Settings,
  },
  {
    id: "Electrical Engineering",
    name: "Electrical Engineering",
    icon: Zap,
  },
  {
    id: "Robotics",
    name: "Robotics & Automation",
    icon: Bot,
  },
  {
    id: "Sales",
    name: "Sales & Business Development",
    icon: TrendingUp,
  },
  {
    id: "Marketing",
    name: "Marketing & Communications",
    icon: Megaphone,
  },
  {
    id: "E-commerce",
    name: "E-commerce & Retail",
    icon: ShoppingCart,
  },
  {
    id: "Academia",
    name: "Academia & Research",
    icon: GraduationCap,
  },
  {
    id: "Legal",
    name: "Legal & Compliance",
    icon: Scale,
  },
  {
    id: "Education",
    name: "Education & Training",
    icon: BookOpen,
  },
  {
    id: "Environmental",
    name: "Environmental & Sustainability",
    icon: Leaf,
  },
  {
    id: "Creative",
    name: "Creative & Media",
    icon: Palette,
  },
  {
    id: "Agriculture",
    name: "Agriculture & Food Science",
    icon: Wheat,
  },
  {
    id: "Logistics",
    name: "Logistics & Transportation",
    icon: Truck,
  },
  {
    id: "Psychology",
    name: "Psychology & Mental Health",
    icon: Brain,
  },
  {
    id: "Aviation",
    name: "Aviation & Aerospace",
    icon: Plane,
  },
  {
    id: "Maritime",
    name: "Maritime & Marine",
    icon: Ship,
  },
  {
    id: "Geology",
    name: "Geology & Mining",
    icon: Mountain,
  },
  {
    id: "Architecture",
    name: "Architecture & Construction",
    icon: Building2,
  },
  {
    id: "Pharmaceuticals",
    name: "Pharmaceuticals & Chemistry",
    icon: Pill,
  },
  {
    id: "Cybersecurity",
    name: "Cybersecurity & InfoSec",
    icon: Shield,
  },
  {
    id: "Telecommunications",
    name: "Telecommunications & Networks",
    icon: Radio,
  },
  {
    id: "Veterinary",
    name: "Veterinary & Animal Science",
    icon: PawPrint,
  },
  {
    id: "Sports",
    name: "Sports & Fitness",
    icon: Dumbbell,
  },
  {
    id: "Hospitality",
    name: "Hospitality & Tourism",
    icon: Hotel,
  },
  {
    id: "Gaming",
    name: "Gaming & Entertainment",
    icon: Gamepad2,
  },
  {
    id: "Insurance",
    name: "Insurance & Actuarial",
    icon: Calculator,
  },
];

// Filter options
const statuses = ["All", "Completed", "Pending"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
const types = ["All", "Technical", "Behavioral", "Mixed"];
const durations = ["All", "< 30 min", "30-45 min", "45-60 min", "> 60 min"];
const sortOptions = [
  "Recent",
  "Oldest",
  "Score (High to Low)",
  "Score (Low to High)",
  "Duration",
];

function InterviewsPage({ userInterviews = [], userId = "user-1" }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [sortBy, setSortBy] = useState("Recent");
  const [viewMode, setViewMode] = useState("grid");

  const filteredAndSortedInterviews = useMemo(() => {
    let filtered = userInterviews.filter((interview) => {
      // Search filter
      const matchesSearch =
        interview.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (interview.techstack &&
          Array.isArray(interview.techstack) &&
          interview.techstack.some((tech) =>
            tech.toLowerCase().includes(searchQuery.toLowerCase())
          ));

      // Category filter - use the category from the interview data
      const matchesCategory =
        selectedCategory === "all" || interview.category === selectedCategory;

      // Status filter - check if interview has feedback (completed) or not (pending)
      const interviewStatus = interview.feedback ? "completed" : "pending";
      const matchesStatus =
        selectedStatus === "All" ||
        (selectedStatus === "Completed" && interviewStatus === "completed") ||
        (selectedStatus === "Pending" && interviewStatus === "pending");

      // Difficulty filter - use the difficulty from interview data
      const matchesDifficulty =
        selectedDifficulty === "All" ||
        interview.difficulty === selectedDifficulty;

      // Type filter
      const normalizedType = /mix/gi.test(interview.type)
        ? "Mixed"
        : interview.type;
      const matchesType =
        selectedType === "All" || normalizedType === selectedType;

      // Duration filter - parse duration string
      const matchesDuration = (() => {
        if (selectedDuration === "All") return true;
        const durationStr = interview.duration || "45 minutes";
        const minutes = parseInt(durationStr.match(/\d+/)?.[0] || "45");
        switch (selectedDuration) {
          case "< 30 min":
            return minutes < 30;
          case "30-45 min":
            return minutes >= 30 && minutes <= 45;
          case "45-60 min":
            return minutes > 45 && minutes <= 60;
          case "> 60 min":
            return minutes > 60;
          default:
            return true;
        }
      })();

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesDifficulty &&
        matchesType &&
        matchesDuration
      );
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "Recent":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "Oldest":
          return new Date(a.createdAt) - new Date(b.createdAt);
        case "Score (High to Low)":
          const scoreA = a.feedback?.totalScore || 0;
          const scoreB = b.feedback?.totalScore || 0;
          return scoreB - scoreA;
        case "Score (Low to High)":
          const scoreA2 = a.feedback?.totalScore || 0;
          const scoreB2 = b.feedback?.totalScore || 0;
          return scoreA2 - scoreB2;
        case "Duration":
          const durationA = parseInt(a.duration?.match(/\d+/)?.[0] || "45");
          const durationB = parseInt(b.duration?.match(/\d+/)?.[0] || "45");
          return durationB - durationA;
        default:
          return 0;
      }
    });

    return filtered;
  }, [
    userInterviews,
    searchQuery,
    selectedCategory,
    selectedStatus,
    selectedDifficulty,
    selectedType,
    selectedDuration,
    sortBy,
  ]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedStatus("All");
    setSelectedDifficulty("All");
    setSelectedType("All");
    setSelectedDuration("All");
    setSortBy("Recent");
  };

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== "all" ||
    selectedStatus !== "All" ||
    selectedDifficulty !== "All" ||
    selectedType !== "All" ||
    selectedDuration !== "All" ||
    sortBy !== "Recent";

  // Calculate stats
  const completedInterviews = userInterviews.filter(
    (i) => i.feedback && i.feedback.totalScore
  );
  const averageScore =
    completedInterviews.length > 0
      ? Math.round(
          completedInterviews.reduce(
            (sum, i) => sum + (i.feedback?.totalScore || 0),
            0
          ) / completedInterviews.length
        )
      : 0;

  // Calculate total hours from duration strings
  const totalHours =
    Math.round(
      (userInterviews.reduce((sum, i) => {
        const minutes = parseInt(i.duration?.match(/\d+/)?.[0] || "45");
        return sum + minutes;
      }, 0) /
        60) *
        10
    ) / 10;

  // Update category counts dynamically
  const categoriesWithCounts = categories.map((category) => ({
    ...category,
    count:
      category.id === "all"
        ? userInterviews.length
        : userInterviews.filter(
            (interview) => interview.category === category.id
          ).length,
  }));

  const hasInterviews = userInterviews.length > 0;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-2 sm:mr-3 animate-ping"></span>
              Your Interview History
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">
              Track Your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Interview Progress
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-medium mb-6 sm:mb-8 px-4">
              Review your completed interviews, track your improvement, and
              continue your journey to landing your dream job.
            </p>

            {/* Stats Cards */}
            {hasInterviews && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">
                    {completedInterviews.length}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Completed Interviews
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">
                    {averageScore}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Average Score
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">
                    {totalHours}h
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Practice Time
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      {hasInterviews && (
        <section className="relative py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Search and Controls Bar */}
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 mb-8">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search interviews by role, skills, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-3 sm:py-4 bg-gray-800/80 border-gray-600 rounded-xl text-white placeholder-gray-400 text-base sm:text-lg backdrop-blur-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {categoriesWithCounts
                    .filter((cat) => cat.count > 0)
                    .slice(0, 8)
                    .map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 text-sm sm:text-base ${
                            selectedCategory === category.id
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                              : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 hover:text-white"
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                          <span className="font-medium hidden sm:inline">
                            {category.name}
                          </span>
                          <span className="font-medium sm:hidden">
                            {category.name.split(" ")[0]}
                          </span>
                          <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full">
                            {category.count}
                          </span>
                        </button>
                      );
                    })}
                </div>
              </div>

              {/* Filters and Controls */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                  {/* Status Filter */}
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:border-purple-500 focus:outline-none"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status === "All" ? "All Status" : status}
                      </option>
                    ))}
                  </select>

                  {/* Difficulty Filter */}
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:border-purple-500 focus:outline-none"
                  >
                    {difficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty === "All" ? "All Levels" : difficulty}
                      </option>
                    ))}
                  </select>

                  {/* Type Filter */}
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:border-purple-500 focus:outline-none"
                  >
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type === "All" ? "All Types" : type}
                      </option>
                    ))}
                  </select>

                  {/* Duration Filter */}
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:border-purple-500 focus:outline-none"
                  >
                    {durations.map((duration) => (
                      <option key={duration} value={duration}>
                        {duration === "All" ? "Any Duration" : duration}
                      </option>
                    ))}
                  </select>

                  {/* Clear Filters */}
                  {hasActiveFilters && (
                    <Button
                      onClick={clearFilters}
                      className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-3 py-2 flex items-center gap-2 text-sm"
                    >
                      <X className="w-4 h-4" />
                      <span className="hidden sm:inline">Clear</span>
                    </Button>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:border-purple-500 focus:outline-none"
                  >
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-1 bg-gray-800 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === "grid"
                          ? "bg-purple-600 text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === "list"
                          ? "bg-purple-600 text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {filteredAndSortedInterviews.length} Interviews Found
                </h2>
                <p className="text-gray-400 mt-1 text-sm sm:text-base">
                  {selectedCategory !== "all"
                    ? `in ${
                        categoriesWithCounts.find(
                          (c) => c.id === selectedCategory
                        )?.name || selectedCategory
                      }`
                    : "across all categories"}
                </p>
              </div>

              <div className="flex items-center gap-4">
                {hasActiveFilters && (
                  <div className="flex items-center gap-2 text-sm text-purple-300">
                    <Filter className="w-4 h-4" />
                    <span className="hidden sm:inline">Filters active</span>
                  </div>
                )}
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center gap-2 text-sm sm:text-base"
                >
                  <Link href="/templates">
                    <Plus className="w-4 h-4" />
                    <span className="hidden sm:inline">New Interview</span>
                    <span className="sm:hidden">New</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Interviews Grid/List */}
            {filteredAndSortedInterviews.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    : "space-y-4"
                }
              >
                {filteredAndSortedInterviews.map((interview) => (
                  <InterviewCard
                    key={interview.id}
                    userId={userId}
                    interviewId={interview.id}
                    role={interview.role}
                    type={interview.type}
                    techstack={interview.techstack}
                    createdAt={interview.createdAt}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 sm:w-12 sm:h-12 text-gray-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  No Interviews Found
                </h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm sm:text-base">
                  Try adjusting your search criteria or filters to find more
                  interviews.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={clearFilters}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl"
                  >
                    Clear All Filters
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-xl"
                  >
                    <Link href="/templates">Browse Templates</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* No Interviews State */}
      {!hasInterviews && (
        <section className="relative py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-12 sm:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl">
                  <span className="text-3xl sm:text-5xl">🎯</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Begin Your Success Story
                </h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg max-w-md mx-auto">
                  Take your first AI-powered mock interview and start tracking
                  your journey to landing your dream job
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/templates">Start Your First Interview</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6">
              Keep Improving Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Interview Skills
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              Practice makes perfect. Continue your interview preparation
              journey with new templates and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl"
              >
                <Link href="/templates">Browse Templates</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl"
              >
                <Link href="/createinterview">Create Custom Interview</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InterviewsPage;
