"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  Clock,
  Users,
  Code,
  Briefcase,
  Database,
  Smartphone,
  Globe,
  Cpu,
  Palette,
  BarChart3,
  Shield,
  Cloud,
  ChevronDown,
  Star,
  Play,
  X,
  SlidersHorizontal,
  CheckCircle,
  Grid3X3,
  List,
  ArrowUpDown,
} from "lucide-react";

// Import data from separate file
import {
  interviewTemplates,
  categories as importedCategories,
  difficulties,
  types,
  durations,
} from "@/app/data/interviewTemplates";

// Icon mapping for categories
const iconMap = {
  Globe,
  Palette,
  Database,
  Code,
  BarChart3,
  Cloud,
  Smartphone,
  Briefcase,
  Users,
  Shield,
  CheckCircle,
};

// Process categories with proper icons
const categories = importedCategories.map((category) => ({
  ...category,
  icon: iconMap[category.icon] || Globe,
}));

const TemplateCard = ({ template, viewMode = "grid" }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-400 bg-green-500/20 border-green-500/30";
      case "Intermediate":
        return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30";
      case "Advanced":
        return "text-red-400 bg-red-500/20 border-red-500/30";
      default:
        return "text-gray-400 bg-gray-500/20 border-gray-500/30";
    }
  };

  const getTypeConfig = (type) => {
    switch (type) {
      case "Technical":
        return { bg: "from-green-500 to-emerald-600", icon: Code };
      case "Behavioral":
        return { bg: "from-blue-500 to-indigo-600", icon: Users };
      case "Mixed":
        return { bg: "from-purple-500 to-pink-600", icon: SlidersHorizontal };
      default:
        return { bg: "from-gray-500 to-gray-600", icon: Code };
    }
  };

  const typeConfig = getTypeConfig(template.type);
  const TypeIcon = typeConfig.icon;

  if (viewMode === "list") {
    return (
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>

        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div
                className={`w-10 h-10 bg-gradient-to-br ${typeConfig.bg} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}
              >
                <TypeIcon className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                    {template.role}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-400">
                      {template.rating}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm truncate">
                  {template.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium border ${getDifficultyColor(
                    template.difficulty
                  )}`}
                >
                  {template.difficulty}
                </span>
                <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded-md text-xs font-medium">
                  {template.type}
                </span>
              </div>

              <div className="hidden md:flex items-center gap-4 text-sm text-gray-400">
                <div className="text-center">
                  <div className="font-semibold text-white">
                    {template.questions}
                  </div>
                  <div className="text-xs">Questions</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white">
                    {template.duration.split(" ")[0]}
                  </div>
                  <div className="text-xs">Minutes</div>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300"
              >
                <Link
                  href={`/interview/${template.id}`}
                  className="flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  <span className="hidden sm:inline">Start</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 h-full backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 bg-gradient-to-br ${typeConfig.bg} rounded-xl flex items-center justify-center shadow-lg`}
            >
              <TypeIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                {template.role}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">
                  {template.category}
                </span>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-400">
                    {template.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          {template.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {template.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
          {template.description}
        </p>

        {/* Difficulty and Type */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`px-2 py-1 rounded-md text-xs font-medium border ${getDifficultyColor(
              template.difficulty
            )}`}
          >
            {template.difficulty}
          </span>
          <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded-md text-xs font-medium">
            {template.type}
          </span>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="text-xs text-gray-400 mb-2">Tech Stack:</div>
          <div className="flex flex-wrap gap-1">
            {template.techstack.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {template.techstack.length > 4 && (
              <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs">
                +{template.techstack.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="text-center">
            <div className="text-lg font-bold text-white">
              {template.questions}
            </div>
            <div className="text-xs text-gray-400">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">
              {template.duration.split(" ")[0]}
            </div>
            <div className="text-xs text-gray-400">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">
              {(template.completions / 1000).toFixed(1)}k
            </div>
            <div className="text-xs text-gray-400">Completed</div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          asChild
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform group-hover:scale-105"
        >
          <Link
            href={`/interview/${template.id}`}
            className="flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4" />
            Start Practice
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default function InterviewTemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("rating");

  const filteredTemplates = useMemo(() => {
    let filtered = interviewTemplates.filter((template) => {
      // Search filter
      const matchesSearch =
        template.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        template.techstack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Category filter
      const matchesCategory =
        selectedCategory === "all" || template.category === selectedCategory;

      // Difficulty filter
      const matchesDifficulty =
        selectedDifficulty === "All" ||
        template.difficulty === selectedDifficulty;

      // Type filter
      const matchesType =
        selectedType === "All" || template.type === selectedType;

      // Duration filter
      const matchesDuration = (() => {
        if (selectedDuration === "All") return true;
        const minutes = parseInt(template.duration);
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
        matchesDifficulty &&
        matchesType &&
        matchesDuration
      );
    });

    // Sort templates
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "duration":
          return parseInt(a.duration) - parseInt(b.duration);
        case "completions":
          return b.completions - a.completions;
        case "alphabetical":
          return a.role.localeCompare(b.role);
        default:
          return 0;
      }
    });

    return filtered;
  }, [
    searchQuery,
    selectedCategory,
    selectedDifficulty,
    selectedType,
    selectedDuration,
    sortBy,
  ]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedDifficulty("All");
    setSelectedType("All");
    setSelectedDuration("All");
  };

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== "all" ||
    selectedDifficulty !== "All" ||
    selectedType !== "All" ||
    selectedDuration !== "All";

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
              Interview Templates Library
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Perfect Template
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-medium px-4">
              Discover expertly crafted interview templates for every role and
              skill level. Start practicing with industry-standard questions
              tailored to your career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
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
                  placeholder="Search templates by role, skills, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 sm:py-4 bg-gray-800/80 border-gray-600 rounded-xl text-white placeholder-gray-400 text-base sm:text-lg backdrop-blur-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {categories.map((category) => {
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
                  <option value="rating">Sort by Rating</option>
                  <option value="duration">Sort by Duration</option>
                  <option value="completions">Sort by Popularity</option>
                  <option value="alphabetical">Sort A-Z</option>
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
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {filteredTemplates.length} Templates Found
              </h2>
              <p className="text-gray-400 mt-1 text-sm sm:text-base">
                {selectedCategory !== "all"
                  ? `in ${
                      categories.find((c) => c.id === selectedCategory)?.name ||
                      selectedCategory
                    }`
                  : "across all categories"}
              </p>
            </div>

            {hasActiveFilters && (
              <div className="flex items-center gap-2 text-sm text-purple-300">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filters active</span>
              </div>
            )}
          </div>

          {/* Templates Grid/List */}
          {filteredTemplates.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                  : "space-y-4"
              }
            >
              {filteredTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 sm:w-12 sm:h-12 text-gray-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                No Templates Found
              </h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm sm:text-base">
                Try adjusting your search criteria or filters to find more
                templates.
              </p>
              <Button
                onClick={clearFilters}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Interview Journey?
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              Choose from our comprehensive collection of interview templates
              and start practicing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl"
              >
                <Link href="/createinterview">Create Custom Interview</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl"
              >
                <Link href="/interviews">View Your History</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
