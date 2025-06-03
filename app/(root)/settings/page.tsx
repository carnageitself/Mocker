"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Smith",
    email: "john.smith@example.com",
    bio: "Senior Software Engineer with 5+ years of experience in full-stack development.",
    location: "San Francisco, CA",
    company: "Tech Corp",
    website: "https://johnsmith.dev",
    linkedin: "https://linkedin.com/in/johnsmith",
    github: "https://github.com/johnsmith",
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    weeklyReport: true,
    interviewReminders: true,
    theme: "dark",
    language: "en",
    timezone: "PST",
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorEnabled: false,
    sessionTimeout: "24h",
    loginAlerts: true,
  });

  const handleSaveProfile = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSavePreferences = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Preferences saved successfully!");
    } catch (error) {
      toast.error("Failed to save preferences");
    } finally {
      setIsLoading(false);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "preferences", label: "Preferences", icon: "⚙️" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "billing", label: "Billing", icon: "💳" },
    { id: "support", label: "Support", icon: "🎧" },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/15 to-pink-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-2 animate-pulse"></span>
            Account Settings
          </div>
          <h1 className="text-4xl font-black text-white mb-3">Settings</h1>
          <p className="text-gray-300 text-lg">
            Manage your account preferences and security settings
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/60 p-6 sticky top-8">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/60 overflow-hidden">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white">
                      Profile Information
                    </h2>
                    <div className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30 text-sm font-medium">
                      ✓ Verified Account
                    </div>
                  </div>

                  {/* Profile Picture Section */}
                  <div className="flex items-center space-x-6 mb-8 p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                        <span className="text-white text-2xl font-bold">
                          {getInitials(profileData.name)}
                        </span>
                      </div>
                      <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors shadow-lg">
                        <span className="text-white text-sm">📷</span>
                      </button>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {profileData.name}
                      </h3>
                      <p className="text-gray-400 mb-3">{profileData.email}</p>
                      <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium">
                        Change Photo
                      </button>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            location: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                        placeholder="City, State"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={profileData.company}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            company: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                        placeholder="Your current company"
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Bio
                    </label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) =>
                        setProfileData({ ...profileData, bio: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  {/* Social Links */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Social Links
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          LinkedIn
                        </label>
                        <input
                          type="url"
                          value={profileData.linkedin}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              linkedin: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          GitHub
                        </label>
                        <input
                          type="url"
                          value={profileData.github}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              github: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                          placeholder="https://github.com/username"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleSaveProfile}
                      disabled={isLoading}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Saving...</span>
                        </div>
                      ) : (
                        "Save Changes"
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Preferences Tab */}
              {activeTab === "preferences" && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Preferences
                  </h2>

                  {/* Notifications */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Notifications
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          key: "emailNotifications",
                          label: "Email Notifications",
                          desc: "Receive notifications via email",
                        },
                        {
                          key: "pushNotifications",
                          label: "Push Notifications",
                          desc: "Browser push notifications",
                        },
                        {
                          key: "marketingEmails",
                          label: "Marketing Emails",
                          desc: "Product updates and tips",
                        },
                        {
                          key: "weeklyReport",
                          label: "Weekly Report",
                          desc: "Summary of your interview progress",
                        },
                        {
                          key: "interviewReminders",
                          label: "Interview Reminders",
                          desc: "Reminders for scheduled interviews",
                        },
                      ].map((setting) => (
                        <div
                          key={setting.key}
                          className="flex items-center justify-between p-4 bg-gray-800/40 rounded-xl border border-gray-600/30"
                        >
                          <div>
                            <div className="text-white font-medium">
                              {setting.label}
                            </div>
                            <div className="text-gray-400 text-sm">
                              {setting.desc}
                            </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={
                                preferences[
                                  setting.key as keyof typeof preferences
                                ] as boolean
                              }
                              onChange={(e) =>
                                setPreferences({
                                  ...preferences,
                                  [setting.key]: e.target.checked,
                                })
                              }
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-purple-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Theme & Language */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Appearance & Language
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Theme
                        </label>
                        <select
                          value={preferences.theme}
                          onChange={(e) =>
                            setPreferences({
                              ...preferences,
                              theme: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                        >
                          <option value="dark">Dark</option>
                          <option value="light">Light</option>
                          <option value="auto">Auto</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Language
                        </label>
                        <select
                          value={preferences.language}
                          onChange={(e) =>
                            setPreferences({
                              ...preferences,
                              language: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                        >
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleSavePreferences}
                      disabled={isLoading}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isLoading ? "Saving..." : "Save Preferences"}
                    </button>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === "security" && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Security & Privacy
                  </h2>

                  {/* Password Section */}
                  <div className="mb-8 p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Password
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Last changed 3 months ago
                    </p>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors">
                      Change Password
                    </button>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="mb-8 p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Two-Factor Authentication
                        </h3>
                        <p className="text-gray-400">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={securitySettings.twoFactorEnabled}
                          onChange={(e) =>
                            setSecuritySettings({
                              ...securitySettings,
                              twoFactorEnabled: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-purple-600"></div>
                      </label>
                    </div>
                    {securitySettings.twoFactorEnabled && (
                      <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                        <div className="flex items-center space-x-2 text-green-400 text-sm">
                          <span>✓</span>
                          <span>Two-factor authentication is enabled</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Session Management */}
                  <div className="mb-8 p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Session Management
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Session Timeout
                        </label>
                        <select
                          value={securitySettings.sessionTimeout}
                          onChange={(e) =>
                            setSecuritySettings({
                              ...securitySettings,
                              sessionTimeout: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                        >
                          <option value="1h">1 Hour</option>
                          <option value="24h">24 Hours</option>
                          <option value="7d">7 Days</option>
                          <option value="30d">30 Days</option>
                        </select>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors">
                      Sign Out All Devices
                    </button>
                  </div>

                  <div className="flex justify-end">
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Save Security Settings
                    </button>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === "billing" && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Billing & Subscription
                  </h2>

                  {/* Current Plan */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/30">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          Pro Plan
                        </h3>
                        <p className="text-gray-300">
                          $29/month • Billed monthly
                        </p>
                      </div>
                      <div className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                        Active
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">
                      Next billing date: March 15, 2024
                    </p>
                    <div className="flex space-x-4">
                      <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-xl transition-colors">
                        Change Plan
                      </button>
                      <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors">
                        Cancel Subscription
                      </button>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-8 p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Payment Method
                    </h3>
                    <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-xl">
                      <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                        VISA
                      </div>
                      <div>
                        <div className="text-white font-medium">
                          •••• •••• •••• 4242
                        </div>
                        <div className="text-gray-400 text-sm">
                          Expires 12/2025
                        </div>
                      </div>
                      <button className="ml-auto px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors">
                        Edit
                      </button>
                    </div>
                  </div>

                  {/* Billing History */}
                  <div className="p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Billing History
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          date: "Feb 15, 2024",
                          amount: "$29.00",
                          status: "Paid",
                        },
                        {
                          date: "Jan 15, 2024",
                          amount: "$29.00",
                          status: "Paid",
                        },
                        {
                          date: "Dec 15, 2023",
                          amount: "$29.00",
                          status: "Paid",
                        },
                      ].map((invoice, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="text-white font-medium">
                              {invoice.date}
                            </div>
                            <div className="text-gray-400">
                              {invoice.amount}
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                              {invoice.status}
                            </span>
                            <button className="text-blue-400 hover:text-blue-300 text-sm">
                              Download
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Support Tab */}
              {activeTab === "support" && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Help & Support
                  </h2>

                  {/* Quick Help */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30 hover:border-blue-500/50 transition-colors cursor-pointer">
                      <div className="text-2xl mb-3">📚</div>
                      <h3 className="text-white font-semibold mb-2">
                        Knowledge Base
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Find answers to common questions
                      </p>
                    </div>
                    <div className="p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30 hover:border-blue-500/50 transition-colors cursor-pointer">
                      <div className="text-2xl mb-3">💬</div>
                      <h3 className="text-white font-semibold mb-2">
                        Live Chat
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Chat with our support team
                      </p>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Contact Support
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                          placeholder="How can we help?"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-all duration-300 resize-none"
                          placeholder="Describe your issue..."
                        />
                      </div>
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
