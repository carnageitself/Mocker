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
} from "lucide-react";

// Extended interview templates data
const interviewTemplates = [
  // Frontend Development
  {
    id: "frontend-react-1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "JavaScript", "CSS", "HTML", "Redux"],
    category: "Frontend",
    difficulty: "Intermediate",
    duration: "45 minutes",
    questions: 12,
    description:
      "Comprehensive React ecosystem interview covering hooks, state management, and modern patterns",
    rating: 4.8,
    completions: 2340,
    tags: ["Popular", "Updated"],
  },
  {
    id: "frontend-vue-1",
    role: "Vue.js Developer",
    type: "Technical",
    techstack: ["Vue.js", "JavaScript", "Nuxt.js", "Vuex"],
    category: "Frontend",
    difficulty: "Intermediate",
    duration: "40 minutes",
    questions: 10,
    description:
      "Vue.js focused interview with composition API and ecosystem tools",
    rating: 4.6,
    completions: 1200,
    tags: ["Trending"],
  },
  {
    id: "frontend-angular-1",
    role: "Angular Developer",
    type: "Technical",
    techstack: ["Angular", "TypeScript", "RxJS", "NgRx"],
    category: "Frontend",
    difficulty: "Advanced",
    duration: "50 minutes",
    questions: 14,
    description:
      "Advanced Angular interview covering architecture, observables, and enterprise patterns",
    rating: 4.7,
    completions: 980,
    tags: [],
  },

  // Backend Development
  {
    id: "backend-node-1",
    role: "Backend Developer",
    type: "Technical",
    techstack: ["Node.js", "Express", "MongoDB", "Redis"],
    category: "Backend",
    difficulty: "Intermediate",
    duration: "45 minutes",
    questions: 13,
    description:
      "Node.js backend development with database optimization and API design",
    rating: 4.9,
    completions: 3100,
    tags: ["Popular", "Hot"],
  },
  {
    id: "backend-python-1",
    role: "Python Developer",
    type: "Technical",
    techstack: ["Python", "Django", "PostgreSQL", "Celery"],
    category: "Backend",
    difficulty: "Intermediate",
    duration: "50 minutes",
    questions: 15,
    description:
      "Python backend development with Django framework and async processing",
    rating: 4.8,
    completions: 2800,
    tags: ["Popular"],
  },
  {
    id: "backend-java-1",
    role: "Java Developer",
    type: "Technical",
    techstack: ["Java", "Spring Boot", "MySQL", "Kafka"],
    category: "Backend",
    difficulty: "Advanced",
    duration: "55 minutes",
    questions: 16,
    description:
      "Enterprise Java development with Spring ecosystem and microservices",
    rating: 4.7,
    completions: 2100,
    tags: ["Enterprise"],
  },

  // Full Stack
  {
    id: "fullstack-mern-1",
    role: "Full Stack Developer",
    type: "Technical",
    techstack: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    difficulty: "Advanced",
    duration: "60 minutes",
    questions: 18,
    description:
      "Complete MERN stack interview covering end-to-end development",
    rating: 4.9,
    completions: 4200,
    tags: ["Popular", "Comprehensive"],
  },
  {
    id: "fullstack-next-1",
    role: "Next.js Developer",
    type: "Technical",
    techstack: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    category: "Full Stack",
    difficulty: "Advanced",
    duration: "55 minutes",
    questions: 16,
    description: "Modern full-stack development with Next.js and TypeScript",
    rating: 4.8,
    completions: 1800,
    tags: ["Modern", "Trending"],
  },

  // Data Science & AI
  {
    id: "data-scientist-1",
    role: "Data Scientist",
    type: "Technical",
    techstack: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
    category: "Data Science",
    difficulty: "Advanced",
    duration: "60 minutes",
    questions: 14,
    description:
      "Comprehensive data science interview with ML algorithms and statistical analysis",
    rating: 4.8,
    completions: 1500,
    tags: ["Hot", "AI"],
  },
  {
    id: "ml-engineer-1",
    role: "ML Engineer",
    type: "Technical",
    techstack: ["Python", "PyTorch", "MLOps", "Docker"],
    category: "Data Science",
    difficulty: "Advanced",
    duration: "65 minutes",
    questions: 12,
    description:
      "Machine learning engineering with production deployment focus",
    rating: 4.9,
    completions: 890,
    tags: ["Hot", "MLOps"],
  },

  // DevOps & Cloud
  {
    id: "devops-aws-1",
    role: "DevOps Engineer",
    type: "Technical",
    techstack: ["AWS", "Docker", "Kubernetes", "Terraform"],
    category: "DevOps",
    difficulty: "Advanced",
    duration: "55 minutes",
    questions: 13,
    description: "Cloud infrastructure and DevOps practices with AWS focus",
    rating: 4.7,
    completions: 1600,
    tags: ["Cloud", "Popular"],
  },
  {
    id: "sre-1",
    role: "Site Reliability Engineer",
    type: "Technical",
    techstack: ["Linux", "Monitoring", "Automation", "Go"],
    category: "DevOps",
    difficulty: "Advanced",
    duration: "50 minutes",
    questions: 11,
    description:
      "SRE practices including monitoring, incident response, and automation",
    rating: 4.6,
    completions: 720,
    tags: ["SRE"],
  },

  // Product & Management
  {
    id: "product-manager-1",
    role: "Product Manager",
    type: "Behavioral",
    techstack: ["Product Strategy", "Analytics", "User Research"],
    category: "Product",
    difficulty: "Intermediate",
    duration: "40 minutes",
    questions: 8,
    description:
      "Product management interview focusing on strategy, prioritization, and stakeholder management",
    rating: 4.7,
    completions: 2200,
    tags: ["Popular", "Leadership"],
  },
  {
    id: "engineering-manager-1",
    role: "Engineering Manager",
    type: "Mixed",
    techstack: ["Leadership", "Technical Strategy", "Team Management"],
    category: "Management",
    difficulty: "Advanced",
    duration: "50 minutes",
    questions: 10,
    description:
      "Engineering leadership interview covering technical and people management",
    rating: 4.8,
    completions: 1100,
    tags: ["Leadership", "Management"],
  },

  // Mobile Development
  {
    id: "mobile-react-native-1",
    role: "React Native Developer",
    type: "Technical",
    techstack: ["React Native", "JavaScript", "Expo", "Firebase"],
    category: "Mobile",
    difficulty: "Intermediate",
    duration: "45 minutes",
    questions: 12,
    description: "Cross-platform mobile development with React Native",
    rating: 4.6,
    completions: 1400,
    tags: ["Mobile", "Cross-platform"],
  },
  {
    id: "mobile-flutter-1",
    role: "Flutter Developer",
    type: "Technical",
    techstack: ["Flutter", "Dart", "Firebase", "State Management"],
    category: "Mobile",
    difficulty: "Intermediate",
    duration: "45 minutes",
    questions: 11,
    description: "Flutter mobile app development with modern patterns",
    rating: 4.7,
    completions: 960,
    tags: ["Mobile", "Google"],
  },

  // Security
  {
    id: "cybersecurity-1",
    role: "Cybersecurity Analyst",
    type: "Technical",
    techstack: [
      "Security",
      "OWASP",
      "Penetration Testing",
      "Incident Response",
    ],
    category: "Security",
    difficulty: "Advanced",
    duration: "50 minutes",
    questions: 13,
    description:
      "Cybersecurity interview covering threat analysis and security protocols",
    rating: 4.8,
    completions: 650,
    tags: ["Security", "Critical"],
  },
];

const categories = [
  {
    id: "all",
    name: "All Categories",
    icon: Globe,
    count: interviewTemplates.length,
  },
  {
    id: "Frontend",
    name: "Frontend",
    icon: Palette,
    count: interviewTemplates.filter((t) => t.category === "Frontend").length,
  },
  {
    id: "Backend",
    name: "Backend",
    icon: Database,
    count: interviewTemplates.filter((t) => t.category === "Backend").length,
  },
  {
    id: "Full Stack",
    name: "Full Stack",
    icon: Code,
    count: interviewTemplates.filter((t) => t.category === "Full Stack").length,
  },
  {
    id: "Data Science",
    name: "Data Science",
    icon: BarChart3,
    count: interviewTemplates.filter((t) => t.category === "Data Science")
      .length,
  },
  {
    id: "DevOps",
    name: "DevOps",
    icon: Cloud,
    count: interviewTemplates.filter((t) => t.category === "DevOps").length,
  },
  {
    id: "Mobile",
    name: "Mobile",
    icon: Smartphone,
    count: interviewTemplates.filter((t) => t.category === "Mobile").length,
  },
  {
    id: "Product",
    name: "Product",
    icon: Briefcase,
    count: interviewTemplates.filter((t) => t.category === "Product").length,
  },
  {
    id: "Management",
    name: "Management",
    icon: Users,
    count: interviewTemplates.filter((t) => t.category === "Management").length,
  },
  {
    id: "Security",
    name: "Security",
    icon: Shield,
    count: interviewTemplates.filter((t) => t.category === "Security").length,
  },
];

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
const types = ["All", "Technical", "Behavioral", "Mixed"];
const durations = ["All", "< 30 min", "30-45 min", "45-60 min", "> 60 min"];

const TemplateCard = ({ template }) => {
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
  const [showFilters, setShowFilters] = useState(false);

  const filteredTemplates = useMemo(() => {
    return interviewTemplates.filter((template) => {
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
  }, [
    searchQuery,
    selectedCategory,
    selectedDifficulty,
    selectedType,
    selectedDuration,
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/40 to-pink-900/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3 animate-ping"></span>
              Interview Templates Library
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Perfect Template
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Discover expertly crafted interview templates for every role and
              skill level. Start practicing with industry-standard questions
              tailored to your career goals.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search templates by role, skills, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 bg-gray-900/80 border-gray-700 rounded-2xl text-white placeholder-gray-400 text-lg backdrop-blur-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-center mb-8">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-gray-800/80 hover:bg-gray-700/80 text-white border border-gray-600 rounded-xl px-6 py-3 backdrop-blur-sm"
            >
              <Filter className="w-4 h-4 mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
              <ChevronDown
                className={`w-4 h-4 ml-2 transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-8 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/60"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advanced Filters */}
      {showFilters && (
        <section className="relative py-8 bg-gray-900/50 border-b border-gray-800">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Difficulty
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                >
                  {difficulties.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Interview Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Duration
                </label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                >
                  {durations.map((duration) => (
                    <option key={duration} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                {hasActiveFilters && (
                  <Button
                    onClick={clearFilters}
                    className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg py-2 flex items-center justify-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Clear All
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Header */}
      <section className="relative py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {filteredTemplates.length} Templates Found
              </h2>
              <p className="text-gray-400 mt-1">
                {selectedCategory !== "all"
                  ? `in ${selectedCategory}`
                  : "across all categories"}
              </p>
            </div>

            {hasActiveFilters && (
              <div className="flex items-center gap-2 text-sm text-purple-300">
                <Filter className="w-4 h-4" />
                Filters active
              </div>
            )}
          </div>

          {/* Templates Grid */}
          {filteredTemplates.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No Templates Found
              </h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
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
    </div>
  );
}
